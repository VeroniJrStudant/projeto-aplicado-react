export const fetchAllPokemons = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_URL, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_HOST,
        'x-rapidapi-key': process.env.REACT_APP_KEY,
      },
    });
    const listaPoke = await response.json();
    return listaPoke;
  } catch (erro) {
    console.error(erro.message);
  }
};
