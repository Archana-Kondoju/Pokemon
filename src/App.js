import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import PokemonList from './Components/PokemonList';
import axios from 'axios';
import Header from './Components/Header';
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        const results = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokeDetails = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokeDetails.data.sprites.front_default,
            };
          })
        );
        setPokemons(results);
      } catch (error) {
        console.error('Error fetching the Pokémon data:', error);
      }
    }
    fetchData();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className='bg-teal-300 my-6 px-4 py-2 rounded-xl'>
      <Header/>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;