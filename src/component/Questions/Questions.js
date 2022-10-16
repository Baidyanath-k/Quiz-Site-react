import React from 'react';
import Options from '../Option/Options';
import { FaEye } from "react-icons/fa";
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Questions = ({qs}) => {
    
    const{question,options,correctAnswer}=qs;
    // console.log(correctAnswer);
    const showCorrectAns=()=>{
        toast.info(correctAnswer,{
            position: "top-center",
        })
    }

    const selectCorrectAns=(op)=>{
        if(op===correctAnswer){
            toast.success("Right Answer",{
                position: "top-center",
                closeOnClick: false,
                autoClose: 1000
            })
        }else{
            toast.error("Wrong Answer",{
                position: "top-center",
                autoClose: 1000
            })
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
            
            
            <ToastContainer />
        </div>
    );
};

export default Questions;