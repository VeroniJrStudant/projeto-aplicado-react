import { useContext } from 'react';
import { AutenticacaoContext } from './AutenticacaoContext';

export const useAutenticacao = () => useContext(AutenticacaoContext);
