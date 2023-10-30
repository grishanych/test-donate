import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { counterIncrement } from "../../redux/actionsCreators/counterActionsCreators";
import { addFavorites, addToCart } from "../../redux/actions/cartActions";
import Basket from "./icons/basket/Basket"
import Heart from "./icons/heart/Heart"
import BasketFull from "./icons/basket/BasketFull";
import HeartFull from "./icons/heart/HeartFull";
import styles from "./Card.module.scss"
import PropTypes from "prop-types"


export function Icons({ itemNo, name, price, imageURL, id }) {

  const dispatch = useDispatch();
  const isItemInCart = useSelector((state) => state.cart.items.some((cartItem) => cartItem.itemNo === itemNo));
  const isItemInFavorites = useSelector((state) => state.favorites.items.some((favItem) => favItem.itemNo === itemNo));

  const sendCart = (productId) => {
    const newCart = {
      products: [
        {
          product: productId,
          cartQuantity: 1
        }
      ]
    };

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjdmZDE0OTBhNGZiOWY3OWRkNWFhNiIsImZpcnN0TmFtZSI6ItCf0LDQstC10LsiLCJsYXN0TmFtZSI6ItCc0LjRhtC60LXQu9C10LLQuNGHIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjk3NDY2ODA4LCJleHAiOjE2OTc1MDI4MDh9.0DxQJbIy9pG8PRDeL9nXS16Yqkvs6CUHcrWr63jGsAU"
    const setAuthToken = token => {
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
      } else {
        delete axios.defaults.headers.common['Authorization'];
      }
    };
    setAuthToken(token);
  
    axios
      .post("http://localhost:4000/api/cart", newCart)
      .then(newCart => {
        return console.log(newCart);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // what data we need to take to the cart's Card
  const product = { itemNo, name, price, imageURL, id };

  const handleAddToCart = () => {
    dispatch(counterIncrement())
    sendCart(id);

    if (!isItemInCart) {
      dispatch(addToCart(product));
    }
  }

  const handleAddFavorites = () => {
    dispatch(counterIncrement());

    if (!isItemInFavorites) {
      dispatch(addFavorites(product));
    }
  }


  return (
    <div className={styles.cardItemIconsWrapper} data-testid = 'icons-testid'>
      <div className={styles.cardItemIconWrapper} onClick={handleAddToCart}>
        { isItemInCart ? <BasketFull /> : <Basket /> }
      </div>
      <div className={styles.cardItemIconWrapper} onClick={handleAddFavorites}>
        { isItemInFavorites ? <HeartFull /> : <Heart /> }
      </div>
    </div>
  )
}


Icons.propTypes = {
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  imageURL: PropTypes.string.isRequired
};