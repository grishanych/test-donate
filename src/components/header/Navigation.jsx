import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from "../Context";
import SearchInHeader from './Search';
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
            <nav style={style} className={styles.nav}>
                <ul className={`${styles.navItem} ${styles.active}`}>
                    <Link
                        to="/"
                        className={`${styles.navList} ${styles.navLink}`}
                    >головна
                    </Link>
                    <Link
                        to="/about-us"
                        className={`${styles.navList} ${styles.navLink}`}
                    >про нас
                    </Link>
                    <div 
                        className={styles.dropdown}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                    >
                        <div
                            className={`${styles.navList} ${styles.navLink} ${styles.navItemTablet}`}
                        >категорії
                        </div>
                        <Link
                            to="/categories"
                            className={`${styles.navList} ${styles.navLink} ${styles.navItemLaptop}`}
                            onClick={() => setDropdownVisible(false)}
                        >категорії
                        </Link>
                        {isDropdownVisible && (
                            <div className={styles.dropdownContent}>
                                <Link
                                    className={styles.dropdownItemAllCategories}
                                    to="/categories"
                                    onClick={() => setDropdownVisible(false)}
                                >Всі категорії
                                </Link>
                                <Link
                                    to="/categories/donation"
                                    onClick={() => setDropdownVisible(false)}
                                >Донати на ЗСУ
                                </Link>
                                <Link
                                    to="/categories/charity-auction"
                                    onClick={() => setDropdownVisible(false)}
                                >Лоти аукціону
                                </Link>
                                <Link
                                    to="/categories/military-clothing"
                                    onClick={() => setDropdownVisible(false)}
                                >Військовий одяг
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/blog"
                        className={`${styles.navList} ${styles.navLink}`}
                    >блог
                    </Link>
                    <Link
                        to="/contacts"
                        className={`${styles.navList} ${styles.navLink}`}
                    >контакти
                    </Link>
                </ul>
            </nav>
            
            <SearchInHeader />
        </div>
    )
}

export default Navigation;
