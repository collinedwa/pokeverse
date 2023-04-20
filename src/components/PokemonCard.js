import React from 'react';
import {useState, useEffect} from 'react';
import {Typography, Card} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function PokemonCard({ url, name }) {
  const [pokeData, setPokeData] = useState({});

  useEffect(()=>{
    const retrieve = async () => {
      res = await fetch(url);
      data = await res.json();
      setPokeData(data);
    }
    retrieve();
  }, []);

  return <>
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        //image={pokeData.sprites.front_default}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* <ul>
            {pokeData.abilities.map((a)=> <>
            <li>{a}</li>
            </>)}
          </ul> */}
        </Typography>
      </CardContent>
    </Card>
  </>
}

export { PokemonCard };
