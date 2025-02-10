fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
  .then((response) => response.json())
  .then((data) => {
    const cardList = document.querySelector("#pokemon-container");
    data.results.map((card) => {
      const cardItem = document.createElement("div");
      const cardImg = document.createElement("img");
      cardItem.textContent = card.name;
      cardImg.src = card["url"];
      cardItem.classList.add(
        "card-item",
        "m-auto",
        "flex",
        "flex-col",
        "items-center",
        "bg-green-200",
        "p-5",
        "text-center",
        "font-bold",
        "text-lg",
        "uppercase"
      );
      cardImg.classList.add("card-img");
      cardImg.style.width = "200px";
      cardImg.style.height = "200px";
      fetch(card.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          const imgSrc = pokemonData.sprites.front_default;
          cardImg.src = imgSrc;
          cardList.appendChild(cardItem);
          cardItem.appendChild(cardImg);
        });
    });
  })
  .catch((error) => console.error("Error fetching Pokémon:", error));
