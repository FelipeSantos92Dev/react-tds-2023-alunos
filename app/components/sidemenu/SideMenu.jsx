'use client'
import React, { useState } from 'react';
import styles from './sidemenu.module.css';
import { FaBars } from 'react-icons/fa';

const SideMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.icon} onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={styles.menuItems}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default SideMenu;
