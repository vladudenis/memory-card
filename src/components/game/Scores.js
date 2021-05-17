import React, { useState, useEffect } from "react";
import styled from "styled-components"

const Scores = ({ level, progress }) => {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    useEffect(() => {
        setScore(score + 5);
        if(highscore < score){
            setHighscore(score);
        }
    }, [progress]);

    useEffect(() => {
        setScore(score + 10);
        if(highscore < score){
            setHighscore(score);
        }
    }, [level]);

    return(
       <ScoresWrapper>
            <span>
                <h3>Level {level}</h3>
            </span>
            <span>
                <p>Highscore: {highscore}</p>
                <p>Score: {score}</p>
            </span>
       </ScoresWrapper>
    );
};

const ScoresWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default Scores;

{/* <h3>Notice: This is a fan project</h3>
                <p>Memory Card Game was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.</p> */}