import axios from "axios";

export const shuffleArray = (arr) => {
    let sortedArr = [...arr].sort(() => Math.random() - 0.5);
    for(let i = 0; i < arr.length; i = i + 2){
        if(arr[i] == sortedArr[i]){
            if(i !== sortedArr.length - 1){
                const temp = sortedArr[i];
                sortedArr[i] = sortedArr[i + 1];
                sortedArr[i + 1] = temp;
            }else{
                const temp = sortedArr[i];
                sortedArr[i] = sortedArr[i - 1];
                sortedArr[i - 1] = temp;
            }
        }
    }
    return sortedArr;
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

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const randomNumberGenerator = (arr) => {
    let generatedNumber = Math.floor(Math.random() * 490 + 1);
    while(arr.includes(generatedNumber)){
        generatedNumber = Math.floor(Math.random() * 490 + 1);
    }
    return generatedNumber;
};