import React from 'react';
import Options from '../Option/Options';

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
        <div>
            <h2>{question}</h2>
            {
                options.map(op=> <Options 
                        key={op} 
                        op={op}
                        selectCorrectAns={selectCorrectAns}
                    ></Options> )
            }
            <button onClick={showCorrectAns}>Correct Ans</button>
        </div>
    );
};

export default Questions;