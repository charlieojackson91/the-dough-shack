import React from 'react';
import Social from './Social';

const Footer = () => {
    return(
        <footer>
            <div className='footCont'>
                <div className='footerNav'>
                    <ul>
                        <li><a href='/'>Hello</a> |</li>
                        <li><a href='/pizza'>Pizza</a> |</li>
                        <li><a href='/about-us'>About us</a> |</li>
                        <li><a href='/order'>Pre order</a></li>
                    </ul>
                </div>
                <Social/>
            </div>
        </footer>
    );
};

export default Footer;