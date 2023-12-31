"use client";
import { useState } from "react";
import styles from "./finances.module.css";

import ListaTransacao from "@/models/ListaTransacao";

import DashCard from "../components/dashcard/DashCard";
import DashButton from "../components/dashbutton/DashButton";
import DashList from "../components/dashlist/DashList";
import DashHeader from "../components/dashheader/DashHeader";
import DashInput from "../components/dashinput/DashInput";

const listaTransacao = new ListaTransacao();

function Finances() {
  // Inputs
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  // Dados da Classe
  const [lista, setLista] = useState(listaTransacao.getHistorico());
  const [saldo, setSaldo] = useState(listaTransacao.saldo);
  const [receitas, setReceitas] = useState(listaTransacao.receitas);
  const [despesas, setDespesas] = useState(listaTransacao.despesas);

  // Edição
  const [flag, setFlag] = useState(0);
  const [editButton, setEditButton] = useState(false);

  // Adicionar Receita
  const addReceita = () => {
    // console.log("Adicionou receita");
    listaTransacao.adicionarTransacao(description, value, "Receita");

    atualizarValores();
  };

  // Adicionar Despesa
  const addDespesa = () => {
    // console.log("Adicionou despesa");
    listaTransacao.adicionarTransacao(description, value, "Despesa");

    atualizarValores();
  };

  const exclude = (id) => {
    listaTransacao.excluirTransacao(id);

    atualizarValores();
  };

  const edit = (id) => {
    const transacao = listaTransacao.getTransacaoPorId(id);

    setDescription(transacao.descricao);
    setValue(transacao.valor);

    setEditButton(true);
    setFlag(id);
  };

  const update = () => {
    listaTransacao.atualizarTransacao(flag, description, value);

    atualizarValores();
    setEditButton(false);
    setFlag(0);
  };

  const atualizarValores = () => {
    setDescription("");
    setValue("");

    setSaldo(listaTransacao.saldo);
    setReceitas(listaTransacao.receitas);
    setDespesas(listaTransacao.despesas);
    setLista(listaTransacao.getHistorico());
  };

  return (
    <>
      <DashHeader nome={"Felipe"} email={"felipesantos@docente.senai.br"} />

      <div className={styles.content}>
        <div className={styles.mainheader}>
          <p className={styles.title}>Dashboard</p>
          <div className={styles.transaction}>
            <div className={styles.description}>
              <DashInput
                state={description}
                setState={setDescription}
                tipo={"text"}
                nome={"description"}
                texto={"Descrição"}
              />

              <DashInput
                state={value}
                setState={setValue}
                tipo={"number"}
                nome={"value"}
                texto={"Valor (R$)"}
              />
            </div>
            <div className={styles.type}>
              {editButton ? (
                <DashButton text={"Editar"} fn={update} color={"#9fc7e0"} />
              ) : (
                <>
                  <DashButton
                    text={"Receita"}
                    fn={addReceita}
                    color={"#9fe0b1"}
                  />
                  <DashButton
                    text={"Despesa"}
                    fn={addDespesa}
                    color={"#e09f9f"}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.infos}>
          <DashCard titulo={"Saldo"} valor={saldo} cor={"#9fc7e0"} />
          <DashCard titulo={"Receitas"} valor={receitas} cor={"#9fe0b1"} />
          <DashCard titulo={"Despesas"} valor={despesas} cor={"#e09f9f"} />
        </div>

        <div className={styles.registros}>
          <DashList
            lista={lista}
            exclude={exclude}
            edit={edit}
            tipo={"Receita"}
            color={"#d0f0c0"}
          />
          <DashList
            lista={lista}
            exclude={exclude}
            edit={edit}
            tipo={"Despesa"}
            color={"#f0c0c0"}
          />
        </div>
      </div>
    </>
  );
}

export default Finances;
