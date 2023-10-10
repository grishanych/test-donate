import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../images/slider/baner1.jpeg'
import image2 from '../../images/slider/baner2.jpeg';
import image3 from '../../images/slider/baner3.jpeg';
import style from "./Slider.module.scss"



const InLineStyleImg = {
    width: "100%",
    height:"100%",
    // border: '1px solid green',
    objectFit:"fill",
}
const AsNavFor = () => {
const [nav1, setNav1] = useState(null);
const [nav2, setNav2] = useState(null);

const handleSliderMount1 = (slider) => {
setNav1(slider);
};

const handleSliderMount2 = (slider) => {
setNav2(slider);
};

const renderSlider1 = () => {
const settings = {
asNavFor: nav2,
ref: handleSliderMount1
};

return (
<Slider {...settings}>
    <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <img src={image1} alt="Slide pict1"style={{width:"100%",height:"100%"}}/>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <img src={image2} alt="Slide pict2" style={{width:"100%",height:"100%"}}/>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <img src={image3} alt="Slide pict3" style={{width:"100%",height:"100%"}}/>
    </div>
</Slider>
);
};

const renderSlider2 = () => {
const settings = {
asNavFor: nav1,
ref: handleSliderMount2,
slidesToShow: 3,
swipeToSlide: true,
focusOnSelect: true
};

return (
<Slider {...settings}>
    <div className={style.slick} style={{width:'150px'}}>
        <img src={image1} alt="Slide pict1" style={ InLineStyleImg} /> 
    </div>
    <div className={style.slick} style={{width:'150px'}}>
        <img src={image2} alt="Slide pict2" style={ InLineStyleImg }/>
    </div>
    <div className={style.slick} style={{width:'150px'}}>
        <img src={image3} alt="Slide pict3" style={ InLineStyleImg }/>
    </div>

</Slider>
);
};

return (
<div className={style.slider}>
{/* <h2>Slider Syncing (AsNavFor)</h2>
<h4>First Slider</h4> */}
<div className={style.slickFirst}>
{renderSlider1()}
</div>
{/* <h4>Second Slider</h4> */}
<div className={style.slickSecond}>
{renderSlider2()}
</div>
</div>
);
};

export default AsNavFor;