"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import DashHeader from "../components/dashheader/DashHeader";
import Link from "next/link";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [dados, setDados] = useState([]);

  const deletar = async (id) => {
    const url = `/api/students/${id}`;
    try {
      await axios.delete(url);
      setDados(dados.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error fetching data:");
    }
  };

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await axios.get("api/students");
        setStudents(response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchStudents();
  }, []);

  return (
    <div>
      <DashHeader nome={"Felipe 92 Dev"} email={"dev.felipesantos@gmail.com"} />

      <Link href="/students/register">
        <button>Cadastrar Aluno</button>
      </Link>

      <div>
        <h1>Alunos</h1>
        {dados.length ? (
          students ? (
            <ul>
              {dados.map((student) => (
                <div key={student.id}>
                  <li>{student.id}</li>
                  <li>{student.name}</li>
                  <li>{student.age}</li>
                  <button onClick={() => deletar(student.id)}>Deletar</button>
                </div>
              ))}
            </ul>
          ) : (
            <p>Carregando...</p>
          )
        ) : (
          <p>Não há alunos cadastrados</p>
        )}
      </div>
    </div>
  );
}
