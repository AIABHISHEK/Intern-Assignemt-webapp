import React from 'react';
import './Button.css'
const Button = (props) => { 
    return (
        <div>
            <button className='search-type-btn' onClick={props.clickHandler}>{props.children}</button>
        </div>
        
    )
}

export default Button;