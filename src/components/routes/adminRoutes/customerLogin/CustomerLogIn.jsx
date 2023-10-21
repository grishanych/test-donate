import LogIn from "../../../logIn/LogIn";
import DocumentTitle from "../../DocumentTitle";


function CustomerLogIn(){

  return(
    <>
      <DocumentTitle title="Вхід до кабінету"/>
        <LogIn headline="Увійти" toRegistration="/registration" toLogIn="/account"/>
    </>
  )
}

export default CustomerLogIn