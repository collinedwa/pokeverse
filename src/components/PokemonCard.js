import React from 'react';
import {useState, useEffect} from 'react';
import {Typography, Card} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function PokemonCard({ url, name, list}) {
  const [pokeData, setPokeData] = useState();

  useEffect(()=>{
    const retrieve = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPokeData(data);
    }
    retrieve();
  }, [list]);

  if (pokeData === undefined) return null;

  return <>
    <Card sx={{
      width: 400,
      height: 400,
      m: 1
      }}> 
      <CardMedia
        sx={{ height: 200 }}
        image={pokeData.sprites.front_default}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.primary">
          abilities:
        </Typography>
        {pokeData.abilities.map((a, idx) => <>
        <Typography key={idx} variant="body2" color="text.secondary">{a.ability.name}</Typography>
        </>)}
      </CardContent>
    </Card>
  </>
}

export { PokemonCard };
