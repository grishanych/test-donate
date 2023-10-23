// import { useSelector, useDispatch } from 'react-redux';
// import { initializeFavorites } from "../../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import DocumentTitle from "../../DocumentTitle";
import CustPageProdList from "./CustPageProdList";
import styles from "./CustomerPage.module.scss";


function CustomerPage() {
  return (
    <>
      <DocumentTitle title="Кабінет" />
      <section className={styles.wrapper}>
        <h1 className={styles.headline}>Особистий кабінет</h1>

        <div className={styles.favoritesWrapper}>
          <h2 className={styles.favoritesHeadline}>Ви додали до кошика:</h2>
          <CustPageProdList lsData="Cart" />
          <div className={styles.routesLinkWrapper}>
            <Link className={styles.routesLink} to="/cart">Перейти до кошика</Link>
          </div>
        </div>

        <div className={styles.cartProductsWrapper}>
          <h2 className={styles.cartProductsHeadline}>Ви додали до обраних позицій:</h2>
          <CustPageProdList lsData="Favorites" />
          <div className={styles.routesLinkWrapper}>
            <Link className={styles.routesLink} to="/favorites">Перейти до обраних</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerPage;
