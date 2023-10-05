// import { useState } from "react";
import QuantityCounter from "./QuantityCounter";
// import { Card } from "../card/Card";

function ProductView() {
  // const [product, setProduct] = useState(null);

  return (
    <div className="product-view-card">
      <div className="main-info-description">
        <div className="product-image">
          {/* <img src={} alt="image" /> */}
          карусель картинок
        </div>
        <div className="product-details">
          <h2 className="product-name">Name of product</h2>
          <p className="product-price">грн</p>
          <hr />
          <div className="short-description">
            <p className="short-desc-title">Short Description:</p>
            {/* <p className="description-text">{product.shortDescription}</p> */}
            <p className="size">Size:</p>
            <div className="size-list">
              <div className="size-s">
                <label>
                  <input type="radio" value="S" checked="" />S
                </label>
              </div>
              <div className="size-m">
                <label>
                  <input type="radio" value="M" checked="" />M
                </label>
              </div>
              <div className="size-l">
                <label>
                  <input type="radio" value="L" checked="" />L
                </label>
              </div>
              <div className="size-xl">
                <label>
                  <input type="radio" value="XL" checked="" />
                  XL
                </label>
              </div>
            </div>
            <div className="buy-now">
              <QuantityCounter />
              <button className="buy-now">Buy Now</button>
              <button className="add-to-cart">Add To Cart</button>
              <button className="add-to-favorite">Add to favorite</button>
            </div>
            <p className="sku">SKU: </p>
            <p className="categories"></p>
            <p className="product-tags">Tags: </p>
            <p className="share-products">Share this products:</p>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h4 className="description">Product Description</h4>
        <p>Опис продукту</p>
      </div>
    </div>
  );
}

export default ProductView;
