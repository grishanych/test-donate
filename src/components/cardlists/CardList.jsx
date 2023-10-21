import { Card } from "../card/Card"
import PropTypes from "prop-types"
import styles from "./CardList.module.scss"


export default function CardList( {items} ) {
    
    return (
        <ul className={styles.cardsListWrapper}>
            {items.map((item, index) => (
                <Card
                    key={index}
                    id={item._id}
                    itemNo={item.itemNo}
                    name={item.shortName}
                    price={item.price}
                    goal={item.goal}
                    nameCloudinary={item.nameCloudinary[0]}
                    category={item.category}
                    quantity={item.quantity}
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