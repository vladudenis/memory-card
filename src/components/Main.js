import React, { useState } from "react";
import CardCollection from "./game/CardCollection";
import Scores from "./game/Scores";
import styled from "styled-components"

const Main = () => {
    const [level, setLevel] = useState(1);
    const [progress, setProgress] = useState(0);

    const madeProgress = () => {
        setProgress(progress + 1);
        if(progress == level + 4){ //level 1 has 5 cards
            setLevel(level + 1);
        }
    }

    return(
        <MainWrapper>
            <Scores level={level} progress={progress} />
            <CardCollection onClick={madeProgress} level={level} progress={progress} />
        </MainWrapper>
    );
};

const MainWrapper = styled.main`
    display: grid;
    justify-content: center;
    margin: 20px;
`;

export default Main;