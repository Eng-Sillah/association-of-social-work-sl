import React from 'react';
import "./Footer.css";

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
                </div>
                <div className="socialLinks">
                    <h2>Follows Us</h2>
                    <div className="links">
                    <div className='link'>F</div>
                    <div className='link'>T</div>
                    <div className='link'>I</div>
                    </div>
                </div>
            </div>
            <hr className='footerHR' />
            <p className='decleration'>Copyright ©2024 Sierra Leone Association of Social Workers | Privacy Policy</p>
        </div>
    )
}

export default Footer;