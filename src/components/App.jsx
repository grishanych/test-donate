import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom'
// import { useSelector , useDispatch } from "react-redux"
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main"
import AppRoutes from "./routes/AppRoutes";
import styles from "./App.module.scss";


function App() {

  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const contextData = { isLinkVisible, setIsLinkVisible };

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Context.Provider value={contextData}>
          <Header/>
          <Main>
            <AppRoutes/>
          </Main>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    </div>

  );
}

export default App;
