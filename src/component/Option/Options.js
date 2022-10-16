import React from 'react';
import './Options.css';

const Options = ({op,selectCorrectAns}) => {
    
    return (
        <div className='options'>
            <p onClick={()=>selectCorrectAns(op)}>{op}</p>
        </div>
    );
};

export default Options;