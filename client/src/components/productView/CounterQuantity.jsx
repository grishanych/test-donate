
import styles from "./ProductView.module.scss";

function QuantityCounter({ quantity, setQuantity }) {
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
      <button className={styles.decrease} onClick={handleDecrease} type="button">
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.increase} onClick={handleIncrease} type="button">
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
