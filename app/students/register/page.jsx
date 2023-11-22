"use client";
import DashHeader from "@/app/components/dashheader/DashHeader";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post("/api/students", {
      name,
      age,
    });

    console.log(response);
  }
  return (
    <div>
      <DashHeader nome={"Felipe 92 Dev"} email={"dev.felipesantos@gmail.com"} />
      <p>Cadastrar Estudante</p>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
