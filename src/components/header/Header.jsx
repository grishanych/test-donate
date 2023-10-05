import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";
import logo from "../../images/header/Logo.png";
import Cart from "./icons/cart/IconCart";
import IconEnter from "./icons/enter/IconEnter";
import SearchInHeader from "./Search";
import Button from "../button/Button";
import stylesApp from "../App.module.scss";
import styles from "./Header.module.scss";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isLinkVisible } = useContext(Context);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  // const toggleMenu = () => {
  //     setMenuVisible(!menuVisible);
  // };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  // for useContext
  const style = {
    display: isLinkVisible ? "flex" : "none",
  };

  return (
    <header>
      <div className={`${styles.headerLaptop} ${stylesApp.container}`}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="" width={70} height={70} />
        </Link>
        {/* make it beter if we build mobile menu vers.1 */}
        {/* <div className={`${styles.burgerButton} ${menuVisible ? styles.active : ''}`} onClick={toggleMenu}>
                    <div className={`${styles.burgerBar} ${menuVisible ? styles.crossBar1 : ''}`}></div>
                    <div className={`${styles.burgerBar} ${menuVisible ? styles.crossBar2 : ''}`}></div>
                    <div className={`${styles.burgerBar} ${menuVisible ? styles.crossBar3 : ''}`}></div>
                </div> */}
        <div className={styles.navWrapper}>
          <nav style={style} className={styles.nav}>
            <ul
              className={`${styles.navItem} ${
                menuVisible ? styles.active : ""
              }`}
            >
              <Link
                to="/"
                onClick={closeMenu}
                className={`${styles.navList} ${styles.navLink}`}
              >
                головна
              </Link>
              <Link
                to="/about-us"
                onClick={closeMenu}
                className={`${styles.navList} ${styles.navLink}`}
              >
                про нас
              </Link>
              <Link
                to="/categories"
                onClick={closeMenu}
                className={`${styles.navList} ${styles.navLink}`}
              >
                категорії
              </Link>
              <Link
                to="/blog"
                onClick={closeMenu}
                className={`${styles.navList} ${styles.navLink}`}
              >
                блог
              </Link>
              <Link
                to="/contacts"
                onClick={closeMenu}
                className={`${styles.navList} ${styles.navLink}`}
              >
                контакти
              </Link>
            </ul>
          </nav>
          <SearchInHeader />
        </div>
        <div className={styles.navRightSideMenu}>
          <Link to="/cart">
            <Cart />
          </Link>
          {/* <a href="/"> */}
          <Button text="" width="50px" onClick={handleLogin} jc="center">
            <IconEnter />
          </Button>
          {/* </a> */}
        </div>
      </div>
      {/* change if we build mobile menu vers.1 */}
      <div className={styles.headerMobile}>
        <div className={styles.XXX}>
          <div className={styles.YYY}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
