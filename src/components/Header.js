import React from 'react';
import {Link} from "react-router-dom";

const Header = ({preoders}) => {
    return(
        <div className='navCont'>
            <div className='navigation'>
                <ul>
                    <li><Link to='/the-dough-shack/'>Hello</Link></li>
                    <li><Link to='/the-dough-shack/pizza'>Pizza</Link></li>
                    <li><Link to='/the-dough-shack/about-us'>About us</Link></li>
                    <li id='preOrder'><Link to='/the-dough-shack/order'>Pre order</Link><span id='orderCount'>{preoders.length}</span></li>
                    {/* <li><Link to='/confirmation'>confirmation</Link></li> */}
                </ul>
            </div>
        </div>
    )
};

export default Header;