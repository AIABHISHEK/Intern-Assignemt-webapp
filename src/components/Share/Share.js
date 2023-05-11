import React from 'react';
import './Share.css'
const ShareOption = (props) => { 
    return (
        <div className='share-options'>
            <div className='options-container'>
                <h3>Choose how you want to share this Invitation</h3>
                <hr/>
                <div className='option'>
                    <p className='option-text'>Want Post event on Home Screen</p>
                    <label className="switch">
                        <input type="checkbox"/>
                            <span className="slider"></span>
                    </label>
                </div>

                <div className='option'>
                    <p className='option-text'>Do you want to Enable Share options</p>
                    <label className="switch switch200">
                        <input type="checkbox"/>
                            <span className="slider slider200"></span>
                    </label> 
                </div>
                <button onClick={props.OnConfirmHandler} className='confirm-button' type="submit" >Confirm</button>
            </div>
        </div>
    )
}
export default ShareOption;