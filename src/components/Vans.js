import React from 'react';
import Van from './Van';
import Social from './Social';

const Vans = () => {
    return (
        <div className='vans'>
            <h2>Where to find us...</h2>
            <p>Pizza night beckoning? Pre-order on the day from 12pm. Where to find us today.</p>
            <div className='timetable'>
                <p id='today'>Saturday</p>
                <div className='vanLocations'>
                   <Van
                    date         ='Saturday, 19th Sep'
                    time         ='@ 1:00pm - 9pm'
                    addressName  ='VAN 4: POP-UP PIZZERIA @ BYTHEHORNS, WIMBLEDON- 0203 488 3470'
                    streetAddress='By The Horns Brewing Co, 21-27 Summerstown, London SW17 0BQ, UK'/>

                   <Van
                    date         ='Saturday, 19th Sep'
                    time         ='@ 2:00pm - 8.30pm'
                    addressName  ='IMBER COURT SPORTS CLUB CAR PARK- 0203 488 3850'
                    streetAddress='Imber Court Sports Club, Ember Ln, Molesey, East Molesey KT8 0BT, UK'/>

                   <Van
                    date         ='Saturday, 19th Sep'
                    time         ='@ 4:00pm - 8.00pm'
                    addressName  ='OXSHOTT- OXSHOTT VILLAGE SPORTS CLUB 0203 488 2431'
                    streetAddress="Steel's Lane, Steel's Ln, Oxshott, Leatherhead KT22 0RF, UK"/>

                    <Van
                    date         ='Saturday, 19th Sep'
                    time         ='@ 5:00pm - 8.30pm'
                    addressName  ='GIGGS HILL GREEN (THAMES DITTON CRICKET CLUB)- 0203 488 1064'
                    streetAddress="Gigg's Hill Green, Thames Ditton KT7, UK"/>
                    
                </div>
                
                <button className='btn'><a href='./pizza'>Van Menu</a></button>
                <p>Keep posted on where we'll be for specific events</p>
                
                <Social
                mailing={false}/>
            </div>
        </div>
    );
};

export default Vans;