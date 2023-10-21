import React, { useState } from "react";
import styles from "../productView/ProductView.module.scss";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.quantityCounter}>
      <button className={styles.decrease} onClick={handleDecrease}>
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.increase} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
