import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quiz=useLoaderData();
    const quizData=quiz.data;

    return (
        <div className='main-home'>
            
            <div className="header-home">
                <h2>The test is not official, it's just a nice way to see how much you know, or don't know, about React, Javascript, CSS and Git.</h2>
            </div>

            <div className="home-details">
                {
                    quizData.map(qz=> <Quiz
                        key={qz.id}
                        qz={qz}
                       
                    ></Quiz>)
                }
            </div>
            
        </div>
    );
};

export default Home;