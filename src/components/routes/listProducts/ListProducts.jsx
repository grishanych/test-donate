import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { Card } from "../../card/Card";
import styles from './ListProducts.module.scss'

const ListProducts = () => {
    const inputValueFromRedux = useSelector((state) => state.inputValue.inputValue);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/products")
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error("Помилка при отриманні даних з сервера:", error);
            });
    }, [inputValueFromRedux]);

    const filteredData = data.filter(item => item.name.toLowerCase().includes(inputValueFromRedux.toLowerCase()));

    return (
        <ul>
            {filteredData.length > 0 ? (
                <div className={styles.cardWrapper}>
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
                </div>
            ) : (
                <p>Нажаль пошук не дав результату</p>
            )}
        </ul>
    );
}

export default ListProducts;
