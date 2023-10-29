/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import downArrow from "./icons/down_arrow.svg";
import styles from "./Footer.module.scss";


function FooterAccordion({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.bottomMobileItem}>
      <h4 className={styles.bottomTitle} onClick={handleToggle}>
        {title}
        {" "}
        <img className={styles.arrowDown} src={downArrow} alt="Arrow Down" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} width="20px" />
      </h4>
      {isOpen && (
      <ul className={styles.bottomList}>
        {items.map((item) => (

          <li className={styles.bottomListItem} key={item.id}>
            <Link to={item.link} className={styles.bottomLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      )}
    </nav>
  );
}

export default FooterAccordion;
