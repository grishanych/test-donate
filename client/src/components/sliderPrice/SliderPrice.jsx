import React from "react";
import Slider from "react-slider";
import Button from "../button/Button";
import styles from "./SliderPrice.module.scss";


export default function SliderPrice({tempSliderValue, setTempSliderValue, applyFilter}) {
  
  return (
    <div className={styles.filtrationSliderSection}>
      <div className={styles.filtrationSliderWrapper}>
        <p className={styles.filtrationSliderText}>Оберіть ціну:</p>
        <Slider 
          className={styles.slider}
          thumbClassName={styles.thumb}
          trackClassName={styles.track}
          value={tempSliderValue}
          onChange={value => setTempSliderValue(value)}
          min={0}
          max={10000}
          pearling
          minDistance={5}
        />
        <div className={styles.filtrationSliderText}>
          {`${tempSliderValue[0]} - ${tempSliderValue[1]}`}
        </div>
      </div>
      <Button onClick={applyFilter} text="Фільтрувати"/>
    </div>
  );
}
