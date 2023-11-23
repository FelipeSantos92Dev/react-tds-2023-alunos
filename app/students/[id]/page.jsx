"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import styles from "./students.module.css"; // Importe o CSS existente

import DashHeader from "../../components/dashheader/DashHeader";
import Link from "next/link";

export default function UpdateStudent({ params }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchStudentDetails() {
      try {
        const response = await axios.get(`/api/students/${id}`);
        const student = response.data;
        setName(student.name);
        setAge(student.age);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    }

    if (id) {
      fetchStudentDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/students/${id}`, { name, age });
      router.push(`/students/${id}`);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className={styles.container}>
      <DashHeader nome={"Felipe 92 Dev"} email={"dev.felipesantos@gmail.com"} />

      <div className={styles.actions}>
        <Link href={`/students`}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Voltar para Alunos
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Atualizar Estudante</h1>

        {id ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nome:
              </label>
              <input
                type="text"
                className={styles.input}
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="age" className={styles.label}>
                Idade:
              </label>
              <input
                type="number"
                className={styles.input}
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`${styles.button} ${styles.submitButton}`}
            >
              Atualizar
            </button>
          </form>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
