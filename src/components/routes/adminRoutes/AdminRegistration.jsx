import Registration from "../../registration/Registration"
import DocumentTitle from "../DocumentTitle"


function AdminRegistration(){

  return(
    <>
      <DocumentTitle title="Реєстрація адміністратора"/>
        <Registration headline="Реєстрація адміністратора" to="/adm-page" isAdmin={true}/>
    </>
  )
}

export default AdminRegistration