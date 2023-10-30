import React from "react";
import Facebook from "./icons/facebook/Facebook";
import Twitter from "./icons/twitter/Twitter";
import Linkedin from "./icons/linkedin/Linkedin";
// import Message from "./icons/message/Message";
import styles from "./ProductView.module.scss";


function ShareProducts() {
  return (
    <div className={styles.shareProducts}>
      <span>Поділитись: </span>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://twitter.com/home"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      {/* <a
        href="mailto:mitskelevitchp@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Message />
      </a> */}
    </div>
  );
}
export default ShareProducts;
