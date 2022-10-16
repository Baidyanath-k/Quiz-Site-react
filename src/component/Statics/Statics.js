import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Static from '../Static/Static';
import './Statics.css';

const Statics = () => {
    const statics=useLoaderData();
    
    const staticsData=statics.data;
    // console.log(staticsData);
    return (
        <div className='statics-container'>
            {
                staticsData.map(st=> <Static
                    key={st.id}
                    st={st}
                ></Static>)
            }
        </div>
    );
};

export default Statics;