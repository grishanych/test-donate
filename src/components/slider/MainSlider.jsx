import React, { useState, useEffect } from "react";
import picOne from './../../images/завантаження1.jpeg';
import picTwo from './../../images/завантаження2.jpeg';
import picThree from './../../images/завантаження.jpeg';
import styles from "./MainSlider.module.scss"

function MainSlider(){
  const [currentPic, setCurrentPic] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPic(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const pictures = [picOne, picTwo, picThree];

  return (
    <>
      <img src={pictures[currentPic]} alt="alt" />
      <img src={picOne} alt="alt" onClick={() => setCurrentPic(0)} />
      <img src={picTwo} alt="alt" onClick={() => setCurrentPic(1)} />
      <img src={picThree} alt="alt" onClick={() => setCurrentPic(2)} />
    </>
  );
}

export default MainSlider;
