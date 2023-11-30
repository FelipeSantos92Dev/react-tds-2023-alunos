"use client";
import DashHeader from "@/app/components/dashheader/DashHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./register.module.css";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students, setStudents] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/students", { name, age });
      setName("");
      setAge("");
      router.push(`/students/`);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await axios.get("/api/students");
        setStudents(response.data);
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
        <Link href="/students">
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Voltar para Alunos
          </button>
        </Link>
      </div>

      <div className={styles.studentsContainer}>
        <h1 className={styles.mainText}>Cadastrar Aluno</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Nome:
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="age">
              Idade:
            </label>
            <input
              className={styles.input}
              type="number"
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
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
