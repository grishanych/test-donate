import styles from './Subcategory.module.scss'

function Subcategory() {

    return (
        <ul className={styles.listIteam}>
            <li className={styles.iteam}>
                <p className={styles.textIteam}>Верхній одяг</p>
            </li>
            <li className={styles.iteam}>
                <p className={styles.textIteam}>Нижній одяг</p>
            </li>
            <li className={styles.iteam}>
                <p className={styles.textIteam}>Взутя</p>
            </li>

            <li className={styles.iteam}>
                <p className={styles.textIteam}>Лоти</p>
            </li>
            <li className={styles.iteam}>
                <p className={styles.textIteam}>Донати</p>
            </li>
        </ul> 
    )
}

export default Subcategory;