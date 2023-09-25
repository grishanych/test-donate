import React from 'react';
import styles from '../styles/header.module.scss';
import logo from '../images/1.png';
import search from '../images/Search.png';
import cart from '../images/Cart.png';
import logout from '../images/Logout.png'

function Header() {

    return (
        <div className={styles.header}>
            <img src={logo} alt="" width={100} />
            <ul className={styles.navItem}>
                <li className={styles.navList}><a className={styles.navLink} href="">home</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">shop</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">plant care</a></li>
                <li className={styles.navList}><a className={styles.navLink} href="">blogs</a></li>
            </ul>
            <div className={styles.navRight}>
                <img className={styles.navSearch} src={search} alt="" />
                <img className={styles.navCart} src={cart} alt="" />
                <button className={styles.navButton}><img src={logout} alt="" />Login</button>
            </div>

        </div>
    )
}

export default Header