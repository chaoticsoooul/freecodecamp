const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")
const pokemonSprite = document.getElementById("pokemon-sprite")
const pokemonName = document.getElementById("pokemon-name")
const pokemonId = document.getElementById("pokemon-id")
const pokemonTypes = document.getElementById("types")
const pokemonweight = document.getElementById("weight")
const pokemonHeight = document.getElementById("height")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("special-attack")
const specialDefense = document.getElementById("special-defense")
const speed = document.getElementById("speed")
const pokemonCard = document.getElementById("pokemon-card")

let url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"

async function fetchPokemonData() {
  const input = searchInput.value.toLowerCase();
  if(!input){
    alert("Please enter a Pokémon name");

    return;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    const {results} = data;

    const names = results.map((item) => item.name);
    const name = names.find((name) => name === input);
    const ids = results.map((item) => item.id);
    const id = ids.find((id) => id == input);

    if(!id && !name) {
      alert("Pokémon not found");
    } else {
      const slug = id || name;

      const pokemonRes = await fetch(url+slug);
      const pokemonData = await pokemonRes.json();
      displayPokemonDetails(pokemonData); 
    }
    
  } catch (error) {
    alert(error.message);
  }
  
}

const displayPokemonDetails = (data) => {
  // clear values
  pokemonTypes.innerHTML = "";

  const {height, id, name, sprites, stats, types, weight} = data;

  // display data
  pokemonSprite.innerHTML = `<img id="sprite" src="${sprites.front_default}"></img>`
  pokemonName.textContent = name;
  pokemonId.textContent = `#${id}`;
  pokemonHeight.textContent = `Height: ${height}`;
  pokemonweight.textContent = `Weight: ${weight}`;
  
  hp.textContent = `${stats[0].base_stat}`
  attack.textContent = `${stats[1].base_stat}`
  defense.textContent = `${stats[2].base_stat}`
  specialAttack.textContent = `${stats[3].base_stat}`
  specialDefense.textContent = `${stats[4].base_stat}`
  speed.textContent = `${stats[5].base_stat}`


  // display types
  for(let i=0; i<types.length; i++){
    pokemonTypes.innerHTML += `<div class="type">${types[i].type.name.toUpperCase()}</div>`
  }


}


searchBtn.addEventListener("click", fetchPokemonData);