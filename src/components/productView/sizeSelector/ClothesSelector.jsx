import React from "react";
import styles from "../ProductView.module.scss";

const ClothesSelector = () => {
  const clothingSizes = ["S", "M", " L", "XL", "XXL"];

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
  };

  return (
    <div className={styles.selectContainer}>
      <p className={styles.size}>Розмір:</p>
      <select className={styles.selectedOption} onChange={handleSizeChange}>
        {clothingSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClothesSelector;
