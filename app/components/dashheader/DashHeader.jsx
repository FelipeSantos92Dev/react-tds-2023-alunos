import styles from "./dashheader.module.css";

import { TbPokeball, TbHome } from "react-icons/tb";
import { PiCurrencyCircleDollarLight, PiStudentFill } from "react-icons/pi";
import Link from "next/link";

const DashHeader = ({ nome, email }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <TbHome color={"#252525"} fontSize={32} />
        </Link>
      </div>
      <div className={styles.menuItems}>
        <Link href="/pokemons">
          <TbPokeball color={"#252525"} fontSize={32} />
        </Link>

        <Link href="/finances">
          <PiCurrencyCircleDollarLight color={"#252525"} fontSize={32} />
        </Link>

        <Link href="/students">
          <PiStudentFill color={"#252525"} fontSize={32} />
        </Link>
      </div>
      <div className={styles.profile}>
        <p className={styles.welcome}>Olá, {nome}</p>
        <p className={styles.useremail}>{email}</p>
      </div>
    </div>
  );
};

export default DashHeader;
