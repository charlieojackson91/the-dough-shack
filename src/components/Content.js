import React from 'react';

const Content = (props) => {
    return (
            props.vans 
            ?
                <div className='textContent'>
                    <h1>{props.title} </h1>
                    <p>{props.text}</p>
                    <p>We have some vans out today!</p>
                    <div className='vanCont'>
                    {
                      props.vans.map(van => 
                        <div className='vanLoc'>{van.vanLocation} ({van.hours})</div>
                        )
                    }
                    </div>
                </div>
            :
            <div className='textContent'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
    );
};

export default Content;