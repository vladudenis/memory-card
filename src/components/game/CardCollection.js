import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useMyFetch } from "./useFetch";
import styled from "styled-components"
//uuidv4

const CardCollection = ({ onClick, level, progress }) => {
    const champions = useMyFetch(level);
    const [cardSequence, setCardSequence] = useState(champions);

    useEffect(() => {
        const newCardSequence = cardSequence; //shuffle here
        setCardSequence(newCardSequence);
    }, [progress]);

    //add conditional return to incorporate loading and error

    return(
        <CardCollectionWrapper>
            {champions.map((champion) => {
                return(
                    <Card onClick={onClick} champion={champion} />
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