import React, { useState, useEffect } from "react";
import Card from "./Card";
import { fetchPokemons, shuffleArray } from "../utils/util";
import styled from "styled-components"
//uuidv4

const CardCollection = ({ onClick, level, progress }) => {
    const [cardSequence, setCardSequence] = useState([]);

    useEffect(() => {
        fetchPokemons(level).then((pokemons) =>
          setCardSequence(shuffleArray(pokemons))
        )
      }, [level])

    useEffect(() => {
        setCardSequence(shuffleArray(cardSequence));
    }, [progress]);

    //add conditional return to incorporate loading and error

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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    margin: 20px 0;
`;

export default CardCollection;