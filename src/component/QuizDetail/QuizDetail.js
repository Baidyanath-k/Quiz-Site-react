import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './QuizDetail.css';

const QuizDetail = () => {
    const quizDetail=useLoaderData();
    const{name,questions}=quizDetail.data
    // console.log(questions)
    return (
        <div className='main-quiz-container'>
            <div className="quiz-container-header">
                <h2>Quiz of {name}</h2>
            </div>
            
            {
                questions.map(qs=> <Questions
                    key={qs.id}
                    qs={qs}
                ></Questions>)
            }
        </div>
    );
};

export default QuizDetail;