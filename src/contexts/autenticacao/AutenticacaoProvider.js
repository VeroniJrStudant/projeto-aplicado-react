import { useState } from 'react';
import { AutenticacaoContext } from './AutenticacaoContext';

export const AutenticacaoProvider = ({ children }) => {
  const [nome, setNome] = useState('Thais');

  return <AutenticacaoContext.Provider value={{ nome, setNome }}>{children}</AutenticacaoContext.Provider>;
};
