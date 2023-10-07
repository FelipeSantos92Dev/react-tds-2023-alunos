import estilos from './dashcard.module.css'

const DashCard = ({ titulo, valor, cor }) => {
  return (
    <div
      className={estilos.card}
      style={{ backgroundColor: cor }}
    >
      <p className={estilos.cardTitle}>{titulo}</p>
      <p className={estilos.cardValue}>R$ {valor}</p>
    </div>
  )
}

export default DashCard