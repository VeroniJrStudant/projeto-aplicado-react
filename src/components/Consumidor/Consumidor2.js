import { useAutenticacao } from '../../contexts/autenticacao';

export const Consumidor2 = () => {
  const { setNome } = useAutenticacao();

  return <button onClick={() => setNome('João')}>Mudar Nome</button>;
};
