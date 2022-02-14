'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
}

async function fetchAndPopulatePokemons() {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon/');

  clearAllElements();

  const pokemonSelect = document.createElement('select');

  document.body.appendChild(pokemonSelect);

  if (data.results) {
    data.results.forEach((pokemon) => {
      const pokemonOption = document.createElement('option');
      pokemonOption.textContent = pokemon.name;
      pokemonOption.value = pokemon.url;
      pokemonSelect.appendChild(pokemonOption);
    });
  }

  pokemonSelect.addEventListener('change', showPokemonImage);
}

function clearAllElements() {
  const elementsToRemove = document.querySelectorAll('select, img');
  elementsToRemove.forEach((element) => {
    document.body.removeChild(element);
  });
}

async function showPokemonImage(event) {
  const imageUrl = await fetchImage(event.target.value);
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  document.body.appendChild(imageElement);
}

async function fetchImage(url) {
  const { sprites } = await fetchData(url);
  return sprites.front_default;
}

function main() {
  const getPokemonButton = document.createElement('button');
  getPokemonButton.type = 'button';
  getPokemonButton.textContent = 'Get Pokemon';
  document.body.appendChild(getPokemonButton);

  getPokemonButton.addEventListener('click', () => {
    fetchAndPopulatePokemons();
  });
}

window.addEventListener('load', main);
