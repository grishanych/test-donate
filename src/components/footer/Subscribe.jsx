import { useState } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import axios from "axios";
import { object, string } from "yup";
import { FormButton } from "./../button/Button"
import styles from "./Footer.module.scss";

export default function Subscribe() {
  const [showError, setShowError] = useState(false);


  const validationSchema = object().shape({
    email: string()
      .email("Некорректний формат електронної адреси")
  })

  const sendData = (email) => {

    // ! Make the letter!
    const newSubscriber = {
      email: email,
      enabled: true,
      letterSubject: "Subject",
      letterHtml: "<p>Letter</p>",
      date: new Date().toISOString()
    };
    
    
    axios
      .post("http://localhost:4000/api/subscribers", newSubscriber)
      .then(newSubscriber => {
        console.log(newSubscriber);
      })
      .catch(err => {
        if (err.response && err.response.data) {
          if (err.response.data.message.includes("already exists")) {
            setShowError(true);
          }
          // console.log(err);
        }
      });
  }



  return (
    <div className={styles.footerSubscribeWrapper}>
      <h3 className={styles.footerSubscribeHeader}>
        Дізнавайтесь про термінові збори, оновлення лотів та важливі новини!
      </h3>

      <Formik 
        initialValues={{email: ""}}
        onSubmit={(values, { setSubmitting }) => {
          sendData(values.email);
          console.log(values.email);
          // sendData();
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (

          <Form>
            <div className={styles.footerInput}>
              <Field 
                type="email" 
                name="email" 
                placeholder="Введіть email" 
                className={styles.emailInput} 
              />
              <FormButton type="submit" className={styles.joinBtn} text="Підписатися" disabled={isSubmitting}/>
            </div>
            <div className={styles.errorsWrapper}>
              <ErrorMessage name="email" component="p" />
              {showError && <p className={showError && styles.textAttention}>Така електронна адреса вже існує</p>}
            </div>
          </Form>

        )}
      </Formik>

      <p className={styles.footerSubscribeInfo}>
        Оформляйте підписку та отримуйте першими новини про оновлення в зборах та лотах аукціону доброчинності, акційні пропозиції та інформацію про нові поставки товару.
      </p>
    </div>
  )
}