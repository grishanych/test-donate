import React from 'react';
import styles from '../../styles/header/header.module.scss';
import logo from '../../images/header/logo.png';
import cart from '../../images/header/Cart.png';
import logout from '../../images/header/Logout.png'
import SearchInHeader from './Search';

function Header() {

    return (
        <div className={styles.header}>
            <a href="/" className={styles.logo}><img src={logo} alt="" width={70} height={70} /></a>
            <ul className={styles.navItem}>
                <li className={styles.navList}><a className={styles.navLink} href="">головна</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">про нас</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">категорії</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">корзина</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">звіти</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">блог</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">контакти</a></li>
            </ul>
            <div className={styles.navRightSideMenu}>
                <SearchInHeader />
                <a href="#"><img className={styles.navCart} src={cart} alt="" /></a>
                <a href=""><button className={styles.navButton}><img src={logout} alt="" />Увійти</button></a>

            </div>

        </div>
    )
}

export default Header