import React, { useState, useContext } from 'react';
import Context from "../Context";
import SearchInHeader from './Search';
import ActiveLink from './ActiveLink';
import styles from './Header.module.scss';


function Navigation() {
    const { isLinkVisible } = useContext(Context);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const style = {
        display: isLinkVisible ?  'flex' : 'none'
    };

    const showDropdown = () => {
        setDropdownVisible(true);
    };

    const hideDropdown = () => {
        setDropdownVisible(false);
    };

    return (
        <div className={styles.navWrapper}>
            <div className={styles.burgerMenuWrapper}>
                
            </div>
            <nav style={style} className={styles.nav}>
                <ul className={`${styles.navItem} ${styles.active}`}>
                    <ActiveLink label="головна" to="/" className={`${styles.navList} ${styles.navLink}`} />
                    <ActiveLink label="про нас" to="/about-us" className={`${styles.navList} ${styles.navLink}`} />
                    <div 
                        className={styles.dropdown}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                    >
                        <div
                            className={`${styles.navList} ${styles.navLink} ${styles.navItemTablet}`}
                        >категорії
                        </div>
                        <ActiveLink label="категорії" to="/categories" onClick={() => setDropdownVisible(false)} className={`${styles.navList} ${styles.navLink} ${styles.navItemLaptop}`}/>
                        {isDropdownVisible && (
                            <div className={styles.dropdownContent}>
                                <ActiveLink label="Всі категорії" to="/categories" onClick={() => setDropdownVisible(false)} className={styles.dropdownItemAllCategories}/>
                                <ActiveLink label="Донати на ЗСУ" to="/categories/donation" onClick={() => setDropdownVisible(false)} />
                                <ActiveLink label="Лоти аукціону" to="/categories/charity-auction" onClick={() => setDropdownVisible(false)} />
                                <ActiveLink label="Військовий одяг" to="/categories/military-clothing" onClick={() => setDropdownVisible(false)} />
                            </div>
                        )}
                    </div>
                    <ActiveLink label="блог" to="/blog" onClick={() => setDropdownVisible(false)} className={`${styles.navList} ${styles.navLink}`}/>
                    <ActiveLink label="контакти" to="/contacts" onClick={() => setDropdownVisible(false)} className={`${styles.navList} ${styles.navLink}`}/>
                </ul>
            </nav>
            
            <SearchInHeader />
        </div>
    )
}

export default Navigation;
