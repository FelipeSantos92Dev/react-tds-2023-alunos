import DashItem from "../dashitem/DashItem"
import styles from './dashlist.module.css'

const DashList = ({ lista, exclude, edit, tipo, color }) => {
  const cor = tipo == "Receita" ? "#9fe0b1" : "#e09f9f"

  return (
    <div className={styles.registros} style={{ backgroundColor: color }}>
      <p className={styles.registrosreceitastitle}>Receitas Registradas</p>
      <div className={styles.registrosreceitaslist}>
        {
          lista.map(transacao => 
            transacao.tipo == tipo && (
              <DashItem transacao={transacao} exclude={exclude} edit={edit} cor={cor} />
            ))
        }
      </div>
    </div>
  )
}

export default DashList