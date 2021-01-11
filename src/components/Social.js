import React from 'react';

const Social = (props) => {
    if(props.mailing === false) {
       return (
        <div className='socialLinks'>
            <ul>
                <li><a href='https://twitter.com/thedoughshack'>Twitter</a></li>
                <li><a href='https://www.facebook.com/thedoughshackuk'>Facebook</a></li>
                <li><a href='https://www.instagram.com/thedoughshack/'>Instagram</a></li>
            </ul>
        </div>
       ); 
    } else {
        return (
        <div className='socialLinks'>
            <ul>
                <li><a href='https://twitter.com/thedoughshack'>Twitter</a></li>
                <li><a href='https://www.facebook.com/thedoughshackuk'>Facebook</a></li>
                <li><a href='https://www.instagram.com/thedoughshack/'>Instagram</a></li>
            </ul>
            <p>© 2020 <a href="/">The Dough Shack</a> | <a href='mailto:conor@thedoughshack.co.uk'>Email Us</a></p>
        </div>
        );
    }
}

export default Social;