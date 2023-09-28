import styles from "../../styles/categorys.module.scss"


const Categorys = () => {

    return (

        <div className={styles.wrapperCategorys}>

<ul className={styles.listCategorys}>

<li className={styles.iteamCategorys}>
        <h2 className={styles.nameCategorys}> Донат </h2>
</li>

<li className={styles.iteamCategorys}>
        <h2 className={styles.nameCategorys}> Лот </h2>
</li>

<li className={styles.iteamCategorys}>
        <h2 className={styles.nameCategorys}> Одяг </h2>
</li>

</ul>

        </div>

    )

}


export default Categorys