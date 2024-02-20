import React from 'react';
import "./Footer.css";

const Footer = () => {

    return (
        <div className="footerMainContainer">
            <div className="contents">
                <div className="description">
                    <h1>SLASW</h1>
                    <h4>By your side, every step of the way.</h4>
                    <p>Sierra Leone Association of Social Workers is a company limited by guarantee, registered in Sierra Leone. </p>
                </div>
                <div className="contacts">
                    <p className="address">Wellesley House, 37 Waterloo Street, Birmingham, B2 5PP</p>
                    <p className="tele">+232-79-000-000</p>
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
            <p>Copyright ©2024 Sierra Leone Association of Social Workers | Site by Agile Collective | Privacy Policy</p>
        </div>
    )
}

export default Footer;