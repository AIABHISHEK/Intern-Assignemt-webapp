import React, { useState } from 'react';
import Event from '../../components/EventsNavigation/Event.js';
import MainHeader from '../../components/MainHeader/MainHeader.js';
import Friend from '../../components/Friend/Friend.js'
import Backdrop from '../Backdrop/Backdrop.js';
import ShareOption from '../Share/Share.js';
import EventContent from '../EventContent/EventContent.js';
import Success from '../Success/Success.js';
import './Main.css';
const Main = () => {

    const [toggleShare, setToggleShare] = useState(true);
    const [toggleOptions, setToggleOptions] = useState(false);
    const [toggleEventContent, setToggleEventContent] = useState(false);
    const [toggleSuccess, setToggleSuccess] = useState(false);

    const toggleSuccessHandler = (event) => { 
        event.preventDefault();
        setToggleSuccess(false);
        setToggleEventContent(true);
    }

    const toggleShareHandler = (event) => {
        console.log(event);
        event.preventDefault();
        setToggleShare(false);
        setToggleOptions(true);
    }
    const toggleOptionsConfirmHandler = (event) => {
        event.preventDefault();
        setToggleOptions(false);
        setToggleSuccess(true);
    }


    return (
        <React.Fragment>
            {toggleShare && <Backdrop><Friend OnConfirmHandler={toggleShareHandler} /></Backdrop>}
            {toggleOptions && <Backdrop ><ShareOption OnConfirmHandler={toggleOptionsConfirmHandler} /></Backdrop>}
            <div className='main-box'>
            <div className='event-section main-layout-left'>
                <Event > Re-Union</Event>
                <Event > Birthday </Event>
                <Event > Marriage </Event>
                <Event > Anniversary</Event>
                <Event > Others </Event>
            </div>
            <div className='content-section main-layout-right'>
                {/* <div> */}
                    <MainHeader/>
                {/* </div> */}
                <div className='content-Section'>
                        {/* <EventContent/> */}
                        {toggleEventContent && <EventContent/>}
                        {toggleSuccess && <Success onViewInvitation={ toggleSuccessHandler} />}
                </div>
            </div>
            </div>
            </React.Fragment>
    )
}

export default Main;