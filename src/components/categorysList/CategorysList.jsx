import Button from "../button/Button";
import styles from "./CategorysList.module.scss"
import Donate from "./icons/donates/Donate"
import Buy from "./icons/goods/Buy"
import Auction from "./icons/lots/Auction"


const Categorys = () => {

return (
  <section className={styles.categorysWrapper}>
    <ul className={styles.categorysList}>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <Donate/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Донати на ЗСУ </h3>
          <p className={styles.categorysText}>Зроби донат на потреби ЗСУ!</p>
        </div>
      </li>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <Auction/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Лоти аукціону доброчинності </h3>
          <p className={styles.categorysText}>Обери лот та зроби ставку на Перемогу!</p>
        </div>
      </li>
      <li className={styles.categorysIteam}>
        <div className={styles.categorysImageWrapper}>
          <Buy/>
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.categorysHeadline}> Продаж військового одягу </h3>
          <p className={styles.categorysTextt}>Придбай продукцію собі або воїну ЗСУ!</p>
        </div>
      </li>
    </ul>
    <div className={styles.buttonWrapper}>
      <Button 
          text="Переглянути всі"
          color="rgba(70, 163, 88, 1)"
          toPage="/categories"
      />
    </div>
  </section>
)
}


export default Categorys