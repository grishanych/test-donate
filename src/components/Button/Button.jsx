import React, { useState, useEffect } from 'react';
import styles from './button.module.scss'
const Button = ({ text, color, image, imageSize }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonStyle = {
    backgroundColor: color,
  };

  const imgStyle = {
    maxWidth: imageSize,
    maxHeight: imageSize,
  };

  if(windowWidth < 768) {
    buttonStyle.fontSize = "16px"
    buttonStyle.borderRadius = "25px"
    buttonStyle.padding = "20px 60px"
  }

  return  <button className={styles.button} style={buttonStyle}>
          {text}
      {image && <img src={image} alt="Button Icon" className={styles.imgButton} style={imgStyle} />}
    </button>

};

export default Button;