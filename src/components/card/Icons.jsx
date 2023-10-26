import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterIncrement } from '../../redux/actionsCreators/counterActionsCreators';
import { addFavorites, addToCart } from '../../redux/actions/cartActions';
import Basket from './icons/basket/Basket';
import Heart from './icons/heart/Heart';
import BasketFull from './icons/basket/BasketFull';
import HeartFull from './icons/heart/HeartFull';
import styles from './Card.module.scss';
import ModalSetTimeOut from '../modalSetTimeout/modalSetTimeOut';
export function Icons({
  itemNo, name, price, imageURL, id, quantity, category,
}) {
  const dispatch = useDispatch();
  const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === itemNo));
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((favItem) => favItem.itemNo === itemNo));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);
  const product = {
    itemNo, name, price, imageURL, id, quantity,
  };

  const handleAddToCart = () => {
    let countProducts = JSON.parse(localStorage.getItem('CountCartProducts')) || 0;

    if (!isItemInCart) {
      const currentProducts = JSON.parse(localStorage.getItem('Cart')) || [];
      currentProducts.push(product);
      countProducts += 1;
      localStorage.setItem('Cart', JSON.stringify(currentProducts));
      localStorage.setItem('CountCartProducts', JSON.stringify(countProducts));

      dispatch(addToCart(product));
      dispatch(counterIncrement());
      setIsModalVisibleTwo(true);

      setTimeout(() => {
        setIsModalVisibleTwo(false);
      }, 1000);

      
    }
  };

  const handleAddFavorites = () => {
    let countProducts = JSON.parse(localStorage.getItem('CountFavoritesProducts')) || 0;

    if (!isItemInFavorites) {
      const currentProducts = JSON.parse(localStorage.getItem('Favorites')) || [];
      currentProducts.push(product);
      countProducts += 1;
      localStorage.setItem('Favorites', JSON.stringify(currentProducts));
      localStorage.setItem('CountFavoritesProducts', JSON.stringify(countProducts));

      dispatch(addFavorites(product));
      dispatch(counterIncrement());

      setIsModalVisible(true);

      setTimeout(() => {
        setIsModalVisible(false);
      }, 1000);
    }
  };
  return (
    <div className={styles.cardItemIconsWrapper}>
      {category !== 'Благодійний лот' && category !== 'Донат'
        ? (
          <div className={styles.cardItemIconWrapper} onClick={handleAddToCart}>
            {isModalVisible && <ModalSetTimeOut message="Товар добавлено до обраного"/>}
            {isItemInCart ? <BasketFull /> : <Basket />}
          </div>
        )
        : null}
      <div className={styles.cardItemIconWrapper} onClick={handleAddFavorites}>
      {isModalVisibleTwo && <ModalSetTimeOut message="Товар добавлено до кошика"/>}
        {isItemInFavorites ? <HeartFull /> : <Heart />}
      </div>
    </div>
  );
}
