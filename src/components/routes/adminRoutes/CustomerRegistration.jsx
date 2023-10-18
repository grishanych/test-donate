import Registration from "../../registration/Registration"


function CustomerRegistration(){

  return(
    <Registration headline="Реєстрація акаунта" to="/account" isAdmin={false}/>
  )
}

export default CustomerRegistration