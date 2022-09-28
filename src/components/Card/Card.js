import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';

const Card = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div>
            {
                activities.map(activity =>
                    <Activities activity={activity}></Activities>)

            }
        </div>
    );
};

export default Card;