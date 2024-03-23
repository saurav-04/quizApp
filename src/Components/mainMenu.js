import React,{useContext,} from "react";
import { QuizContext } from "../Helpers/Context";

function MainMenu() {
    const {setGameState} = useContext (QuizContext)
   return(
    <div className="Menu">
    <button  
      onClick={()=>{
        setGameState("quiz")
        }
      }
    >
     Start quiz
    </button>
    </div>
   );
};
export default MainMenu;