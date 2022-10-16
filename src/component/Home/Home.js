import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quiz=useLoaderData();
    const quizData=quiz.data;
    return (
        <div>
            {
                quizData.map(qz=> <Quiz
                    key={qz.id}
                    qz={qz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;