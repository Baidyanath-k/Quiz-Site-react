import React from 'react';

const Options = ({op,selectCorrectAns}) => {
    // console.log(op)
    return (
        <div>
            <p onClick={()=>selectCorrectAns(op)}>{op}</p>
        </div>
    );
};

export default Options;