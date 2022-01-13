import { useAutenticacao } from '../../contexts/autenticacao';

export const Consumidor = () => {
  const { nome } = useAutenticacao();

  return <p>{`Consumidor autenticado: ${nome}`}</p>;
};
