import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { PokemonDetailsExtended } from './routes/PokemonDetailsExtended';


function App() {

  routes = [
    {path: "/", element: <Home/>},
    {path: "/:name", element: <PokemonDetailsExtended/>}
  ];

  router = createBrowserRouter(routes);
  
  return (
    <RouterProvider router={router}/>
  );
}

export { App };
