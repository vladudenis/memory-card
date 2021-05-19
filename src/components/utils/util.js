import axios from "axios";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 500);
};

export const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

export const fetchPokemons = async (level) => {
    const pokemons = [];
    
    for(let i = 0; i < level + 5; i++){
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i+1+randomNumberGenerator()}`
        const pokemon = await axios.get(pokemonUrl);
        const id = pokemon.data.id;
        const name = capitalizeFirstLetter(pokemon.data.name);
        const src = pokemon.data.sprites.front_default;
        pokemons.push({ src, name, id });
    }

    return pokemons;
};