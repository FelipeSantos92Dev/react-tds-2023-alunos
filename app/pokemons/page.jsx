"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./pokemons.module.css";
import ListaPokemon from "@/models/ListaPokemon";
import DashHeader from "../components/dashheader/DashHeader";

const pokedex = new ListaPokemon();

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(32);

  const [register, setRegister] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${quantity}`
        );
        const data = response.data.results;

        const pokemonDetails = [];

        async function fetchPokemonDetails(pokemon) {
          try {
            const response = await axios.get(pokemon.url);
            const pokemonData = {
              id: response.data.id,
              name: response.data.name,
              sprite: response.data.sprites.front_default,
              types: response.data.types.map((type) => type.type.name),
            };
            pokedex.add(pokemonData);
          } catch (error) {
            console.error("Error fetching Pokemon details:", error);
          }
        }

        // O Promise.all espera que todas as promises sejam resolvidas para continuar.
        await Promise.all(data.map(fetchPokemonDetails));
        console.log(pokemonDetails);

        pokedex.fill(pokemonDetails);
        setAllPokemons(pokedex.getAll(quantity));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchPokemons();
  }, [quantity]);

  const registerPokemon = () => {
    const pokemon = {
      name,
      sprite,
      types: types.split(","),
    };

    pokedex.add(pokemon);
    setAllPokemons(pokedex.getAll(quantity));
    setName("");
    setSprite("");
    setTypes("");
    setRegister(false);
  };

  return (
    <>
      <DashHeader nome={"Felipe 92 Dev"} email={"dev.felipesantos@gmail.com"} />
      <div className={styles.App}>
        <h1>Pokédex</h1>

        <div className={styles.Quantity}>
          <label htmlFor="quantity">Quantidade de Pokémons:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="1000"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />

          <button type="button" onClick={() => setRegister(!register)}>
            Cadastrar
          </button>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.PokemonList}>
            {register ? (
              <div>
                <h2>Cadastro</h2>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="sprite">Sprite:</label>
                <input
                  type="text"
                  id="sprite"
                  name="sprite"
                  value={sprite}
                  onChange={(e) => setSprite(e.target.value)}
                />
                <label htmlFor="types">Tipos:</label>
                <input
                  type="text"
                  id="types"
                  name="types"
                  value={types}
                  onChange={(e) => setTypes(e.target.value)}
                />
                <button type="button" onClick={registerPokemon}>
                  Cadastrar
                </button>
              </div>
            ) : (
              allPokemons.map((pokemon, index) => (
                <li key={index} className={styles.PokemonItem}>
                  <h2 className={styles.PokemonName}>
                    <span>#{index}</span> - {pokemon.name}
                  </h2>
                  <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    className={styles.PokemonImage}
                  />
                  <p className={styles.PokemonTypes}>
                    Tipos: {pokemon.types.join(", ")}
                  </p>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
