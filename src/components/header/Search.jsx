import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Context from "../Context";
import { updateInputValue } from '../../redux/actionsCreators/inputValueActionsCreators';
import { IconSearch } from './icons/search/IconSearch';
import Button from "../button/Button";
import styles from './Header.module.scss';


function SearchInHeader() {
    const [isLinkVisible, setIsLinkVisible] = useState(true);
    const [inputVisible, setInputVisible] = useState(false); 
    const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
    const [inputValue, setInputValue] = useState(inputValueFromRedux);
    const context = useContext(Context);
    const dispatch = useDispatch();

    const handleClick = () => {
        setIsLinkVisible(false);
        context.setIsLinkVisible(false);
        setInputVisible(!inputVisible); 
    };

    const handleInputDoubleClick = (event) => {
        event.preventDefault();
        setIsLinkVisible(true);
        setInputValue('');
        context.setIsLinkVisible(true);
        setInputVisible(false); 
    };

    const crossStyle = {
        height: "18px",
    }

    useEffect(() => {
        setInputValue(inputValueFromRedux);
    }, [inputValueFromRedux]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        dispatch(updateInputValue(value));
        setInputValue(value);
    };

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
                    {inputVisible && ( 
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Пошук..."
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    )}
                    <div className={styles.searchButtons}>
                        <Button
                            toPage="/products-search"
                            type="submit"
                            name="find"
                            className={styles.searchBtn}
                            text="Знайти"
                            width="80px"
                        />
                        <Button
                            onClick={handleInputDoubleClick}
                            className={`${styles.searchBtn} ${styles.closeSearchBtn}`}
                            width="60px"
                            jc="center"
                            ala="center"
                            padding="20px">
                            <span style={crossStyle}>
                                &#x2715;
                            </span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchInHeader;
