import { PokemonProvider } from '../../contexts/pokemon';
import { Header } from '../Header';
import { Paginacao } from '../Paginacao/Paginacao';
import { Pokemons } from '../Pokemons';

export const PokemonPage = () => {
  return (
    <PokemonProvider>
      <Header />

      <Paginacao />

      <Pokemons />
    </PokemonProvider>
  );
};
