import React from "react";
import styled from "styled-components";

const Card = ({ onClick, pokemon }) => {
    return(
        <CardWrapper onClick={onClick}>
            <img src={pokemon.src} alt={pokemon.name} width="400px"></img>
            <p>{pokemon.name}</p>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    margin: 5px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.secondaryColor};
    max-width: 300px;
    border-radius: 10px;
    & img{
        width: 300px;
        border-radius: 10px;
    }
    & p{
        text-align: center;
    }
`;

export default Card;