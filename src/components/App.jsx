import Header from "./header/Header";
import Footer from "./footer/Footer";
import { CardList } from "./cardlist/CardList"
import styles from "./App.module.scss"

function App() {
  return (
    <div className="App">
        <Header />
        <main className={styles.container}>
          <CardList/>
        </main>
        <Footer />
    </div>
  );
}

export default App;
