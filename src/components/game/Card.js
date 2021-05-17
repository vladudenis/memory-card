import React from "react";
import styled from "styled-components";

const Card = ({ onClick, champion }) => {

    return(
        <CardWrapper onClick={onClick}>
            <img src={champion.src} alt={champion.name} width="400px"></img>
            <p>{champion.name}</p>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
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