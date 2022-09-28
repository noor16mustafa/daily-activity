import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-icon'>
                <img src="https://cdn4.iconfinder.com/data/icons/concentration-9/64/time-wisely-management-daily-routine-128.png" alt="" />
            </div>
            <div className='header-text'>

                <h2>My Daily Activity</h2>
            </div>

        </div>
    );
};

export default Header;