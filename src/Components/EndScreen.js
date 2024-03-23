import React from "react";
import { useContext } from "react";
import { questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

function EndScreen(){
    const {score , setScore, setGameState} = useContext(QuizContext)
    
    const quizRestart = () => {
        setScore(0)
        setGameState("menu")
    }
    

    return(
        <div className="Endscreen">
            <h1>Quiz finished!!</h1>

            {score === questions.length ? (
                <p>Perfect Score!! <br/> Score:{score}/{questions.length}</p>
            ):(
            <p>Score:{score}/{questions.length}</p>
            )}
            <button onClick={quizRestart}> Restart! </button> 
        </div>
    );
};

export default EndScreen;