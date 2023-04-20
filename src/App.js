import React from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { Box, TextField, Button } from '@mui/material';
import {useState, useEffect} from 'react';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    const fetchList = async () => {
      const res = await fetch(pokeApi);
      const data = await res.json();
      setPokemonList(data.results);
      setFilteredList(data.results);
    }
    fetchList();
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, 'gi');
    const filtered = pokemonList.filter((pokemon) => {
      return pokemon.name.match(regex);
    });

    setFilteredList(filtered);
  }

  return (
    <div data-testid="app">
      <Navigation />
      <Box
        sx={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          maxWidth: 200,
          mx: "auto"
      }}
      >
      <TextField onChange={(e)=>handleChange(e)} label="Pokemon Search" sx={{mx: "auto"}}/>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          m: 5,
          borderRadius: 2
        }}
      >
      {filteredList.map((pokemon)=><>
        <PokemonCard url={pokemon.url} name={pokemon.name} list={filteredList} />
      </>)}
      </Box>
      
    </div>
  );
}

export { App };
