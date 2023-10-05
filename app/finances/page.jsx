"use client"
import { useState } from 'react'
import styles from './finances.module.css'

import { FaPen, FaTrash } from 'react-icons/fa'

function Finances() {
  // Inputs
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

    // Edição
    const [flag, setFlag] = useState(0)
    const [editButton, setEditButton] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <p className={styles.welcome}>Olá, Felipe</p>
          <p className={styles.useremail}>dev.felipesantos@gmail</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainheader}>
          <p className={styles.title}>Dashboard</p>
          <div className={styles.transaction}>
            <div className={styles.description}>
              <input
                className={styles.inputdescription}
                value={description}
                type="text"
                name='description'
                placeholder='Descrição'
                onChange={(e) => setDescription(e.target.value)}
              />
              <input className={styles.inputdescription} value={value} type="number" name='description' placeholder='Valor (R$)' onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className={styles.type}>
              {
                editButton ? (
                  <button className={styles.buttonAtualizar} >Atualizar</button>
                ) : (
                  <>
                    <button className={styles.buttonreceita} >Receita</button>
                    <button className={styles.buttondespesa} >Despesa</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className={styles.infos}>
          <div className={styles.cardSaldo}>
            <p className={styles.cardTitle}>Saldo</p>
            <p className={styles.cardValue}>R$ {0}</p>
          </div>
          <div className={styles.cardReceitas}>
            <p className={styles.cardTitle}>Receitas</p>
            <p className={styles.cardValue}>R$ {0}</p>
          </div>
          <div className={styles.cardDespesas}>
            <p className={styles.cardTitle}>Despesas</p>
            <p className={styles.cardValue}>R$ {0}</p>
          </div>
        </div>

        <div className={styles.registros}>
          <div className={styles.registrosreceitas}>
            <p className={styles.registrosreceitastitle}>Receitas Registradas</p>
            <div className={styles.registrosreceitaslist}>

            </div>
          </div>

          <div className={styles.registrosdespesas}>
            <p className={styles.registrosdespesastitle}>Despesas Registradas</p>
            <div className={styles.registrosdespesaslist}>

              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Finances