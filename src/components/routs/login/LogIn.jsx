import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from "../../button/Button"
import styles from "./LogIn.module.scss"

function LogIn(){
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const navigate = useNavigate();

  const handleChangeValue = (event) => {
    setLoginValue(event.target.value);
    setpasswordValue(event.target.value);
    console.log(loginValue, passwordValue);
    sendData();
  };


function sendData() {
  const userData = {
    loginOrEmail: loginValue,
    password: passwordValue
  };
  
  axios
    .post("http://localhost:4000/api/customers/login", userData)
    .then(loginResult => {
      if(loginResult.data.success === true  ) {
        navigate('/');
      }
      const token = loginResult.data.token;
    })
    .catch(err => {
      console.log(err)
    });
}



  return(
    <section className={styles.windowWrapper}>
      <div className={styles.window}>
        <h1>Log-in</h1>
        <input type="text" value={loginValue} onChange={(e) => setLoginValue(e.target.value)} />
        <input type="password" value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)} />
        <Button text="Увійти" onClick={handleChangeValue}/>
        <Link to="/cart"><span className={styles.text}>Зареєструватися</span></Link> 
      </div>
    </section>
  )
}

export default LogIn