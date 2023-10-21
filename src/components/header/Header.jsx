import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import logo from '../../images/header/Logo.png';
import Cart from "./icons/cart/IconCart";
import IconEnter from "./icons/enter/IconEnter";
import Button from "../button/Button";
import Navigation from './Navigation';
import { IconSearchMobile } from './icons/search/IconSearch';
import HeartFavorite from "./icons/favorites/Heart";
import BurgerMenu from './BurgerMenu';
import styles from './Header.module.scss';


function Header() {
    const cartCount = useSelector((state) => state.cart.itemCount);
    const favoriteCount = useSelector((state) => state.favorites.itemCount);

    const isMobileScreen = useMediaQuery('(max-width: 767px)'); 

    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
        if (showBurgerMenu) {
            toggleBar()
        }
    };

    const toggleBar = () => {
        setShowBurgerMenu(showBurgerMenu);
        if (showInput) {
            setShowInput(false);
        }
    }


    return (
        <header className={styles.header}>
            <div className={styles.mobileHeader}>
                <button className={styles.buttonMobileHeader} onClick={toggleInput}>
                    <IconSearchMobile/>
                </button>
                {showInput && (
                    <input
                        className={styles.inputMobileHeader}
                        type="text"
                        placeholder="Знайти..."
                    />
                )}

                {isMobileScreen && 
                    <BurgerMenu toggleBar={toggleBar} />
                }
            </div>
         
            <div className={styles.headerLaptop}>
                <Link to="/" className={styles.logo}><img src={logo} alt="alt" width={70} height={70} /></Link>

                {showBurgerMenu && <BurgerMenu />}
                <Navigation />

                <Link to="/favorites">
                    <HeartFavorite />
                </Link>

                {favoriteCount === 0 ? null : <span>{favoriteCount}</span>}
                
                <div className={styles.navRightSideMenu}>
                    <Link to="/cart">
                        <Cart />
                    </Link>
                    {cartCount === 0 ? null : <span>{cartCount}</span>}

                    <Button toPage="/log-in" width="56px">
                        <IconEnter/>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;
