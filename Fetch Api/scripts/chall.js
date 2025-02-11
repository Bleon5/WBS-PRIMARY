let counter = 1;
const maxRequests = 150;
const pokemonFetch = function () {
  fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemonName = data.name;
      const pokemonId = data.id;
      console.log(pokemonName, pokemonId);
      counter++;

      if (counter > maxRequests) {
        console.log("Reached the limit of OG Pokemon !");
        clearInterval(intervalId);
      }
    })
    .catch((error) => {
      console.error(`Error fetching Pokémon: ${error}`);
      clearInterval(intervalId); // Stop fetching if an error occurs
    });
};

const intervalId = setInterval(pokemonFetch, 1000);
