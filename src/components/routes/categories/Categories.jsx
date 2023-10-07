import React, { useState, useEffect } from "react";
import Slider from "react-slider";
import { Card } from "../../card/Card"
import styles from "./Categories.module.scss"
import stylesCardList from "../../cardlist/CardList.module.scss"

export default function Categories() {
  const [items, setItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");
  const [sliderValue, setSliderValue] = useState([1, 10000]);
  const [tempSliderValue, setTempSliderValue] = useState([1, 10000]);


  const handleChange = (e) => {
      setSelectedValue(e.target.value);
    };

    const applyFilter = () => {
      setSliderValue(tempSliderValue);
    }

  // for mixing cards
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
    
  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(response => response.json())
      .then(data => {
        let newData = [];
        data.forEach(item => {
          const price = item.price ?? 0;
          if (selectedValue === "donation" || selectedValue === "lots" || (price >= sliderValue[0] && price <= sliderValue[1])) {
            if (selectedValue === "all") {
              newData.push(item);
            } else
            if (selectedValue === "donation" && item.category === "Донат") {
              newData.push(item);
            } else if (selectedValue === "lots" && item.category === "Благодійний лот") {
              newData.push(item);
            } else if (selectedValue === "setswear" && item.category === "Комплекти форми") {
              newData.push(item);
            } else if (selectedValue === "outerwear" && item.category === "Одяг верхній") {
              newData.push(item);
            } else if (selectedValue === "footwear" && item.category === "Взуття") {
              newData.push(item);
            }
          }
        });
        let mixedData = shuffleArray([...newData]);
        setItems(mixedData);
      })
      .catch(error => console.error('There was an error!', error));
  }, [selectedValue, sliderValue]); 
      

  return (
    <section className={stylesCardList.cardsSectionWrapper}>
      <div className={stylesCardList.cardsSectionTextContent}>
        <h1 className={stylesCardList.cardsSectionHeadline}>Заголовок</h1>
        <p className={stylesCardList.cardsSectionText}>Всі донати, відкриті аукціони та військовий одяг</p>
      </div>

      <div className={styles.filtrationWrapper}>
        <h2 className={styles.filtrationHeadline}>Оберіть, що вам потрібно:</h2>
        <div className={styles.filtration}>
          <div className={styles.filtrationSelectWrapper}>
            <p>Категорії:</p>
            <select name="categories" value={selectedValue} onChange={handleChange}>
              <option value="all">Всі</option>
              <option value="donation">Донати</option>
              <option value="lots">Лоти</option>
              <option value="setswear">Комплекти форми</option>
              <option value="outerwear">Одяг верхній</option>
              <option value="footwear">Взуття</option>
            </select>
          </div>
          {selectedValue !== "all" && selectedValue !== "donation" && selectedValue !== "lots" && (
            <div className={styles.filtrationSliderWrapper}>
              <p>Оберіть ціну:</p>
              <Slider 
                className={styles.reactSlider}
                thumbClassName={styles.thumb}
                trackClassName={styles.track}
                value={tempSliderValue}
                onChange={value => setTempSliderValue(value)}
                min={1}
                max={10000}
                pearling
                minDistance={5}
              />
              <div>
                {`Обраний діапазон: ${tempSliderValue[0]} - ${tempSliderValue[1]}`}
              </div>
              <button onClick={applyFilter}>Фільтрувати</button>
            </div>
          )}
        </div>
          {/* <p>Вибрана опція: {selectedValue}</p> */}
      </div>

      {selectedValue || selectedValue === "all" ? (
        <ul className={stylesCardList.cardsListWrapper}>
          {items.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              nameCloudinary={item.nameCloudinary[0]}
              isLot={item.category}
            />
          ))}
        </ul>
        ) : (
        "Завантаження..."
      )}    
    </section>
  );
}