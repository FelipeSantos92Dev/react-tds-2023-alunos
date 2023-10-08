import styles from "./dashheader.module.css";

const DashHeader = ({ nome, email }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <p className={styles.welcome}>Olá, {nome}</p>
        <p className={styles.useremail}>{email}</p>
      </div>
    </div>
  );
};

export default DashHeader;
