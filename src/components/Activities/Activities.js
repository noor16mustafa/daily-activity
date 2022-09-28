import React from 'react';

const Activities = (props) => {
    const { img, description, name, time } = props.activity;

    return (
        <div>
            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>Time requires: {time}</h4>
            </div>
        </div>
    );
};

export default Activities;