import styles from "./dashitem.module.css";
import { FaPen, FaTrash } from "react-icons/fa";

const DashItem = ({ transacao, exclude, edit, cor }) => {
  return (
    <div className={styles.registrositem} style={{ backgroundColor: cor }}>
      <p>{transacao.descricao}</p>
      <p className={styles.registrositemvalue}>R$ {transacao.valor}</p>

      <div className={styles.actions}>
        <button
          className={styles.actionsbutton}
          onClick={() => exclude(transacao.id)}
        >
          <FaTrash />
        </button>

        <button
          className={styles.actionsbutton}
          onClick={() => edit(transacao.id)}
        >
          <FaPen />
        </button>
      </div>
    </div>
  );
};

export default DashItem;
