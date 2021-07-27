import React, { useState } from "react";
import CardCollection from "./game/CardCollection";
import Scores from "./game/Scores";
import styled from "styled-components"
import LoadingIndicator from "./utils/LoadingSpinner";

const Main = () => {
    const [level, setLevel] = useState(1);
    const [progress, setProgress] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    //maybe save the array of cards on level up to avoid semi-duplicate rounds

    const madeProgress = (e) => {
        const cardName = e.target.parentNode.lastChild.textContent;
        if(clickedCards.includes(cardName)){
            setLevel(1);
            setProgress(0);
            setClickedCards([]);
        }else{
            setClickedCards((prevState) => [...prevState, cardName]);
            const currentProgress = progress + 1;
            setProgress(currentProgress);
            console.log("Progress Made", currentProgress + "/" + (level + 5));
            if(currentProgress == level + 5){ //level one has a set of 6 cards
                setLevel(level + 1);
                setProgress(0);
                setClickedCards([]);
            }
        }
    }

    return(
        <MainWrapper>
            <Scores level={level} progress={progress} />
            <LoadingIndicator/>
            <CardCollection onClick={madeProgress} level={level} progress={progress} />
        </MainWrapper>
    );
};

const MainWrapper = styled.main`
    min-height: 90vh;
    display: grid;
    justify-content: center;
    margin: 20px;
`;

export default Main;