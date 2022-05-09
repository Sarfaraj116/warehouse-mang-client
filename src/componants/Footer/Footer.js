import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChatAltIcon, LocationMarkerIcon, MailIcon, PhoneIcon, PhotographIcon, PlayIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <div className='footer'>
            <a href=""><LocationMarkerIcon className='Icon'></LocationMarkerIcon></a>
            <b>Bagha,Rajshahi,Bangladesh</b><br />
            <a href=""><PhoneIcon className='Icon'></PhoneIcon></a><b> Helpline:   +8801735776381</b>
            <br />
            <a href="http://"><MailIcon className='Icon'></MailIcon></a><b> Email: sarfarajrahman@gmail.com</b>
            <br />
            <a href="">
                <ChatAltIcon className='Icon'></ChatAltIcon></a>
            <a href="https://i.ibb.co/x5FRY5k/131692351-1365374810482039-8592008014066332892-n.jpg"><PhotographIcon className='Icon'></PhotographIcon></a>
            <a href="https://youtu.be/rztWlsghmuE"><PlayIcon className='Icon'></PlayIcon></a>

            <p>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 Warhouse Industry</p>
        </div>
    );
};

export default Footer;