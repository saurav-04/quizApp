import React,{useState , useContext} from "react";
import { QuizContext } from "../Helpers/Context";
import { questions } from "../Helpers/QuestionBank";

function Quiz (){
   const {score , setScore , setGameState } = useContext(QuizContext)

   const [curQuestion,setCurQuestion] = useState(0)
   const [optionChosen,setOptionChosen] = useState('')

   const nextQuestion = () => {
      if (optionChosen === questions[curQuestion].Answer) {
         setScore(score + 1);
      }
      setCurQuestion(curQuestion + 1);
   }

   const finishQuiz = () =>{
      if (optionChosen === questions[curQuestion].Answer) {
         setScore(score + 1);
      }
      setGameState("endscreen")
   }

   return(
   <div className="Quiz">
      <div className="header">
      <h2>
         {questions[curQuestion].prompt}
      </h2>
      </div>
      <div className="options">


      <label>
         <input 
         type="radio"  
         id='OptionA' 
         value={questions[curQuestion].OptionA} 
         checked={optionChosen === 'A'} 
         onChange={() =>setOptionChosen('A')}
         />
         {questions[curQuestion].OptionA}
      </label>

      <label>
         <input 
         type="radio"  
         id='OptionB' 
         value={questions[curQuestion].OptionB} 
         checked={optionChosen === 'B'} 
         onChange={() =>setOptionChosen('B')}
         />
         {questions[curQuestion].OptionB}
      </label>

      <label>
         <input 
         type="radio"  
         id='OptionC' 
         value={questions[curQuestion].OptionC} 
         checked={optionChosen === 'C'} 
         onChange={() =>setOptionChosen('C')}
         />
         {questions[curQuestion].OptionC}
      </label>

      <label>
         <input 
         type="radio"  
         id='OptionD' 
         value={questions[curQuestion].OptionD} 
         checked={optionChosen === 'D'} 
         onChange={() =>setOptionChosen('D')}
         />
         {questions[curQuestion].OptionD}
      </label>

      </div>
      
      {curQuestion === questions.length -1  ? (
         <button onClick={finishQuiz} >Finish Quiz</button>
      ) : (
         <button onClick= {nextQuestion}>Next Question</button>)}
    
    </div>
   );
};

export default Quiz;