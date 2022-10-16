import React from 'react';
import Options from '../Option/Options';
import { FaEye } from "react-icons/fa";
import './Questions.css';


const Questions = ({qs}) => {
    
    const{question,options,correctAnswer}=qs;
    // console.log(correctAnswer);
    const showCorrectAns=()=>{
        alert(correctAnswer)
    }

    const selectCorrectAns=(op)=>{
        if(op===correctAnswer){
            alert("Right")
        }else{
            alert("This is rong")
        }
    }
    
    return (
        <div className='main-question-container'>
            <div className="main-question">
                <h2>{question}</h2>
                <button onClick={showCorrectAns}>
                    <FaEye></FaEye>
                </button>
            </div>

            <div className="main-option">

            {
                options.map(op=> <Options 
                        key={op} 
                        op={op}
                        selectCorrectAns={selectCorrectAns}
                    ></Options> )
            }

            </div>
            
            
            
        </div>
    );
};

export default Questions;