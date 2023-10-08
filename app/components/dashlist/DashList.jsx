import DashItem from "../dashitem/DashItem";
import styles from "./dashlist.module.css";

const DashList = ({ lista, exclude, edit, tipo, color }) => {
  const cor = tipo == "Receita" ? "#9fe0b1" : "#e09f9f";
  const texto = tipo == "Receita" ? "Receitas" : "Despesas";

  return (
    <div className={styles.registros} style={{ backgroundColor: color }}>
      <p className={styles.registrostitle}>{texto} Registradas</p>
      <div className={styles.registroslist}>
        {lista.map(
          (transacao) =>
            transacao.tipo == tipo && (
              <DashItem
                key={transacao.id}
                transacao={transacao}
                exclude={exclude}
                edit={edit}
                cor={cor}
              />
            )
        )}
      </div>
    </div>
  );
};

export default DashList;
