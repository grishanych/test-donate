import { useState } from "react";
import search from '../../images/header/Search.png';
import styles from '../../styles/header.module.scss'


function SearchInHeader() {

    const [isLinkVisible, setIsLinkVisible] = useState(true)

    const handleClick = () => {
        setIsLinkVisible(false)
    };

    const handleInputDoubleClick = () => {
        setIsLinkVisible(true);
    };


    return (
        <div>
            {isLinkVisible ? (
                <a href="#" onClick={handleClick}>
                    <img className={styles.navSearch} src={search} alt="" />
                </a>
            ) : (
                <input type="text" placeholder="Пошук..." onDoubleClick={handleInputDoubleClick} />
            )}
        </div>
    )
}

export default SearchInHeader