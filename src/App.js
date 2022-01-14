import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

// import { Consumidor, Consumidor2 } from './components/Consumidor';
// import { AutenticacaoProvider } from './contexts/autenticacao';
import { Pokemons } from './components/Pokemons';
import { Paginacao } from './components/Paginacao/Paginacao';
import { PokemonProvider } from './contexts/pokemon';
import { Router } from './routes/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      {/* <PokemonProvider>
        <Header />

        <Paginacao />

        <Pokemons />
      </PokemonProvider> */}

      {/* <AutenticacaoProvider>
     <Consumidor />
       <Consumidor2 />
    </AutenticacaoProvider> */}
    </>
  );
}

export default App;
