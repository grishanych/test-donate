import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import axios from 'axios';
import { Card } from "../../card/Card";
import styles from './SearchProducts.module.scss';
import Spinner from '../../spinner/Spinner'
=======
import { Card } from "../../card/Card";
import { getProducts } from "../../../api/getProducts";
import styles from './SearchProducts.module.scss'
import Spinner from '../../Spinner/Spinner'
import DocumentTitle from "../DocumentTitle";
>>>>>>> cart-back

const ListProducts = () => {
    const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
<<<<<<< HEAD
        setIsLoading(true); // Встановлюємо isLoading на true перед запитом

        axios.get("http://localhost:4000/api/products")
            .then(response => {
                setData(response.data);
                setIsLoading(false); // Завантаження завершено, встановлюємо isLoading на false
            })
            .catch(error => {
                console.error("Помилка при отриманні даних з сервера:", error);
                setIsLoading(false); // Якщо сталася помилка, також встановлюємо isLoading на false
=======
        setIsLoading(true);

        getProducts()
            .then(responseData => {
                setData(responseData);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Помилка при отриманні даних з сервера:", error);
                setIsLoading(false);
>>>>>>> cart-back
            });
    }, [inputValueFromRedux]);

    const filteredData = data.filter(item => item.name.toLowerCase().includes(inputValueFromRedux.toLowerCase()));

    return (
<<<<<<< HEAD
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
=======
        <>
            <DocumentTitle title={`Пошук: ${inputValueFromRedux}`}/>
            
                <section className={styles.cardsSectionWrapper}>
                    <h1 className={styles.cardsSectionHeadline}>Результати пошуку</h1>
                    {isLoading ? (
                        <Spinner />
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
        </>
>>>>>>> cart-back
    );
}

export default ListProducts;
