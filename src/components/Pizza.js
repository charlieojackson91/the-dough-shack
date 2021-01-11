import React from 'react';

const Pizza = (props) => {
    return (
        <div className='pizzaCont'>
            <div className='menuCols'>
                <h4>{props.name}</h4>
                <div>
                <span>£{props.price}</span>
	                <button
	                	onClick={props.addPreoder}
                        style={{marginRight: '10px'}}
                        className='orderBtn'
	                >
	                	add to order
	                </button>
                	
                </div>
            </div>
            <p>{props.ingredients}</p>
        </div>
    );
};

export default Pizza;