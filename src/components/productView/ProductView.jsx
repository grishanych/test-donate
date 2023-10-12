import React, { useEffect } from "react";
import styles from "../productView/ProductView.module.scss";
import QuantityCounter from "./CounterQuantity";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setProduct } from "../../redux/actions/productActions";
import heart from "./icons/heart.svg";
import Facebook from "./icons/facebook/Facebook";
import Twitter from "./icons/twitter/Twitter";
import Linkedin from "./icons/linkedin/Linkedin";
import Message from "./icons/message/Message";
import { Cloudinary } from "@cloudinary/url-gen";
import ShoesSelector from "./sizeSelector/ShoesSelector";
import ClothesSelector from "./sizeSelector/ClothesSelector";
import ProductViewSlider from "./ProductViewSlider";

function convertToImgUrl(nameCloudinary) {
  const cld = new Cloudinary({
    cloud: { cloudName: "dzaxltnel" },
    url: { secure: true },
  });
  const myImage = cld.image(`${nameCloudinary}`);
  const imageURL = myImage.toURL();

  return imageURL;
}


function ProductView() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/products/" + params.itemNo
        );

        const data = await response.json();
        console.log("Data from server:", data);

        dispatch(setProduct({...data, images:data.nameCloudinary.map(convertToImgUrl)}));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (params.itemNo) {
      fetchProduct();
    }
  }, [dispatch, params.itemNo]);

  if (!product) {

    return <div>Product not found...</div>;
  }
  console.log(product)


  return (
    <div className={styles.productViewCard}>
      <div className={styles.mainInfoDescription}>
        <div className={styles.productImage}>
          <ProductViewSlider images={product.images}/>
        </div>
        <div className={styles.productDetails}>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productPrice}>{product.price} грн.</p>
          <p className={styles.descTitle}>Короткий опис:</p>
          <p className={styles.descriptionText}>{product.purpose}</p>

          {(product.category === "Взуття" && <ShoesSelector />) ||
            ((product.category === "Комплекти форми" ||
              product.category === "Одяг верхній") && <ClothesSelector />) ||
            null}
          <div className={styles.buyButtons}>
            <QuantityCounter />

              <button className={styles.buyNowBtn}>Buy Now</button>
              <button className={styles.addToCartBtn}>Add To Cart</button>
              <button className={styles.addToFavorite}>
                <img src={heart} alt="add to favorite" />
              </button>


          </div>
          <p className={styles.sku}>
            <span>Код товару:</span> {product.article}
          </p>
          <p className={styles.categories}>
            <span>Категорії: </span>
            {product.category}
          </p>
          <p className={styles.productColors}>
            <span>Колір: </span>
            {product.color}
          </p>
          <p className={styles.shareProducts}>
            Поділитись цим товаром:
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a href="##" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
            <a href="##" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <a href="#1" target="_blank" rel="noreferrer">
              <Message />
            </a>
          </p>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.productDescription}>
          <h4 className={styles.descriptionTitle}>Product Description</h4>
          <h4 className={styles.reviewsTitle}>Reviews (0)</h4>
        </div>
        <p className={styles.descriptionContent}>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductView;
