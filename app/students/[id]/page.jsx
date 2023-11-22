"use client";
import DashHeader from "@/app/components/dashheader/DashHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UpdateStudent({ params }) {
  const { id } = params;
  const [student, setStudent] = useState("");
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    async function fetchStudent() {
      const response = await axios.get(
        `http://localhost:3000/api/students/${id}`
      );
      setStudent(response.data);
      setName(response.data.name);
      setAge(response.data.age);
    }

    fetchStudent();
  }, []);

  const atualizarAluno = () => {
    axios
      .put(`http://localhost:3000/api/students/${id}`, {
        name: name,
        age: age,
      })
      .then((response) => {
        router.push("/students");
      });
  };

  return (
    <div>
      <DashHeader nome={"Felipe Santos"} email={"dev.felipesantos@gmail.com"} />
      <h1>UpdateStudent</h1>
      {student ? (
        <div>
          <p>{student.id}</p>
          <form onSubmit={atualizarAluno}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button>Atualizar</button>
          </form>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
