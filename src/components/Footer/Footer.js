import React from 'react';
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/meetup'

const Footer = () => {

    return (
        <div className="footerMainContainer">
            <div className="contents">
                <div className="description">
                    <h1>SLASW</h1>
                    <h4>Humanity to Others.</h4>
                    <p>Sierra Leone Association of Social Workers is a Company Limited by Guarantee registered pursuant to the Laws of Sierra Leone. </p>
                </div>
                <div className="contacts">
                    <p className="address">C/o Department of Social Work, Fourah Bay College, Freetown.</p>
                    <p className="tele">+2327-74-232-232</p>
                    <p className="tele">slasw.sl@gmail.com</p>
                </div>
                <div className="socialLinks">
                    <h2>Follows Us</h2>
                    <div className="links">
                    <SocialIcon url="https://www.facebook.com/slasw.sowk " className='link' />
                    <SocialIcon url="https://x.com/slasw_sl"  className='link'/>
                    <SocialIcon url="https://www.youtube.com/@slasw_sl" className='link' />
                    <SocialIcon url="https://www.instagram.com/slasw_sl " className='link' />
                    </div>
                </div>
            </div>
            <hr className='footerHR' />
            <p className='decleration'>Copyright ©2024 Sierra Leone Association of Social Workers | Privacy Policy</p>
        </div>
    )
}

export default Footer;