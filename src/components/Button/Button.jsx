import React, { useState, useEffect } from 'react';

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
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'font-family: Verdana, Geneva, Tahoma, sans-serif',
  };

  const imgStyle = {
    maxWidth: imageSize,
    maxHeight: imageSize,
    marginLeft: '10px',
  };

  if(windowWidth < 768) {
    buttonStyle.fontSize = "16px"
    buttonStyle.borderRadius = "25px"
    buttonStyle.padding = "20px 60px"
  }

  return  <button style={buttonStyle}>
          {text}
      {image && <img src={image} alt="Button Icon" style={imgStyle} />}
    </button>

};

export default Button;