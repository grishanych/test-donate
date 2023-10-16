import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { Card } from "../../card/Card";
import styles from './SearchProducts.module.scss';
import Spinner from '../../spinner/Spinner'

const ListProducts = () => {
    const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); // Встановлюємо isLoading на true перед запитом

        axios.get("http://localhost:4000/api/products")
            .then(response => {
                setData(response.data);
                setIsLoading(false); // Завантаження завершено, встановлюємо isLoading на false
            })
            .catch(error => {
                console.error("Помилка при отриманні даних з сервера:", error);
                setIsLoading(false); // Якщо сталася помилка, також встановлюємо isLoading на false
            });
    }, [inputValueFromRedux]);

    const filteredData = data.filter(item => item.name.toLowerCase().includes(inputValueFromRedux.toLowerCase()));

    return (
        <section className={styles.cardsSectionWrapper}>
            <h1 className={styles.cardsSectionHeadline}>Результати пошуку</h1>
            {isLoading ? (
                <Spinner /> // Відображаємо спіннер під час завантаження
            ) : (
                <ul className={styles.cardsListWrapper}>
                    {filteredData.length > 0 ? (
                        <>
                            {filteredData.map((item, index) => (
                                <Card
                                    key={index}
                                    itemNo={item.itemNo}
                                    name={item.name}
                                    price={item.price}
                                    nameCloudinary={item.nameCloudinary[0]}
                                    isLot={item.category}
                                />
                            ))}
                        </>
                    ) : (
                        <p>На жаль, пошук не дав результату</p>
                    )}
                </ul>
            )}
        </section>
    );
}

export default ListProducts;
