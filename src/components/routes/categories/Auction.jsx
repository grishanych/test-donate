import FilteredCardList from "../../cardlists/FilteredCardList";
import styles from "./Categories.module.scss"
// import pic from "./../../../images/bet-on-victory-ban-2.jpeg";


export default function Auction() {

  return (
    <section className={styles.cardsSectionWrapper}>
      <h1 className={styles.cardsSectionHeadline}>Лоти аукціону доброчиності</h1>
      <p className={styles.cardsSectionText}>Відкриті аукціони</p>

      <FilteredCardList property="category" value="Благодійний лот"/>

      {/* <div className={styles.pictureWrapper}>
        <img src={pic} alt="alt" className={styles.picture} />
      </div> */}
    </section>
  );
}
