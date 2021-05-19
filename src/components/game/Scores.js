import React, { useState, useEffect } from "react";
import styled from "styled-components"

const Scores = ({ level, progress }) => {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    useEffect(() => {
        if(progress == 0){
            setScore(0);
        }else{
            const newScore = score + 5;
            if(highscore < newScore){
                setHighscore(newScore);
            }
            setScore(newScore);
        }
    }, [progress]);

    useEffect(() => {
        if(level == 1){
            setScore(0);
            setHighscore(0);
        }else{
            const newScore = score + 15;
            if(highscore < newScore){
                setHighscore(newScore);
            }
            setScore(newScore);
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