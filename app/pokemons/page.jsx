'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pokemons.module.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
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

        await Promise.all(data.map(fetchPokemonDetails));

        setPokemons(pokemonDetails);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div className={styles.App}>
      <h1>Pokédex</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.PokemonList}>
          {pokemons.map((pokemon, index) => (
            <li key={index} className={styles.PokemonItem}>
              <h2 className={styles.PokemonName}>{pokemon.name}</h2>
              <img src={pokemon.sprite} alt={pokemon.name} className={styles.PokemonImage} />
              <p className={styles.PokemonTypes}>Types: {pokemon.types.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
