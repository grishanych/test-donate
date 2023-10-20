import LogIn from "../../../logIn/LogIn";

function AdminLogIn(){

  return(
    <>
      <LogIn headline="Увійдіть в систему" toRegistration="/adm-registration" toLogIn="/adm-page"/>
    </>
  )
}

export default AdminLogIn