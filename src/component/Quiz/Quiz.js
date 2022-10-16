import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({qz,quizClickHandle}) => {
    const {id,logo,name,total}=qz;
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
                <button>
                    <Link to={`/Quize/${id}`}>Start Quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default Quiz;

// 