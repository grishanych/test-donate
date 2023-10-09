import { useState, useContext } from "react";
import Context from "../Context";
import IconSearch from "./icons/search/IconSearch";
import Button from "../button/Button"
import styles from "./Header.module.scss";


function SearchInHeader() {
    const [isLinkVisible, setIsLinkVisible] = useState(true);
const { updateContextData } = useContext(Context);


    const handleClick = () => {
        setIsLinkVisible(false);
        updateContextData(isLinkVisible);
    };
    const handleInputDoubleClick = (event) => {
        setIsLinkVisible(true);
        updateContextData(isLinkVisible);
    };

    const crossStyle = {
        height: "13px",
    }

    return (
        <div className={styles.hiddenSearchMenu}>
            {isLinkVisible ? (
                <a href="#1" onClick={handleClick}>
                    <div className={styles.iconSearch}>
                        <IconSearch />
                    </div>
                </a>
            ) : (
                <div className={styles.searching}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Пошук..."
                        onDoubleClick={handleInputDoubleClick}
                    />
                    <div className={styles.searchButtons}>
                        <Button
                            type="submit"
                            name="find"
                            id=""
                            className={styles.searchBtn}
                            text="Знайти"
                            width="80px"
                        />
                        <Button 
                            onClick={handleInputDoubleClick}
                            className={`${styles.searchBtn} ${styles.closeSearchBtn}`}
                            width="25px"
                            jc="center"
                            ala="center"
                            padding="20px">
                                <span style={crossStyle}>
                                    &#x2715;
                                </span>
                        </Button>
                        {/* <button onClick={handleInputDoubleClick} className={`${styles.searchBtn} ${styles.closeSearchBtn}`}>&#x2715;</button> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchInHeader