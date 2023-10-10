import { ReactComponent as IconSVG } from "../mobileVersionIcons/Shop.svg";
import React, { useState } from 'react';

const CartIcon = () => {
    const [isClicked, setIsClicked] = useState(false);

    const changeColor = () => {
        setIsClicked(!isClicked);
    };


    return (
        <div onClick={changeColor} >
            <IconSVG className={isClicked ? 'clicked' : 'unclicked'} />
        </div>
    )
};
export default  CartIcon;