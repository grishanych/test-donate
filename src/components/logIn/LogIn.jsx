import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Field, ErrorMessage, Formik } from 'formik'
import { object, string } from 'yup'
import EyeClosed from './eye/EyeClosed';
import EyeOpen from './eye/EyeOpen';
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
      .min(7, "Пароль повинен мати не менше 7 знаків (літер латинського алфавіту та спеціальних символів)")
      .max(30, "Пароль повинен мати не більше 30 знаків")
      .matches(/[a-zA-Z]/, "Пароль може складатися виключно з літер латинського алфавіту у нижньому чи верхньому регістрі та спеціальних символів")
      .matches(/\d/, "Пароль повинен мати хоча б одну цифру")
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
        navigate('/adm-page');
        // const token = loginResult.data.token;
      }
    })
    .catch(err => {
      if(err.response.data.loginOrEmail === "Customer not found") {
        setShowError(true);
      }
    });
  }


  return(
    <section className={styles.windowWrapper}>
      <div className={styles.window}>
        <h1>{headline}</h1>
        <Formik 
          initialValues={{login: '', password: ""}}
          onSubmit={(values, { setSubmitting }) => {
            sendData(values.login, values.password);
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >   
          <Form className={styles.form}>
          <Field name="login">
              {({ field, meta }) => (
                <div>
                  <input
                    {...field}
                    placeholder="Логін"
                    className={
                      meta.touched && meta.error
                        ? styles.inputAttention
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <div className={styles.passwordWrapper}>
              <Field name="password">
              {({ field, meta }) => (
                <div className={styles.passwordWrapper}>
                  <input
                    {...field}
                    placeholder="Пароль"
                    type={showPassword ? 'text' : 'password'}
                    className={
                      meta.touched && meta.error
                        ? styles.inputAttention
                        : null
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
            </div>
            <button type='submit' className={styles.buttonStyle}
            >Увійти
            </button>
            {showError && <p className={showError && styles.textAttention}>Спершу зареєструйтесь</p>}
            <div className={styles.errorsWrapper}>
              <ErrorMessage name='login' component="p"/>
              <ErrorMessage name='password' component="p"/>
            </div>
          </Form>
        </Formik>
        <Link to={to}><span className={styles.text}>Зареєструватися</span></Link> 
      </div>
    </section>
  )
}

export default LogIn