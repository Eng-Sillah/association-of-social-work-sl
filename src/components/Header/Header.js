// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import logo from "../../image/SLASW LOGO.jpg"
import flag from "../../image/animated-flagF.gif"

const Header = () => {
  return (
    <header className="header-container">
      {/* <Link to="/" className="logo">
        Sierra Leone Association of Social Workers (SLASW)
      </Link> */}
      <nav className="navigation">
        <div className="top-row">
            <div className='logo'>
              <Link to="/">
                <img src={logo} alt="Logo" />
                </Link>
            </div>
            <h1 className='heading'>Sierra Leone <span className='flag'><img src={flag} alt="flag" /></span> <br /> Association of Social Workers (SLASW)</h1>
            <div className='top-row-links'>
            <Link to="/advert" className="nav-item">
            Advert
          </Link>
          <Link to="/donate" className="nav-item">
            Donate
          </Link>
          <Link to="/register" className="nav-item">
            Register
          </Link>
          <Link to="/login" className="nav-item">
            Login
          </Link>
            </div>
         
        </div>
        <div className="row">
          <div className="nav-dropdown">
            <Link to="/about" className="nav-item">
              About
            </Link>
            <div className="dropdown-content">
              <Link to="/what-is-social-work">Social Work in SL</Link>
              <Link to="/about-slasw">About SLASW</Link>
              <Link to="/ethics">Ethics</Link>
              
            </div>
          </div>
          <div className="nav-dropdown">
          <Link to="/practice" className="nav-item">
            Governance
          </Link>
          <div className="dropdown-content">
              <Link to="/governance">Constitution</Link>
              <Link to="/delegate-assembly">Executive lagars</Link>
              {/* <Link to="/career">Child Welfare</Link>
              <Link to="/ethics">Clinical Social Work</Link>
              <Link to="/legal-defence-fund">Legal Defence Fund</Link> */}
            </div>
            </div> 
            <div className="nav-dropdown">
          <Link to="/career" className="nav-item">
            Meetings
            </Link>
            <div className="dropdown-content">
              <Link to="/agm">AGM</Link>
              <Link to="/executive-meeting">Executive Meetings</Link>
              {/* <div className="dropdown-content">
                <Link to="/board">Board</Link>
              </div> */}
            </div>
            </div>
          
          <Link to="/advocacy" className="nav-item">
            Advocacy
          </Link>
          <Link to="/news" className="nav-item">
            News
          </Link>
          <Link to="/events" className="nav-item">
            Events
          </Link>
          <div className="nav-dropdown">
          <Link to="/emembership" className="nav-item">
            Membership
          </Link>
          <div className="dropdown-content">
              <Link to="/governance">Membership type</Link>
              <Link to="/delegate-assembly">Professional Benefits</Link>
              <Link to="/career">Student Benefits</Link>
              <Link to="/legal-defence-fund">Membership FAQ</Link>
            </div>
            </div>
          {/* Add more regular navigation links as needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
