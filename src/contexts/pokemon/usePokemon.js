import { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

export const usePokemon = () => useContext(PokemonContext);
