import axios from "axios";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const randomNumberGenerator = (arr) => {
    let generatedNumber = Math.floor(Math.random() * 490 + 1);
    while(arr.includes(generatedNumber)){
        generatedNumber = Math.floor(Math.random() * 490 + 1);
    }
    return generatedNumber;
};

export const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
};

export const fetchPokemons = async (level) => {
    let pokemons = [];
    let numbers = []; 
    
    for(let i = 0; i < level + 5; i++){
        const number = randomNumberGenerator(numbers);
        numbers.push(number);
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${number}`
        const pokemon = await axios.get(pokemonUrl);
        const id = pokemon.data.id;
        const name = capitalizeFirstLetter(pokemon.data.name);
        const src = pokemon.data.sprites.front_default;
        pokemons.push({ src, name, id });
    }

    return pokemons;
};