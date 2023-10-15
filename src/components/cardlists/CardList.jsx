import styles from "./CardList.module.scss"
import { Card } from "../card/Card"
import PropTypes from "prop-types"

export default function CardList( {items} ) {
    

    return (
        <ul className={styles.cardsListWrapper}>
            {items.map((item, index) => (
                <Card
                    key={index}
                    itemNo={item.itemNo}
                    name={item.name}
                    price={item.price}
                    nameCloudinary={item.nameCloudinary[0]}
                    category={item.category}
                />
            ))}
        </ul>
    );
}

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            itemNo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number,
            nameCloudinary: PropTypes.arrayOf(PropTypes.string).isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired
};