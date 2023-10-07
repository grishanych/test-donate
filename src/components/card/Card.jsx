// import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from 'react-router-dom';
import Basket from "./icons/basket/Basket"
import Heart from "./icons/heart/Heart"
import styles from "./Card.module.scss"

export function Card({ itemNo, name, price, nameCloudinary, isLot }) {

    // for working with Cloudinary
    const cld = new Cloudinary({
        cloud: { cloudName: 'dzaxltnel' },
        url: { secure: true }
    });
    const myImage = cld.image(`${nameCloudinary}`);
    const imageURL = myImage.toURL();



    return(
            <li className={styles.cardItemWrapper}>
                {isLot === "Благодійний лот" ? 
                    <div className={styles.decorLot}>ЛОТ</div>
                : isLot === "Донат" ? 
                    <div className={styles.decorDonat}>ДОНАТ</div>
                :
                    null}
                    <div className={styles.cardItemImageWrapper}>
                        <Link to={`/product/${itemNo}`}>
                            <img src={imageURL} className={styles.cardItemImage} alt="My img"/>
                        </Link>
                    </div>
                    <Link to={`/product/${itemNo}`}>
                        <div className={styles.cardItemTextWrapper}>
                            <h3 className={styles.cardItemHeadline}>{name}</h3>
                            {price ?
                            <p className={styles.cardItemPrice}>{price} грн</p>
                            :
                            null}
                        </div>
                    </Link>
                <div className={styles.cardItemIconsWrapper}>
                    <a className={styles.cardItemIconWrapper} href="#1">
                        <Basket />
                    </a>
                    <a className={styles.cardItemIconWrapper} href="#1">
                        <Heart />
                    </a>
                </div>
                <div className={styles.cardItemDecor}></div>
            </li>
    )
}