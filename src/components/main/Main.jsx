import { CardList } from "../cardlist/CardList"
import styles from "./Main.module.scss"

export default function Main() {

    return (
        <main className={styles.container}>
            <CardList />
        </main>
    )
}