import { useEffect, useRef, useState } from 'react';
import { filtrarListaPorPagina, filtrarListaPorTermoDeBusca } from '../../helper/pokemons';
import { fetchAllPokemons } from '../../services/pokemons-service';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const pokemons = useRef([]);

  useEffect(() => {
    // IIFE Imediately Invoked Function Expression
    (async () => {
      const lista = await fetchAllPokemons();
      pokemons.current = lista;
      setPokemonsFiltrados(filtrarListaPorPagina(pokemons.current, pagina));
    })();
    // :)
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setPokemonsFiltrados(filtrarListaPorTermoDeBusca(pokemons.current, termoBusca));
  }, [termoBusca]);

  useEffect(() => {
    setPokemonsFiltrados(filtrarListaPorPagina(pokemons.current, pagina));
  }, [pagina]);

  return (
    <PokemonContext.Provider value={{ setTermoBusca, pokemons, pokemonsFiltrados, pagina, setPagina }}>
      {children}
    </PokemonContext.Provider>
  );
};
