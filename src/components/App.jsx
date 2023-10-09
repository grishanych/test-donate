import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Context from "../components/Context";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import AppRoutes from "./routes/AppRoutes";
import styles from "./App.module.scss";


function App() {
  
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const [contextData, setContextData] = useState({ isLinkVisible, setIsLinkVisible });
  const updateContextData = (newData) => {
    setContextData(prevData => ({ ...prevData, ...newData }));
  };
  
  console.log(contextData);


  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Context.Provider value={{ contextData, updateContextData }}>
          <Header />
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
