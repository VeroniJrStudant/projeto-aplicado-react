export const filtrarListaPorTermoDeBusca = (lista, termo) => {
  return lista.filter((pokemon) => {
    return new RegExp(termo, 'ig').test(pokemon.name);
  });
};

export const filtrarListaPorPagina = (lista, pagina) => {
  const QTD_ITENS = 40;
  return lista.slice(pagina * QTD_ITENS - QTD_ITENS, pagina * QTD_ITENS);
};
