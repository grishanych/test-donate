import styles from "./CategorysList.module.scss"
import Button from "../button/Button";


const Categorys = () => {

return (
  <section className={styles.categorysWrapper}>
    <ul className={styles.categorysList}>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <img src="" alt="alt" className={styles.categorysImage}/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Донати на ЗСУ </h3>
          <p className={styles.categorysText}>Зроби донат на потреби ЗСУ!</p>
        </div>
      </li>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <img src="" alt="alt" className={styles.categorysImage}/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Лоти аукціону доброчинності </h3>
          <p className={styles.categorysText}>Обери лот та зроби ставку на Перемогу!</p>
        </div>
      </li>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <img src="" alt="alt" className={styles.categorysImage}/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Продаж військового одягу </h3>
          <p className={styles.categorysTextt}>Придбай продукцію собі або воїну ЗСУ!</p>
        </div>
      </li>
    </ul>
    <div className={styles.buttonWrapper}>
      <Button 
          text="Всі категорії"
          color="rgba(70, 163, 88, 1)"
          toPage="/categories"
      />
    </div>
  </section>
)
}


export default Categorys