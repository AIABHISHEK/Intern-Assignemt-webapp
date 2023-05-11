import React from 'react';
import './EventContent.css'
const EventContent = () => { 
    return (
        <div className='event-content-card'>
            {/* title */}
            <h1 className='event-title'>Event Content</h1>
            {/* event image */}
            <div className='event-img'>
                {/* <p > Here Event Image</p> */}
                <img src="" alt="here is event image"/>
            </div>
            <div className='event-description'>
                {/* event description */}
                <ul className='event-description-list'>
                    <li className='event-description-item'><div className='event-description-item-title'>
                        <p >Place</p>
                    </div>
                        <div className='event-description-item-content'>
                            <p><span>:</span>Name Of Place</p>
                    </div>
                    </li>
                    <li className='event-description-item'><div className='event-description-item-title'>
                        <p >Place</p>
                    </div>
                        <div className='event-description-item-content'>
                            <p><span>:</span>Name Of Place</p>
                        </div>
                    </li>
                    <li className='event-description-item'><div className='event-description-item-title'>
                        <p >Place</p>
                    </div>
                        <div className='event-description-item-content'>
                            <p> <span>:</span> Name Of Place</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EventContent;