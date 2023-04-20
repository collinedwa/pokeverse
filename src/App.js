import React from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import {useState, useEffect} from 'react';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=>{
    const fetchList = async () => {
      res = await fetch(pokeApi);
      data = await res.json();
      setPokemonList(data.results);
    }
    fetchList();
  }, []);

  return (
    <div data-testid="app">
      <Navigation />
      {pokemonList.map((pokemon)=><>
        <PokemonCard url={pokemon.url} name={pokemon.name} />
      </>)}
      
    </div>
  );
}

export { App };
