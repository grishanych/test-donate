import React from 'react';
import styles from '../../styles/header/header.module.scss';
import logo from '../../images/header/logo.png';
import cart from '../../images/header/Cart.png';
import logout from '../../images/header/Logout.png'
import SearchInHeader from './Search';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}><img src={logo} alt="" width={70} height={70} /></Link>
            <ul className={styles.navItem}>
                <Link className={styles.navList} to="/">головна</Link>
                <Link className={styles.navList} to="/about_us">про нас</Link>
                <Link className={styles.navList} to="/categories">категорії</Link>
                <Link className={styles.navList} to="/cart">корзина</Link>
                <Link className={styles.navList} to="/report">звіти</Link>
                <Link className={styles.navList} to="/blog">блог</Link>
                <Link className={styles.navList} to="/contacts">контакти</Link>
            </ul>
            <div className={styles.navRightSideMenu}>
                <SearchInHeader />
                <Link to="/cart"><img className={styles.navCart} src={cart} alt="" /></Link>
                <a href="/"><button className={styles.navButton}><img src={logout} alt="" />Увійти</button></a>

            </div>

        </div>
    )
}

export default Header