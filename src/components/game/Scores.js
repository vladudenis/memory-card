import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Scores = ({ level, progress }) => {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    useEffect(() => { //+5 score on every correct card click
        if(progress == 0){
            setScore(0);
            const lastHighscore = localStorage.getItem("highscore");
            if(lastHighscore){
                setHighscore(lastHighscore);
            }else{
                setHighscore(0);
            }
        }else{
            const newScore = score + 5;
            if(highscore < newScore){
                setHighscore(newScore);
                localStorage.setItem("highscore", newScore);
            }
            setScore(newScore);
        }
    }, [progress]);

    useEffect(() => { //+15 score on every level up
        if(level == 1){
            setScore(0);
            const lastHighscore = localStorage.getItem("highscore");
            if(lastHighscore){
                setHighscore(lastHighscore);
            }else{
                setHighscore(0);
            }
        }else{
            const newScore = score + 15;
            if(highscore < newScore){
                setHighscore(newScore);
                localStorage.setItem("highscore", newScore);
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