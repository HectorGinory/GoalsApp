import React from 'react';
import './link.css'

const Link = ({ children, text, href }) => {
    return (
        <div>
            <a href={href} className='list'>
                {children}
                <span className=''>{text}</span>
            </a>
        </div>
    );
}

export default Link;
