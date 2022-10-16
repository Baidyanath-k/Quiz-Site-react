import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetail = () => {
    const quizDetail=useLoaderData();
    const{name,questions}=quizDetail.data
    // console.log(questions)
    return (
        <div>
            <h2>Quiz of {name}</h2>
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