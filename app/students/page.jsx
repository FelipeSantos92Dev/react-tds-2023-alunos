"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "./students.module.css";

import DashHeader from "../components/dashheader/DashHeader";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [dados, setDados] = useState([]);
  const router = useRouter();

  const deletar = async (id) => {
    const url = `/api/students/${id}`;
    try {
      await axios.delete(url);
      setDados(dados.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const update = async (id) => {
    router.push(`/students/${id}`);
  };

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await axios.get("/api/students");
        setStudents(response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchStudents();
  }, []);

  return (
    <div className={styles.container}>
      <DashHeader nome={"Felipe 92 Dev"} email={"dev.felipesantos@gmail.com"} />

      <div className={styles.actions}>
        <Link href="/students/register">
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Cadastrar Aluno
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Alunos</h1>

        {dados.length ? (
          students ? (
            <div className={styles.studentList}>
              {dados.map((student) => (
                <div key={student.id} className={styles.student}>
                  <div className={styles.studentInfo}>
                    <p>
                      <strong>ID:</strong> {student.id}
                    </p>
                    <p>
                      <strong>Nome:</strong> {student.name}
                    </p>
                    <p>
                      <strong>Idade:</strong> {student.age}
                    </p>
                  </div>

                  <div className={styles.buttons}>
                    <button
                      className={`${styles.button} ${styles.deleteButton}`}
                      onClick={() => deletar(student.id)}
                    >
                      <FaTrash /> Deletar
                    </button>
                    <button
                      className={`${styles.button} ${styles.editButton}`}
                      onClick={() => update(student.id)}
                    >
                      <FaEdit /> Atualizar
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
