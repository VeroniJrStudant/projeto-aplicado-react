import React, { useRef } from 'react';
import { usePokemon } from '../../contexts/pokemon';
import { Card } from '../Card';

import styles from './Pokemons.module.css';

export const Pokemons = () => {
  const elementoTopo = useRef();
  const { pokemonsFiltrados } = usePokemon();

  const handleVoltarAoTopo = () => {
    elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={elementoTopo} className={styles.container}>
      <div className={styles.cardGrid}>
        {pokemonsFiltrados.length === 0
          ? 'Nenhum pokemon encontrado'
          : pokemonsFiltrados.map((pokemon) => <Card pokemon={pokemon} />)}
      </div>
      <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
    </div>
  );
};
