export const TYPES = {
  ALTERAR_PRECO: 'ALTERAR_PRECO',
  ALTERAR_DESCONTO: 'ALTERAR_DESCONTO',
};

export const initialValue = {
  descricao: 'Livro JavaScript',
  preco: 50.0,
  valorComDesconto: 50.0,
  desconto: 0,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.ALTERAR_PRECO:
      return { ...state, preco: payload.preco, valorComDesconto: payload.preco - state.desconto };
    case TYPES.ALTERAR_DESCONTO:
      return { ...state, desconto: payload.desconto, valorComDesconto: state.preco - payload.desconto };
    default:
      return state;
  }
};
