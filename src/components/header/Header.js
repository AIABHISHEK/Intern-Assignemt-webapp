import React from 'react';
import ReactDOM from 'react-dom';
import Friend from '../../components/Friend/Friend';
import './Header.css'

const Header = () => {

    const Clickhandler = () => { 
        ReactDOM.render(<Friend />, document.getElementById('root'));
    }
    return (
        <div className='nav-box'>
            <div className='logo'>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
            </div>
            <div className='navbar nav1'>
                <ul className='nav-list'>
                    <li className='nav-item'> Roots </li>
                    <li className='nav-item'> Kicks </li>
                    <li className='nav-item'> Reals </li>
                    <li className='nav-item'> U-Meet </li>
                </ul>
            </div>
            <div className='navbar nav2'>
                <ul className='nav-list'>
                    <li className='nav-item'> Chats </li>
                    <li className='nav-item' onClick={Clickhandler}> Friends </li>
                    <li className='nav-item'> Notifications </li>
                    <li className='nav-item'> Menu </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;