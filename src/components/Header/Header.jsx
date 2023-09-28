import React from 'react';
import styles from '../../styles/header/header.module.scss';
import logo from '../../images/header/logo.png';
import cart from '../../images/header/Cart.png';
import logout from '../../images/header/Logout.png'
import SearchInHeader from './Search';
import { Link } from 'react-router-dom';

function Header() {

    const handleLogin = (e) =>{
        e.preventDefault()
    }

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}><img src={logo} alt="" width={70} height={70} /></Link>
            <ul className={styles.navItem}>
                <Link className={`${styles.navList} ${styles.navLink}`} to="/">головна</Link>
                <Link className={`${styles.navList} ${styles.navLink}`} to="/about_us">про нас</Link>
                <Link className={`${styles.navList} ${styles.navLink}`} to="/categories">категорії</Link>
                <Link className={`${styles.navList} ${styles.navLink}`} to="/cart">корзина</Link>
                <Link className={`${styles.navList} ${styles.navLink}`} to="/report">звіти</Link>
                <Link className={`${styles.navList} ${styles.navLink}`} to="/blog">блог</Link>
                <Link className={`${styles.navList} ${styles.navLink}`} to="/contacts">контакти</Link>
            </ul>
            <div className={styles.navRightSideMenu}>
                <SearchInHeader />
                <Link to="/cart"><img className={styles.navCart} src={cart} alt="" /></Link>
                <a href="/"><button className={styles.navButton} onClick={handleLogin}><img src={logout} alt="" />Увійти</button></a>

            </div>

        </div>
    )
}

export default Header