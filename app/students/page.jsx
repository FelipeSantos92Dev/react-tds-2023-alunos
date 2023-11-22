"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import DashHeader from "../components/dashheader/DashHeader";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [dados, setDados] = useState([]);

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

      <div>
        <h1>Alunos</h1>
        {dados.length ? (
          <ul>
            {dados.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
