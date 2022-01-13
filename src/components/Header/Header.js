import { usePokemon } from '../../contexts/pokemon';
import styles from './Header.module.css';

export const Header = () => {
  const { setTermoBusca } = usePokemon();

  return (
    <div className={styles.container}>
      <input
        onChange={(event) => {
          setTermoBusca(event.target.value);
        }}
        className={styles.searchInput}
        type="text"
        placeholder="Digite o nome do pokemon"
      />
    </div>
  );
};
