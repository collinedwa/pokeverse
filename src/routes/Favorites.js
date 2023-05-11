import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoritesProvider';
import { Box } from '@mui/material';
import { Navigation } from '../components/Navigation';
import { PokemonCard } from '../components/PokemonCard';

function Favorites(){
    const {favorites, removeFavorite} = useContext(FavoritesContext);
    console.log(favorites);
    return <>
        <Navigation/>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            m: 5,
            borderRadius: 2
          }}
        >
        {favorites.map((favorite, idx) => <>
            <PokemonCard key={idx} name={favorite} url={`https://pokeapi.co/api/v2/pokemon/${favorite}`}/>
            </>
        )}
        </Box>
    </>

}

export { Favorites };