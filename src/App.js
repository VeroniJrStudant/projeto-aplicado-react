import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

// import { Consumidor, Consumidor2 } from './components/Consumidor';
// import { AutenticacaoProvider } from './contexts/autenticacao';
import { Pokemons } from './components/Pokemons';
import { Paginacao } from './components/Paginacao/Paginacao';
import { PokemonProvider } from './contexts/pokemon';
import { Router } from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme } from './themes/themes';

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
         <GlobalStyle/>
         <BrowserRouter>
          <Router/>
         </BrowserRouter> 
      </ThemeProvider>
    </>
  );
}

export default App;
