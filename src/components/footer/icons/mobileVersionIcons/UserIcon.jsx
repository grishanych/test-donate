import { ReactComponent as IconSVG } from "../mobileVersionIcons/User.svg";
import React, { useState } from 'react';

const UserIcon = () => {
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
export default  UserIcon;