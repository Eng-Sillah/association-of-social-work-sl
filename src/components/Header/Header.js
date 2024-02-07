// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import logo from "../../image/SLASW LOGO (White).jpg"

const Header = () => {
  return (
    <header className="header-container">
      {/* <Link to="/" className="logo">
        Sierra Leone Association of Social Workers (SLASW)
      </Link> */}
      <nav className="navigation">
        <div className="top-row">
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div>
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
              <Link to="/governance">Governance</Link>
              <Link to="/delegate-assembly">Delegate Assembly</Link>
              <Link to="/career">Career</Link>
              <Link to="/ethics">Ethics</Link>
              <Link to="/legal-defence-fund">Legal Defence Fund</Link>
            </div>
          </div>
          <div className="nav-dropdown">
          <Link to="/practice" className="nav-item">
            Practice
          </Link>
          <div className="dropdown-content">
              <Link to="/governance">Aging</Link>
              <Link to="/delegate-assembly">Behavioral Health</Link>
              <Link to="/career">Child Welfare</Link>
              <Link to="/ethics">Clinical Social Work</Link>
              <Link to="/legal-defence-fund">Legal Defence Fund</Link>
            </div>
            </div> 
          <Link to="/career" className="nav-item">
            Career
          </Link>
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
