// import Registration from "../../../registration/Registration"
import React, { useState } from "react";
import Button from "../../../button/Button"
import styles from "./AdminRegistration.module.scss"


// function AdminRegistration(){

  function AdminRegistration(){
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [telephoneValue, setTelephoneValue] = useState("");
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
  
    const handleFirstNameChange = (event) => {
      setFirstNameValue(event.target.value);
    };
    const handleLastNameChange = (event) => {
      setLastNameValue(event.target.value);
    };
    const handleEmailChange = (event) => {
      setEmailValue(event.target.value);
    };
    const handleTelephoneChange = (event) => {
      setTelephoneValue(event.target.value);
    };
    const handleLoginChange = (event) => {
      setLoginValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPasswordValue(event.target.value);
    };

      // const toRegister = async () => {
  // const newCustomer = {
  //     firstName: "Customer",
  //     lastName: "Newone",
  //     login: "Customer",
  //     email: "customer@gmail.com",
  //     password: "1111111",
  //     telephone: "+380630000000",
  //     isAdmin: true
  //   }
  // }
  
    return(
      <section className={styles.wrapper}>
        <h1>Реєстрація адміністратора</h1>
        <div>
          <div className={styles.inputWrapper}>
            <input type="text" value={firstNameValue} onChange={handleFirstNameChange} />
            <input type="text" value={lastNameValue} onChange={handleLastNameChange} />
            <input type="text" value={emailValue} onChange={handleEmailChange} />
            <input type="text" value={telephoneValue} onChange={handleTelephoneChange} />
            <input type="text" value={loginValue} onChange={handleLoginChange} />
            <input type="password" value={passwordValue} onChange={handlePasswordChange} />
          </div>
          <Button 
              text="Зареєструватися"
              color="rgba(70, 163, 88, 1)"
              toPage="/adm-registration"
              // onClick={onClick}
          />
        </div>
      </section>
    )
  }
export default AdminRegistration