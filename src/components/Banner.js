import React from 'react';

const Banner = (props) => {
    if (props.text){
        return (
            <div className='banner'>
                <img src='https://pbs.twimg.com/profile_images/761241077735186432/1aWq4FFr_200x200.jpg' id='logo' alt='the dough shack logo'></img>
                <img src={props.img} className='bannerImg' alt={props.alt}></img>
                <div className='bannerBox'>
                    <p>{props.text}</p>
                    
                </div>
                <div className='countDown'>
                    <span>Time left to preorder:</span><br></br>
                    { 
                        props.timer
                    &&
                        <span>{props.timer.hours}h {props.timer.minutes}m {props.timer.seconds}s</span> 
                    }
                </div>
            </div>
        );
    } else if (props.logo === false) {
        return (
            <div className='banner'>
                <img src={props.img} className='bannerImg' alt={props.alt}></img>
            </div>
        );
    } else {
        return (
            <div className='banner'>
                <img src='https://pbs.twimg.com/profile_images/761241077735186432/1aWq4FFr_200x200.jpg' id='logo' alt='the dough shack logo'></img>
                <img src={props.img} className='bannerImg' alt={props.alt}></img>
            </div>
        );
    }  
};

export default Banner;