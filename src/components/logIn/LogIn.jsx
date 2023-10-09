import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { object, string } from "yup";
import EyeClosed from "./eye/EyeClosed";
import EyeOpen from "./eye/EyeOpen";
import styles from "./LogIn.module.scss"


function LogIn({ headline, to }){

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const validationSchema = object().shape({
    login: string()
      .required("Поле логіну є обов'язковим для заповнення")
      .min(6, "Логін повинен мати не менше 6 символів")
      .max(16, "Логін повинен мати не більше 16 символів"),
    password: string()
      .required("Поле пароля є обов'язковим для заповнення")
      .min(7, "Пароль має містити від 7 до 30 символів")
      .max(30, "Пароль має містити від 7 до 30 символів")
      .matches(/[a-zA-Z0-9]/, "Дозволені символи для пароля: a-z, A-Z, 0-9")
  })

  const sendData = (login, password) => {
    const userData = {
      loginOrEmail: login,
      password: password
    };

  axios
    .post("http://localhost:4000/api/customers/login", userData)
    .then(loginResult => {
      console.log(loginResult);
      if(loginResult.data.success === true) {
        navigate("/adm-page");
        // const token = loginResult.data.token;
      }
    })
    .catch(err => {
      // ! add the way for another errors
      if(err.response.data.loginOrEmail === "Customer not found") {
        setShowError(true);
      }
    });
  }


  return(
    <section className={styles.windowWrapper}>
      <div className={styles.window}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.text}>Введіть логін та пароль, щоб увійти</p>
        <Formik 
          initialValues={{login: "", password: ""}}
          onSubmit={(values, { setSubmitting }) => {
            sendData(values.login, values.password);
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >   
          <Form className={styles.form}>
          <Field name="login">
              {({ field, meta }) => (
                // <label htmlFor="login" className={styles.label}>Логін:
                  <input
                    {...field}
                    id="login"
                    className={
                      meta.touched && meta.error
                        ? styles.inputAttention
                        : styles.input
                    }
                  />
                // </label>
              )}
            </Field>
            <Field name="password">
              {({ field, meta }) => (
                <div className={`${styles.passwordWrapper} ${styles.label}`}>
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className={
                      meta.touched && meta.error
                        ? styles.inputAttention
                        : styles.input
                    }
                  />
                  <div
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={styles.iconButton}
                  >
                    {showPassword === false ? <EyeClosed /> : <EyeOpen />}
                  </div>
                </div>
              )}
            </Field>
            <button type="submit" className={styles.buttonStyle} width="300px"
            >Увійти
            </button>
            {showError && <p className={showError && styles.textAttention}>Такого користувача не існує. Спершу зареєструйтесь</p>}
            <div className={styles.errorsWrapper}>
              <ErrorMessage name="login" component="p" className={styles.textAttention}/>
              <ErrorMessage name="password" component="p" className={styles.textAttention}/>
            </div>
          </Form>
        </Formik>
        <Link to={to} className={`${styles.text} ${styles.textRegistration}`}>Зареєструватися</Link> 
      </div>
    </section>
  )
}

export default LogIn