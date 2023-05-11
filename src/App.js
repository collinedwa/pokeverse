import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { PokemonDetailsExtended } from './routes/PokemonDetailsExtended';
import { FavoritesProvider } from './FavoritesProvider';
import { Favorites } from './routes/Favorites';


function App() {

  routes = [
    {path: "/", element: <Home/>},
    {path: "/:name", element: <PokemonDetailsExtended/>},
    {path: "/favorites", element: <Favorites/>}
  ];

  router = createBrowserRouter(routes);
  
  return (
    <FavoritesProvider>
    <RouterProvider router={router}/>
    </FavoritesProvider>
  );
}

export { App };
