import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from "../../../button/Button"
import styles from "./AdminLogIn.module.scss"


function AdminLogIn(){
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  // const handleChangeValue = (event) => {
  //   setLoginValue(event.target.value);
  //   setpasswordValue(event.target.value);
  //   console.log(loginValue, passwordValue);
  //   sendData();
  // };

  const handleLoginChange = (event) => {
    setLoginValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleClick = () => {
    sendData();
  };


  const sendData = () => {
    const userData = {
      loginOrEmail: loginValue,
      password: passwordValue,
      // isAdmin: true,
    };
  
  axios
    .post("http://localhost:4000/api/customers/login", userData)
    .then(loginResult => {
      if(loginResult.data.success === true) {
        navigate('/adm-page');
        // const token = loginResult.data.token;
      }
    })
    .catch(err => {
      if(err.response.data.loginOrEmail === "Customer not found") {
        setShowError(true);
        // navigate('/my-admin');
      }
    });
}



  return(
    <section className={styles.windowWrapper}>
      <div className={styles.window}>
        <h1>Увійдіть в систему</h1>
        {/* <input type="text" className={showError ? styles.inputAttention : null} value={loginValue} onChange={(e) => setLoginValue(e.target.value)} />  */}
        <input type="text" className={showError ? styles.inputAttention : null} value={loginValue} onChange={handleLoginChange} />
        {/* <input type="password" className={showError ? styles.inputAttention : null} value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)} /> */}
        <input type="password" className={showError ? styles.inputAttention : null} value={passwordValue} onChange={handlePasswordChange} />
        {/* <Button text="Увійти" onClick={handleChangeValue}/> */}
        <Button text="Увійти" onClick={handleClick}/>
        {showError && <p className={showError && styles.textAttention}>Спершу зареєструйтесь</p>}
        <Link to="/adm-registration"><span className={styles.text}>Зареєструватися</span></Link>
      </div>
    </section>
  )
}

export default AdminLogIn