import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Sidebar from '../Sidebar/Sidebar';
import './Card.css'

const Card = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddBtn = (selectedActivity) => {
        const newArr = [...time, selectedActivity]
        //console.log(newArr);
        setTime(newArr);
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
                <Sidebar selectedActivity={time}></Sidebar>
            </div>

        </div>
    );
};

export default Card;