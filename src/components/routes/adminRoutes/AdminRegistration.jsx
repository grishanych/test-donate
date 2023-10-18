import Registration from "../../registration/Registration"


function AdminRegistration(){

  return(
    <Registration headline="Реєстрація адміністратора" to="/adm-page" isAdmin={true}/>
  )
}

export default AdminRegistration