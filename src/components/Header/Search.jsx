import { useState } from "react";
import search from '../../images/header/Search.png';
import styles from '../../styles/header/header.module.scss';


function SearchInHeader() {

    const [isLinkVisible, setIsLinkVisible] = useState(true)

    const handleClick = () => {
        setIsLinkVisible(false)
    };

    const handleInputDoubleClick = () => {
        setIsLinkVisible(true);
    };


    return (
        <div className={styles.hiddenSearchMenu}>
            {isLinkVisible ? (
                <a href="#" onClick={handleClick}>
                    <img className={styles.navSearch} src={search} alt="" />
                </a>
            ) : (
                <div className={styles.searching}>
                    <input type="text" placeholder="Пошук..." onDoubleClick={handleInputDoubleClick} />
                    <div className={styles.searchButtons}>
                    <input type="submit" name="find" value='Знайти' id="" className={styles.searchBtn} />
                    <button onClick={handleInputDoubleClick} className={`${styles.searchBtn} ${styles.closeSearchBtn}`}>&#x2715;</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default SearchInHeader