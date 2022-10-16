import React from 'react';
import './Quiz.css';

const Quiz = ({qz}) => {
    const {logo,name,total}=qz;
    console.log(qz)
    return (
        <div className='quiz-display'>
            <div className="quiz-img">
                <img src={logo} alt="" />
            </div>
            <div className="quiz-information">
                <h4>Name: {name}</h4>
                <h4>Total: {total}</h4>
            </div>
            <div className="quiz-button">
                <button>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;