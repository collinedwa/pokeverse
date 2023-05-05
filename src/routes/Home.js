import React from 'react';
import {Layout} from './Layout';
import { useState, useEffect } from 'react';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function Home() {
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
        <Layout filteredList={filteredList} handleChange={handleChange}/>
    );

}

export { Home };