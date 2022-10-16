import React from 'react';
import './Static.css';

const Static = ({st}) => {
    console.log(st);
    const {name,total}=st;
    
    return (
        <div className='static-item'>
            <h2>Quiz name: {name}</h2>
            <h4>Total Quiz: {total}</h4>
        </div>
    );
};

export default Static;