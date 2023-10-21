import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const BurgerMenu = ({toggleBar}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleBar()
  };

  return (
    <nav className={styles.wrapperMenu}>
      <button className={`${styles.toggleButton} ${isOpen ? styles.cross : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      {isOpen && (
        <ul className={styles.menuList}>
          <Link to="/" className={styles.menuItem}>Головна</Link>
          <Link to="/about-us" className={styles.menuItem}>Про Нас</Link>
          <Link to="/categories" className={styles.menuItem}>Категорії</Link>
          <Link to="/blog" className={styles.menuItem}>Блог</Link>
          <Link to="/contacts" className={styles.menuItem}>Контакти</Link>
        </ul>
      )}
    </nav>
  );
};

export default BurgerMenu;


