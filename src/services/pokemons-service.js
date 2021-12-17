export const fetchAllPokemons = async () => {
  try {
    const response = await fetch("https://pokedex2.p.rapidapi.com/pokedex/uk", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "pokedex2.p.rapidapi.com",
        "x-rapidapi-key": "6df3122cc9msh5136a8c179643fbp19f3b0jsn5c53098507aa",
      },
    });
    const listaPoke = await response.json();
    return listaPoke;
  } catch (erro) {
    console.error(erro.message);
  }
};
