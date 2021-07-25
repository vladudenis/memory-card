import React, { useState, useEffect } from "react";
import Card from "./Card";
import { fetchPokemons, shuffleArray } from "../utils/util";
import styled from "styled-components"
import { trackPromise } from 'react-promise-tracker'

const CardCollection = ({ onClick, level, progress }) => {
    const [cardSequence, setCardSequence] = useState([]);

    useEffect(() => {
        trackPromise(
            fetchPokemons(level).then((pokemons) =>
                setCardSequence(pokemons)
        ));
        console.log(cardSequence);
    }, [level])

    useEffect(() => {
        setCardSequence(shuffleArray(cardSequence));
        console.log("Shuffled");
    }, [progress]);

    return(
        <CardCollectionWrapper>
            {cardSequence.map((pokemon) => {
                return(
                    <Card key={pokemon.id} onClick={onClick} pokemon={pokemon} />
                );
            })}
        </CardCollectionWrapper>
    );
};

const CardCollectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;
`;

export default CardCollection;