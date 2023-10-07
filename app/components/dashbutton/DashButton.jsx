import estilos from './dashbutton.module.css'

const DashButton = ({ text, fn, color }) => {
  return (
    <button
      className={estilos.btn}
      style={{ backgroundColor: color }}
      onClick={fn}>
        {text}
      </button>
  )
}

export default DashButton