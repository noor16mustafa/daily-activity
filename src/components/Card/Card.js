import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Sidebar from '../Sidebar/Sidebar';
import './Card.css'

const Card = () => {
    const [activities, setActivities] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])


    const handleAddBtn = (selectedActivity) => {
        const newArr = [...info, selectedActivity]
        //console.log(newArr);
        setInfo(newArr);
    }
    return (
        <div className='activities'>
            <div className="activity-container">
                {
                    activities.map(activity =>
                        <Activities
                            activity={activity}
                            key={activity.id}
                            handleAddBtn={handleAddBtn}></Activities>)

                }
            </div>
            <div className="sidebar">
                <Sidebar selectedActivity={info}></Sidebar>
            </div>

        </div>
    );
};

export default Card;