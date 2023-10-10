import React, { useState, useEffect } from "react";
import picOne from './../../images/bet-on-victory-1.png';
import picTwo from './../../images/bet-on-victory-2.png';
import picThree from './../../images/bet-on-victory-3.png';
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
    <section className={styles.section}>
      {/* <Link> */}
      {/* to - через if */}
        <img src={pictures[currentPic]} alt="alt" />
      {/* </Link> */}
      <div className={styles.imageswrapper}>
        <img src={picOne} alt="alt" onClick={() => setCurrentPic(0)} className={styles.image}/>
        <img src={picTwo} alt="alt" onClick={() => setCurrentPic(1)} className={styles.image}/>
        <img src={picThree} alt="alt" onClick={() => setCurrentPic(2)} className={styles.image}/>
      </div>
    </section>
  );
}

export default MainSlider;
