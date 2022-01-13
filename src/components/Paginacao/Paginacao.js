import { usePokemon } from '../../contexts/pokemon';
import styles from '../Pokemons/Pokemons.module.css';

export const Paginacao = () => {
  const { pagina, pokemonsFiltrados, pokemons, setPagina } = usePokemon();
  const qtdMaximaPaginas = Math.ceil(pokemons.current.length / 40);

  const handlePagAnterior = async () => {
    setPagina((pagAtual) => (pagAtual > 1 ? pagAtual - 1 : 1));
  };

  const handleProxPagina = () => {
    setPagina((pagAtual) => (pagAtual >= qtdMaximaPaginas ? qtdMaximaPaginas : pagAtual + 1));
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
};
