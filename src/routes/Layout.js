import React from 'react';
import { Navigation } from '../components/Navigation';
import { PokemonCard } from '../components/PokemonCard';
import { Box, TextField, Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Layout({filteredList, handleChange}) {
    return (
        <div data-testid="app">
        <Navigation />
        <Outlet />
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
        {filteredList.map((pokemon, idx)=><>
          <PokemonCard key={idx} url={pokemon.url} name={pokemon.name} list={filteredList} />
        </>)}
        </Box>
        
      </div>
    )
}

export { Layout };