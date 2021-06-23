import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import styled from "styled-components"

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

export const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress &&
    <SpinnerWrapper>
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </SpinnerWrapper>
  );
}

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100;
`;