import React, { useState } from 'react';
import styles from '../../styles/header/header.module.scss';
import logo from '../../images/header/Logo.png';
// import cart from '../../images/header/Cart.png';
// import logout from '../../images/header/Logout.png'
import SearchInHeader from './Search';
import { Link } from 'react-router-dom';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}><img src={logo} alt="" width={70} height={70} /></Link>
            <div className={`${styles.burgerButton} ${menuVisible ? styles.active : ''}`} onClick={toggleMenu}>
                <div className={`${styles.burgerBar} ${menuVisible ? styles.crossBar1 : ''}`}></div>
                <div className={`${styles.burgerBar} ${menuVisible ? styles.crossBar2 : ''}`}></div>
                <div className={`${styles.burgerBar} ${menuVisible ? styles.crossBar3 : ''}`}></div>
            </div>
            <ul className={`${styles.navItem} ${menuVisible ? styles.active : ''}`}>
                <Link to="/" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>головна</Link>
                <Link to="/about_us" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>про нас</Link>
                <Link to="/categories" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>категорії</Link>
                <Link to="/cart" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>корзина</Link>
                <Link to="/report" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>звіти</Link>
                <Link to="/blog" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>блог</Link>
                <Link to="/contacts" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>контакти</Link>
            </ul>
            <div className={styles.navRightSideMenu}>
                <SearchInHeader />
                <Link to="/cart">
                    <img
                        className={styles.navCart}
                        // src={cart} 
                        alt="" />
                    </Link>
                <a href="/">
                    <button className={styles.navButton} onClick={handleLogin}>
                        {/* <img src={logout} alt="" /> */}
                        Увійти
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Header
