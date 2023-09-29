// import Header from "./components/Header";
import { CardList } from "./components/CardList"
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.container}>
      {/* <header className="App-header">
        <Header/>
      </header> */}
      <main className={styles.container}>
        <CardList/>
      </main>
    </div>
  );
}

export default App;
