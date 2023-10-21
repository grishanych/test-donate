import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { initializeFavorites } from "../../../redux/actions/cartActions";
import FavoritesItem from "../../favorites/FavoritesItem";
import { getFavorites } from "../../../../api/getFavorites";
import { setAuthToken } from "../../../../redux/actions/authActions";
import DocumentTitle from "../../DocumentTitle";
import styles from "../../favorites/Favorites.module.scss";


function CustomerPage(){
  const [products, setProducts] = useState(null);
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      // const token = localStorage.getItem("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI4NjBlNDY1NDAzM2JjYjQ1NTRmYyIsImZpcnN0TmFtZSI6InNmc2Rmc2RmIiwibGFzdE5hbWUiOiJzZGZzZGZzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5NzgyNDQ5MywiZXhwIjoxNjk3ODYwNDkzfQ.S6HTeyf3RkbWVKW1osrhCmaLJeOqk3r7laILgM9t42ke");
      const token = localStorage.getItem("token");
      if (token) {
        setAuthToken(token);
      }

      try {
        const data = await getFavorites();
        console.log(data.favorites);
        setProducts(data.favorites);
      } catch (error) {
        console.error("Помилка при отриманні товарів:", error);
      }
    };

    fetchData();
  }, []);

  return(
    <>
      <DocumentTitle title="Кабінет"/>
        <section>
          <div>
            <h1>Особистий кабінет</h1>
          </div>
          <div className={styles.cardsSectionWrapper}>
          <h1 className={styles.cardsSectionHeadline}>Ви обрали товари:</h1>
            {products && products.map((item) => (
            <FavoritesItem
                key={item.itemNo}
                item={item}
            />
    ))}

        </div>
        </section>
    </>
  )
}

export default CustomerPage