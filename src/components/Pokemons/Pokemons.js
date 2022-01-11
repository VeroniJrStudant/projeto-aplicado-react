import React, { useEffect, useRef, useState } from 'react';

import { fetchAllPokemons } from '../../services/pokemons-service';

import { Card } from '../Card';
import { Header } from '../Header';

import styles from './Pokemons.module.css';

export const Pokemons = () => {
  const pokemons = useRef([]);
  const elementoTopo = useRef();

  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [termoBusca, setTermoBusca] = useState('');

  const qtdMaximaPaginas = Math.ceil(pokemons.current.length / 40);

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

  const handlePagAnterior = async () => {
    setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
  };

  const handleProxPagina = () => {
    setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
  };

  const handleVoltarAoTopo = () => {
    elementoTopo.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div ref={elementoTopo} className={styles.container}>
        <input
          onChange={(event) => {
            setTermoBusca(event.target.value);
          }}
          className={styles.searchInput}
          type="text"
          placeholder="Digite o nome do pokemon"
        />

        <div className={styles.sectionTitle}>
          <h1 className={styles.pageTitle}>Todos os pokemons ({pokemonsFiltrados.length})</h1>
          <div className={styles.pagination}>
            <button className={styles.pageButton} onClick={handlePagAnterior}>
              {`<`}
            </button>
            <span>
              Página {pagina} de {qtdMaximaPaginas}
            </span>
            <button className={styles.pageButton} onClick={handleProxPagina}>
              {`>`}
            </button>
          </div>
        </div>

        <div className={styles.cardGrid}>
          {pokemonsFiltrados.length === 0
            ? 'Nenhum pokemon encontrado'
            : pokemonsFiltrados.map((pokemon) => <Card pokemon={pokemon} />)}
        </div>
        <button onClick={handleVoltarAoTopo}>Voltar para o topo</button>
      </div>
    </>
  );
};

const filtrarListaPorTermoDeBusca = (lista, termo) => {
  return lista.filter((pokemon) => {
    return new RegExp(termo, 'ig').test(pokemon.name);
  });
};

const filtrarListaPorPagina = (lista, pagina) => {
  const QTD_ITENS = 40;
  return lista.slice(pagina * QTD_ITENS - QTD_ITENS, pagina * QTD_ITENS);
};
