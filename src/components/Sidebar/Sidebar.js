import { useState } from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    const [time, setTime] = useState(0);

    const { selectedActivity } = props;

    let total = 0;
    for (const activity of selectedActivity) {
        total = total + activity.time;
    }


    return (
        <div className='sidebar-container'>
            <div className="my-info">
                <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png" alt="" />
                <div className="my-details">
                    <h3> Dilshad Noor Mustafa</h3>
                    <h4> Completed B.SC in CSE</h4>
                </div>

            </div>
            <div>
                <h2>Add A Break</h2>
                <div className="break-btn">
                    <button onClick={() => setTime(10)} className='btn'><span>10</span>m</button>
                    <button onClick={() => setTime(20)} className='btn'><span>20</span>m</button>
                    <button onClick={() => setTime(30)} className='btn'><span>30</span>m</button>
                    <button onClick={() => setTime(40)} className='btn'><span>40</span>m</button>
                </div>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <div className="exercise">
                    <div className="exercise-text">
                        <p>Exercise time</p>
                    </div>
                    <div className="exercise-time"><p>{total}  minute</p></div>
                </div>
            </div>
            <div>

                <div className="break-container">
                    <div className="break-text">
                        <p>Break Time</p>
                    </div>
                    <div className="break-time"><p>{time} minute</p></div>
                </div>
            </div>
            <div className='activity-completed'>
                <button className='completed-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Sidebar;
