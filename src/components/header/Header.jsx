import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from "../Context";
import logo from '../../images/header/Logo.png';
import Cart from "./icons/cart/IconCart";
import IconEnter from "./icons/enter/IconEnter";
import SearchInHeader from './Search';
import Button from "../button/Button";
import { IconSearchMobile } from './icons/search/IconSearch';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import HeartFavorite from './icons/favorites/Heart';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const { isLinkVisible } = useContext(Context);

    const closeMenu = () => {
        setMenuVisible(false);
    };

    // for useContext
    const style = {
        display: isLinkVisible ?  'flex' : 'none'
    };

    const cartCount = useSelector((state) => state.cart.itemCount);
    const favoriteCount = useSelector((state) => state.favorites.itemCount);
    
    

    return (
        <header className={styles.header}>
            <div className={styles.mobileHeader}>
                <input
                    className={styles.inputMobileHeader}
                    type="text"
                    placeholder="Знайти..."
                />
                <button className={styles.buttonMobileHeader}>
                    <IconSearchMobile />
                </button>
            </div>
            <div className={styles.headerLaptop}>
                <Link to="/" className={styles.logo}><img src={logo} alt="" width={70} height={70} /></Link>
                <div className={styles.navWrapper}>
                    <nav style={style} className={styles.nav}>
                        <ul className={`${styles.navItem} ${menuVisible ? styles.active : ''}`}>
                            <Link to="/" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>головна</Link>
                            <Link to="/about-us" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>про нас</Link>
                            <Link to="/categories" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>категорії</Link>
                            <Link to="/blog" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>блог</Link>
                            <Link to="/contacts" onClick={closeMenu} className={`${styles.navList} ${styles.navLink}`}>контакти</Link>
                        </ul>
                    </nav>
                   
                    <SearchInHeader />
                </div>
                <Link to="/favorites">
                        <HeartFavorite  />
                    </Link>
                {favoriteCount === 0 ? null : <span >{favoriteCount}</span>}
                
                <div className={styles.navRightSideMenu}>
                    <Link to="/cart">
                        <Cart />
                    </Link>
                    {cartCount === 0 ? null :
                    <span >{cartCount}</span>}

                    <Button toPage="/log-in" width="56px">
                        <IconEnter/>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
