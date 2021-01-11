import React from 'react';

const Sale = (props) => {
    return (
        props.data.length 
        ?
            <div className='textContent'>
                <h1>Thank you for your order</h1>
                <p>Order pizzas/ total will sit here</p>
            </div>
        :
            <div className='textContent'>
                <h1>You have not made an order</h1>
                <p>Please visit our <a href='/pizza'>menu</a> to place an order.</p>
            </div>
    );
};

export default Sale;