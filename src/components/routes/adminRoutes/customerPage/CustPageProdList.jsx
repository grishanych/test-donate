import React, { useState, useEffect } from "react";
import styles from "./CustomerPage.module.scss";


export default function CustPageProdList({ lsData }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsLS = localStorage.getItem(lsData);
    if (productsLS) {
      setProducts(JSON.parse(productsLS));
    }
  }, [lsData]);

  return (
    <div className={styles.listWrapper}>
      {products && products.map((item) => (
        <li key={item.itemNo} className={styles.cardItemWrapper}>
          <p>
            -
            {item.name}
            ,
          </p>
          {item.quantity && item.currentPrice ? (
            <>
              <p>
                {item.quantity}
                {" "}
                шт.
              </p>
              <p className={styles.cardItemPrice}>
                Всього на:
                {item.currentPrice * item.quantity}
                грн
              </p>
            </>
          ) : null }
        </li>
      ))}
    </div>
  );
}
