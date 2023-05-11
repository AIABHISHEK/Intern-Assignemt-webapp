import React from "react";
import './Event.css'
const Event = (props) => { 
    return (
        <div className='event-item'>
                <img src="" alt="icon"/>
            <p>{ props.children }</p>
            </div>
    )
}

export default Event;