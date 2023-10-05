import styles from "./Cart.module.scss";

function CartItem({ item, onRemoveFromCart }) {
  return (
    <li key={item.id} className={styles.cardItemWrapper}>
      <div className={styles.cardItemImageWrapper}>
        <img src={item.imageURL} alt={item.name} className={styles.cardItemImage} />
      </div>
      <p>{item.name}</p>
      {item.price ? <p className={styles.cardItemPrice}>{item.price} грн</p> : null}
      {item.isLot === "Благодійний лот" ? (
        <p className={styles.decorLot}>ЛОТ</p>
      ) : item.isLot === "Донат" ? (
        <p className={styles.decorDonat}>ДОНАТ</p>
      ) : null}
      <button onClick={() => console.log(item.id)}>Видалити</button>
    </li>
  );
}

export default CartItem;
