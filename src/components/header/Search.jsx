import { useState, useContext } from "react";
import Context from "../Context";
import IconSearch from './icons/search/IconSearch';
import styles from './Header.module.scss';


function SearchInHeader() {
    const [isLinkVisible, setIsLinkVisible] = useState(true);
    const context = useContext(Context);

    const handleClick = () => {
        setIsLinkVisible(false);
        context.setIsLinkVisible(false);
    };
    const handleInputDoubleClick = (event) => {
        setIsLinkVisible(true);
        context.setIsLinkVisible(true);
    };


    return (
        <div className={styles.hiddenSearchMenu}>
            {isLinkVisible ? (
                <a href="#1" onClick={handleClick}>
                    <IconSearch/>
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