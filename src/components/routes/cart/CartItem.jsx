import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { removeFromCart, updateCartProduct } from "../../../redux/actions/cartActions";
import { counterDecrement } from "../../../redux/actionsCreators/counterActionsCreators";
import Button from "../../button/Button";
import QuantityCounter from "../../productView/CounterQuantity";
import styles from "./Cart.module.scss";
import DeleteIcon from "./DeleteIcon";


function CartItem({ item }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const itemInCart = useSelector((state) => state.cart.items.find((cartItem) => cartItem.itemNo === item.itemNo));
  
  const handleRemoveFromCart = () => {
    if (itemInCart) {
      let countProducts = JSON.parse(localStorage.getItem("CountCartProducts")) || 0;
      countProducts -= 1;
      localStorage.setItem("CountCartProducts", JSON.stringify(countProducts));
      
      const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];
      const newProducts = currentProducts.filter((cartItem) => cartItem.itemNo !== item.itemNo);
      localStorage.setItem("Cart", JSON.stringify(newProducts));
      
      dispatch(removeFromCart(item.itemNo));
      dispatch(counterDecrement());
    }
  };

  const handleChangeQuantity = (quantity) => {
    dispatch(updateCartProduct({ quantity, itemNo: item.itemNo }));
    const currentProducts = JSON.parse(localStorage.getItem("Cart")) || [];

    localStorage.setItem("Cart", JSON.stringify(currentProducts.map((product) => {
      if (product.itemNo === item.itemNo) {
        return { ...product, quantity };
      }

      return product;
    })));
  };
  
  return (

    <tbody className={styles.cardItemWrapper}>
      <div className={styles.productInfo}>
        <Link to={`/product/${item.itemNo}`}>
          <div className={styles.cardItemImageWrapper}>
            <img src={item.imageURL} alt={item.name} className={styles.cardItemImage} />
          </div>
        </Link>
        <div className={styles.nameContainer}>
          <p className={styles.name}>{item.shortName}</p>
          <p className={styles.sku}>
            <span>Код товару:</span>
            {" "}
            {item.itemNo}
          </p>
        </div>
      </div>

      <p className={styles.cardItemPrice}>
        {item.currentPrice}
        {" "}
        грн
      </p>
      <div className={styles.quantityCounterWrapper}>
        <QuantityCounter quantity={itemInCart.quantity} setQuantity={handleChangeQuantity} />
      </div>

      <Button style={{ backgroundColor: "none" }} onClick={() => handleRemoveFromCart()}>
        <DeleteIcon />
      </Button>
    </tbody>


  );
}

export default CartItem;
