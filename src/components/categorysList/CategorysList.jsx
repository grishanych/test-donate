import Button from "../button/Button";
import styles from "./CategorysList.module.scss"
// import stylesApp from "../App.module.scss"
import Donate from "./icons/donates/Donate"
import Buy from "./icons/goods/Buy"
import Auction from "./icons/lots/Auction"
// import axios from 'axios';


const Categorys = () => {


  const doit = async () => {
    const updatedProduct = {
      name : "Форма зимова Momentum MM-14" 
   }; 
    // ! 1 registration
    // const newCustomer = {
    //   firstName: "Customer",
    //   lastName: "Newone",
    //   login: "Customer",
    //   email: "customer@gmail.com",
    //   password: "1111111",
    //   telephone: "+380630000000",
    //   gender: "male",
    //   avatarUrl: "img/customers/023648.png",
    //   isAdmin: true
    // }
    
    // axios.post("http://localhost:4000/api/customers", newCustomer)
    //   .then(savedCustomer => {console.log(savedCustomer)})
    //   .catch(err => {console.log(err)})

    //  ! 2 log-in + take token
    // const userData = {
    //   loginOrEmail: "customer@gmail.com",
    //   password: "1111111"
    // };
    
    // axios
    //   .post("http://localhost:4000/api/customers/login", userData)
    //   .then(loginResult => {
    //     console.log(loginResult)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   });

    // ! 3 use token + change products
  //   const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWM0MzhjZjc4Mjc2NThhYmIyZTczYiIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTY0MjIyMTksImV4cCI6MTY5NjQ1ODIxOX0.NDyQRmgVVU10qNqqrbYfB2JqAgz8Ok1klNnltC6x9So"
  //   const setAuthToken = token => {
  //     if (token) {
  //       // Apply to every request
  //       axios.defaults.headers.common['Authorization'] = token;
  //     } else {
  //       // Delete auth header
  //       delete axios.defaults.headers.common['Authorization'];
  //     }
  //   };
  //   setAuthToken(token);

  //   axios
  // .put("http://localhost:4000/api/products/651c15b46533f503f0e1b79e", updatedProduct)
  // .then(updatedProduct => {
  //   console.log(updatedProduct);
  // })
  // .catch(err => {
  //   console.log(err);
  // });
  };


return (
  <section className={styles.categorysWrapper}>
    <ul className={styles.categorysList}>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <Donate/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Донати на ЗСУ </h3>
          <p className={styles.categorysText}>Зроби донат на потреби ЗСУ!</p>
        </div>
      </li>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <Auction/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Лоти аукціону доброчинності </h3>
          <p className={styles.categorysText}>Обери лот та зроби ставку на Перемогу!</p>
        </div>
      </li>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <Buy/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Продаж військового одягу </h3>
          <p className={styles.categorysTextt}>Придбай продукцію собі або воїну ЗСУ!</p>
        </div>
      </li>
    </ul>
    <div className={styles.buttonWrapper}>
      <Button 
          text="Переглянути всі"
          color="rgba(70, 163, 88, 1)"
          toPage="/categories"
          // !!!
          // onClick={doit}
      />
    </div>
  </section>
)
}


export default Categorys