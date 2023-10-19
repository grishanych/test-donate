import { Cloudinary } from "@cloudinary/url-gen";
import styles from "./Card.module.scss"
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Icons } from "./Icons";


export function Card({ itemNo, name, price, nameCloudinary, category, id }) {

  // for working with Cloudinary
  const cld = new Cloudinary({
    cloud: { cloudName: "dzaxltnel" },
    url: { secure: true }
  });
  const myImage = cld.image(`${nameCloudinary}`);
  const imageURL = myImage.toURL();


  return (
    <li className={styles.cardItemWrapper}>
      {category === "Благодійний лот" ?
        <div className={styles.decorLot}>ЛОТ</div>
        : category === "Донат" ?
          <div className={styles.decorDonat}>ДОНАТ</div>
          :
          null}
      <div className={styles.cardItemImageWrapper}>
        <Link to={`/product/${itemNo}`}>
          <img src={imageURL} className={styles.cardItemImage} alt="My img" />
        </Link>
      </div>
      <Link to={`/product/${itemNo}`}>
        <div className={styles.cardItemTextWrapper}>
          <h3 className={styles.cardItemHeadline}>{name}</h3>
          {price ?
            <p className={styles.cardItemPrice}>{price} грн</p>
            :
            null
          }
        </div>
      </Link>
      <Icons imageURL={imageURL} itemNo={itemNo} name={name} price={price} id={id} quantity={1} category={category}/>
      <div className={styles.cardItemDecor}></div>
    </li>
  )
}


Card.propTypes = {
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  nameCloudinary: PropTypes.string.isRequired,
};