import React from 'react';
import './Activities.css'

const Activities = (props) => {
    const { handleAddBtn, activity } = props;
    const { img, description, name, time } = activity;

    return (
        <div className="activity-card">
            <img src={img} alt="" />
            <div className="activity-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>Time requires: {time}min</h4>
            </div>
            <button onClick={() => handleAddBtn(activity)} className='btn-add'><p className='btn-text'>Add To List</p></button>
        </div>
    );
};

export default Activities;