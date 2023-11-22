"use client";
import { useState } from "react";
import styles from "./sidemenu.module.css";
import { FaBars } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import { PiCurrencyCircleDollarLight, PiStudentFill } from "react-icons/pi";
import Link from "next/link";

const SideMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}>
      <div className={styles.icon} onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={styles.menuItems}>
        <li>
          <Link href="/pokemons">
            <TbPokeball color={"#FFF"} fontSize={32} />
          </Link>
        </li>
        <li>
          <Link href="/finances">
            <PiCurrencyCircleDollarLight color={"#FFF"} fontSize={32} />
          </Link>
        </li>
        <li>
          <Link href="/students">
            <PiStudentFill color={"#FFF"} fontSize={32} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
