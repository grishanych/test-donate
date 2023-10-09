// import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import Basket from "./icons/basket/Basket"
import Heart from "./icons/heart/Heart"
import styles from "./Card.module.scss"
import { useDispatch } from "react-redux";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";

export function Card({id, name, price, nameCloudinary, isLot }) {
    
    const dispatch = useDispatch();

    

    // for working with Cloudinary
    const cld = new Cloudinary({
        cloud: { cloudName: 'dzaxltnel' },
        url: { secure: true }
    });
    const myImage = cld.image(`${nameCloudinary}`);
    const imageURL = myImage.toURL();



    const handleAddToCart = () => {
        dispatch(counterIncrement())
        const product = {
            name,
            price,
            imageURL,
            isLot,
        };
        dispatch(addToCart(product)) 
    }


    const handleAddFavorites = () => {
        dispatch(counterIncrement());
        const prod= {
            name,
            price,
            imageURL,
            isLot,
        };
        dispatch(addFavorites(prod))
    }

    return(
        // <a href="#">
            <li className={styles.cardItemWrapper}>
                {isLot === "Благодійний лот" ? 
                    <div className={styles.decorLot}>ЛОТ</div>
                : isLot === "Донат" ? 
                    <div className={styles.decorDonat}>ДОНАТ</div>
                :
                    null}
                    <div className={styles.cardItemImageWrapper}>
                        <Link to={`/product/${id}`}>
                            <img src={imageURL} className={styles.cardItemImage} alt="My img"/>
                        </Link>
                    </div>
                    <Link to={`/product/${id}`}>
                        <div className={styles.cardItemTextWrapper}>
                            <h3 className={styles.cardItemHeadline}>{name}</h3>
                            {price ?
                            <p className={styles.cardItemPrice}>{price} грн</p>
                            :
                            null}
                        </div>
                    </Link>
                <div className={styles.cardItemIconsWrapper}>
                    <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddToCart}>
                        <Basket />
                    </a>
                    <a className={styles.cardItemIconWrapper} href="#1" onClick={handleAddFavorites}>
                        <Heart />
                    </a>
                </div>
                <div className={styles.cardItemDecor}></div>
            </li>
        // </a>
    )
}