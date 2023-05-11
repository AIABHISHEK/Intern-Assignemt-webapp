import React from 'react';
import './Success.css';

const Success = (props) => {
    return (
        <div className='success-content-card'>
            <div className='success-content-1'>
                <h3>Success</h3>
            </div>
            <div className='success-content-2'>
                <p>Congratulations</p>
            </div>
            
            <div className='success-content-img'>
                <img src="" alt="Here comes images"/>
            </div>
            <div className='success-content-3'>
                <p>You’re all set! You can manage your invite by visiting ‘My Events’</p>
            </div>
            <div className='success-button'>
                <button onClick={props.onViewInvitation} className='view-invitation-btn' type="submit">View Invitation</button>
            </div>
        </div>
    );
}

export default Success;