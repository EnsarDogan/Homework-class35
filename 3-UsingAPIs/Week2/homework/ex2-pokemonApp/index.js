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
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch!`);
  }
  return response.json();
}

async function fetchAndPopulatePokemons() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon/');
    const selectElement = document.createElement('select');
    document.body.appendChild(selectElement);

    if (data.results) {
      data.results.forEach((pokemon) => {
        const optionElement = document.createElement('option');
        optionElement.textContent = pokemon.name;
        optionElement.value = pokemon.url;
        selectElement.appendChild(optionElement);
      });
    }

    selectElement.addEventListener('change', fetchImage);
  } catch (err) {
    console.error(err);
  }
}

async function fetchImage(event) {
  try {
    const data = await fetchData(event.target.value);
    const imageUrl = data.sprites.front_default;

    let imageElement = document.querySelector('img');
    if (!imageElement) {
      imageElement = document.createElement('img');
      document.body.appendChild(imageElement);
    }
    imageElement.src = imageUrl;
    imageElement.alt = data.name;
    document.body.appendChild(imageElement);
  } catch (err) {
    console.error(err);
  }
}

function main() {
  const getPokemonButton = document.createElement('button');
  getPokemonButton.type = 'button';
  getPokemonButton.textContent = 'Get Pokemon';
  document.body.appendChild(getPokemonButton);

  getPokemonButton.addEventListener('click', () => {
    fetchAndPopulatePokemons();
    getPokemonButton.disabled = true;
  });
}

window.addEventListener('load', main);
