'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pokemons.module.css';
import ListaPokemon from '@/models/ListaPokemon';

const pokedex = new ListaPokemon();

function App() {
  const [allPokemons, setAllPokemons] = useState(pokedex.getAll());
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(32);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`);
        const data = response.data.results;

        const pokemonDetails = [];

        async function fetchPokemonDetails(pokemon) {
          try {
            const response = await axios.get(pokemon.url);
            const pokemonData = {
              name: response.data.name,
              sprite: response.data.sprites.front_default,
              types: response.data.types.map((type) => type.type.name),
            };
            pokemonDetails.push(pokemonData);
          } catch (error) {
            console.error('Error fetching Pokemon details:', error);
          }
        }

        // O Promise.all espera que todas as promises sejam resolvidas para continuar.
        await Promise.all(data.map(fetchPokemonDetails));

        pokedex.fill(pokemonDetails);
        setAllPokemons(pokedex.getAll());
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }

    fetchPokemons();
  }, [quantity]);

  console.log('allPokemons', allPokemons);

  return (
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
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.PokemonList}>
          {allPokemons.map((pokemon, index) => (
            <li key={index} className={styles.PokemonItem}>
              <h2 className={styles.PokemonName}>{pokemon.name}</h2>
              <img src={pokemon.sprite} alt={pokemon.name} className={styles.PokemonImage} />
              <p className={styles.PokemonTypes}>Tipos: {pokemon.types.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
