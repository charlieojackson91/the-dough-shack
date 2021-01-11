import React from 'react';

const Van = (props) => {
    return (
        <div className='vanLocation'>
            <div className='vanDateTime'>
                <p className='vanDate'>{props.date}</p>
                <p className='vanTime'>{props.time}</p>
            </div>
            <div className='vanAddress'>
                <p className='vanAddressName'>{props.addressName}</p>
                <p className='vanStreetAddress'>{props.streetAddress}</p>
            </div>
        </div>
    );
};

export default Van;