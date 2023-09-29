import React, { useState, useEffect } from "react";
import styles from "./../styles/CardList.module.scss"
import { Card } from "./Card"

export function CardList() {

    // for mixing cards
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/home') // ! change for deploying a backend
          .then(response => response.json())
          .then(data => {
            let newData = [];
            data.forEach(item => {
                if (item.isPopular === true) {
                    newData.push(item);
                }
            });
            let mixedData = shuffleArray([...newData]);
            setItems(mixedData)
          })
          .catch(error => console.error('There was an error!', error));
    }, []);
    

    return (
        <section className={styles.cardsSectionWrapper}>
                <div className={styles.cardsSectionTextContent}>
                    <h2 className={styles.cardsSectionHeadline}>Наші хіти</h2>
                    <p className={styles.cardsSectionText}>Найбільш популярні позиції</p>
                </div>

                <ul className={styles.cardsListWrapper}>
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
        </section>
    );
}