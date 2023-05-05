import React from 'react';
import {useState, useEffect} from 'react';
import {Typography, Card, Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useNavigate} from 'react-router-dom';

function PokemonCard({ url, name, list}) {
  const [pokeData, setPokeData] = useState();
  const navigate = useNavigate();
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
      width: 300,
      height: 400,
      m: 1
      }}> 
      <CardMedia
        sx={{ height: 200 }}
        image={pokeData.sprites.front_default}
        title={name}
      />
      <CardContent>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Typography gutterBottom variant="h5" component="div" className="poke-title" onClick={()=>{navigate(`/${name}`)}}>
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" color="text.secondary">
            {pokeData.id}
          </Typography>
        </Box>
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
