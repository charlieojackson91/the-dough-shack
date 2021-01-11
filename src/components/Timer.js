import React, {useState,useEffect}  from 'react';

const Timer = () => {

    return (
        <div className='timerCont'>
            <span id='timer'>Time left to order: {countDown.hours}h {countDown.minutes}m {countDown.seconds}s</span>
        </div>
    );
}

export default Timer;