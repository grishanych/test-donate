import Registration from "../../registration/Registration"
import DocumentTitle from "../DocumentTitle"


function CustomerRegistration(){

  return(
    <>
      <DocumentTitle title="Реєстрація акаунта" />
        <Registration headline="Реєстрація акаунта" to="/account" isAdmin={false}/>
    </>
  )
}

export default CustomerRegistration