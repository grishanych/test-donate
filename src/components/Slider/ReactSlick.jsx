import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";
import image1 from '../../images/slider/buner1.jpeg'
import image2 from '../../images/slider/buner2.jpeg';
import image3 from '../../images/slider/buner3.jpeg';
import style from "../../styles/slider/slider.module.scss"


// const [images, ] = useState([image1, image2, image3]);

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
        <div>
            <img src={image1} alt="pict1"/>
        </div>
        <div>
            <img src={image2} alt="pict2" />
        </div>
        <div>
            <img src={image3} alt="pict3" />
        </div>
        {/* <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3> */}
        {/* </div> */}
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
            <img src={image1} alt="pict1" style={ {border: '1px solid green',objectFit:"fill", width: "100%", height:"100%"}} />       
        </div>
        <div className={style.slick} style={{width:'150px'}}>
            {/* <img src={image2} alt="pict2" /> */}
            <img src={image2} alt="pict2" style={{border: '1px solid green',objectFit:"fill",width: "100%", height:"100%"}}/>

        </div>
        <div className={style.slick} style={{width:'150px'}}>
            {/* <img src={image3} alt="pict3" /> */}
            <img src={image3} alt="pict3" style={{border: '1px solid green',objectFit:"contain", width: "100%", height:"100%",}}/>

        </div>
        {/* <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    );
  };

  return (
    <div className="slider">
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