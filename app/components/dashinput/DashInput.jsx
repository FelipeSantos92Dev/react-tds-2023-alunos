import styles from "./dashinput.module.css";

const DashInput = ({ state, setState, tipo, nome, texto }) => {
  return (
    <input
      className={styles.inp}
      value={state}
      type={tipo}
      name={nome}
      placeholder={texto}
      onChange={(e) => setState(e.target.value)}
    />
  );
};

export default DashInput;
