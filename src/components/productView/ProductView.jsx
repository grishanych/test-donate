import React, {useEffect, useState} from "react";
import QuantityCounter from "./CounterQuantity";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { setProduct } from "../../redux/actions/productActions";
import heart from "./icons/heart.svg";
import ShoesSelector from "./sizeSelector/ShoesSelector";
import ClothesSelector from "./sizeSelector/ClothesSelector";
import ProductViewSlider from './ProductViewSlider'
import TabComponent from './Tabs'
import { ProgressBar } from "./ProgressBar";
import ShareProducts from "./ShareProducts";
import Button from "../button/Button";
import CountdownTimer from "./CountdownTimer";
import DocumentTitle from "../routes/DocumentTitle";
import styles from "../productView/ProductView.module.scss";

// ! replace
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
  const [progress, setProgress] = useState(15);
  const [currentBid, setCurrentBid] = useState('');


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
            "http://localhost:4000/api/products/" + params.itemNo
        );
        const data = await response.json();
        const rawDate = new Date(data.date);
        const formattedDate = `${rawDate.getDate()}/${rawDate.getMonth() + 1}/${rawDate.getFullYear()}`;

        const initialPrice = data.goal;
        dispatch(setProduct({...data, formattedDate, initialPrice: initialPrice, images:data.nameCloudinary.map(convertToImgUrl)}));
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
  const handleBidClick = () => {
    // Отримайте значення ставки зі стейту currentBid та відобразіть його в спані або іншому елементі

    if (parseFloat(currentBid) > parseFloat(product.initialPrice)) {
      // якщо так, оновіть значення стартової ціни на нову ставку
      setCurrentBid(currentBid);
    }
    console.log('Ставка піднята:', currentBid);
    // Тут ви можете використовувати це значення для відображення на сторінці або відправки на сервер
  };


  return (
    <>
    <DocumentTitle title={`${product.shortName} | Донат Перемоги`}/>

      <div className={styles.productViewCard}>
        <div className={styles.mainInfoDescription}>
            <ProductViewSlider images={product.images}/>
          <div className={styles.productDetails}>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productShortName}>{product.shortName}</p>
            {product.category === "Донат" ? (
                <div className={styles.donateInfo}>
                  <span className={styles.donateInfoDetails}>До кінця збору: </span>
                  <span className={styles.timer}> <CountdownTimer targetDate={product.deadline} /></span>
                </div>
            ) : null}
            {product.category === "Донат" ? (
                <ProgressBar progress={progress} />
            ) : null}
            {product.category === "Донат" ? (
                <div className={styles.foundrasingInfo}>
                  <div>
                    <p>Зібрано: </p>
                    <p className={styles.foundrasingResult}> {product.goal * progress/100}  грн</p>
                  </div>
                  <div>
                    <p>У відсотках:  </p>
                    <p className={styles.foundrasingResult}> {progress} %</p>
                  </div>
                  <div>
                    <p>Необхідна сума:  </p>
                    <p className={styles.foundrasingResult}> {product.goal} грн</p>
                  </div>
                </div>
            ) : null}

            {product.category === "Благодійний лот" ? (

                <div className={styles.lotDescContainer}>
                  <div className={styles.lotDetails}>
                    <div className={styles.lotInfo}>
                      <span className={styles.lotInfoDetails}>Номер лоту: </span>
                      <span>{product.itemNo}</span>
                    </div>
                    <div className={styles.lotInfo}>
                      <span className={styles.lotInfoDetails}>До закриття лоту: </span>
                      <span className={styles.timer}> <CountdownTimer targetDate={product.deadline} /></span>
                    </div>
                    <div className={styles.lotInfo}>
                      <span className={styles.lotInfoDetails} >Стартова ціна: </span>
                      <span>{product.initialPrice} грн</span>
                    </div>
                    <div className={styles.lotInfo}>
                      <span className={styles.lotInfoDetails} >Поточна ціна: </span>
                      <span>{currentBid} грн</span>
                    </div>
                    <div className={styles.lotInfo}>
                      <span className={styles.lotInfoDetails}>Автор: </span>
                      <span>{product.author}</span>
                    </div>
                  </div>

                  <div className={styles.descriptionOfProduct}>
                    <h3 style={{ marginBottom: '10px'}}>Опис</h3>
                    <p className={styles.descriptionText}> {product.description}</p>
                  </div>
                </div>
            ) : null }


            {(product.category === "Взуття" && <p className={styles.productPrice}>{product.price} грн.</p>) ||
                ((product.category === "Комплекти форми" ||
                    product.category === "Одяг верхній") && <p className={styles.productPrice}>{product.price} грн.</p>) ||
                null}

            {["Взуття", "Комплекти форми", "Одяг верхній"].includes(product.category) && (
                <>
                  <p className={styles.descTitle}>Короткий опис:</p>
                  <p className={styles.descriptionText}>{product.shortDescription}</p>
                </>
            )}

            {(product.category === "Взуття" && <ShoesSelector />) ||
                ((product.category === "Комплекти форми" ||
                    product.category === "Одяг верхній") && <ClothesSelector />) ||
                null}

            {(product.category === "Взуття" &&  <QuantityCounter />) ||
                ((product.category === "Комплекти форми" ||
                    product.category === "Одяг верхній") &&  <QuantityCounter />) ||
                null}

            {["Взуття", "Комплекти форми", "Одяг верхній"].includes(product.category) && (
                <div className={styles.buyButtons}>
                  <button className={styles.buyNowBtn}>Миттєва купівля</button>
                  {/*<Button*/}
                  {/*    text="Додати в кошик"*/}
                  {/*    color="rgba(70, 163, 88, 1)"*/}
                  {/*    toPage="/"*/}
                  {/*/>*/}
                  <button className={styles.addToCartBtn}>Додати в кошик</button>
                  <button className={styles.addToFavorite}>
                    <img src={heart} alt="add to favorite" />
                  </button>
                </div>
            )}

            {["Взуття", "Комплекти форми", "Одяг верхній"].includes(product.category) && (
                <>
                  <p className={styles.sku}>
                    <span>Код товару:</span> {product.itemNo}
                  </p>
                  <p className={styles.categories}>
                    <span>Категорії: </span>
                    {product.category}
                  </p>
                  <p className={styles.productColors}>
                    <span>Колір: </span>
                    {product.color}
                  </p>
                  <ShareProducts/>
                </>
            )}

            {product.category === "Донат" ? (
                <div className={styles.descTitle}>
                    <h3 style={{ marginBottom: '10px'}}>Опис</h3>
                  <p className={styles.descriptionText}> {product.description}</p>
                </div>

            ): null }

            {product.category === "Благодійний лот" ? (
                <>
                  <div className={styles.rateContainer}>
                    <input placeholder="Ваша ставка" className={styles.lotRate} value={currentBid}
                           onChange={(e) => setCurrentBid(e.target.value)} />

                  </div>
                  <div className={styles.rateUpBtnWrapper}>
                    <Button
                        text="Підняти ставку"
                        color="rgba(70, 163, 88, 1)"
                        onClick={handleBidClick}
                    />
                    <ShareProducts/>
                  </div>

                </>

            ): null}



            {product.category === "Донат" ? (
                <div className={styles.donateBtnContainer}>
                  <button className={styles.donateBtn}>
                    Підтримати
                  </button>
                  <ShareProducts/>
                </div>

            ): null }
          </div>

        </div>

        {["Взуття", "Комплекти форми", "Одяг верхній"].includes(product.category) && (
            <div className={styles.descriptionContainer}>
                <TabComponent productDescription={product.description} />
            </div>
        )}

      </div>
    </>
  );
}


export default ProductView;
