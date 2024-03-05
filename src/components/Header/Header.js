// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import logo from "../../image/SLASW LOGO (Transparent).png"
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
            <Link to="/login" className="nav-item">
            Login/Join
          </Link>
          <Link to="/donate" className="nav-item">
            Donate
          </Link>
           
          <Link to="/donate" className="nav-item">
            Shop
          </Link>
            <Link to="/advert" className="nav-item">
            Advert
          </Link>
        
          {/* <Link to="/register" className="nav-item">
            Register
          </Link> */}
         
            </div>
         
        </div>
        <div className="row">
          <div className="nav-dropdown">
            <Link to="/about" className="nav-item">
              About
            </Link>
            <div className="dropdown-content">
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">SLASW</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/about-slasw">About SLASW</Link>
                    <Link to="/what-is-social-work">Social Work in SL</Link>
                  </div>
                </div>
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">Govenrnce</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/constitution">Constitution</Link>
                    <Link to="/about-slasw">Organs of SLASW</Link>
                    <Link to="/about-slasw">Committees</Link>
                  </div>
                </div>
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">Meetings</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">AGM</Link>
                    <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">Executives Meeting</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">Board</Link>
                    <Link to="/about-slasw">NEC</Link>
                    <Link to="/about-slasw">BEC</Link>
                  </div>
                </div>
                  </div>
                </div>
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">Partners</Link>
                  <div className="sub-dropdown-content">
                    <div className="sub-dropdown">
                    <Link to="/what-is-social-work" className="nav-item sub-dropdown-trigger">IFSW</Link>
                  <Link to="." className="nav-item sub-dropdown-trigger">Ministry Of Social Welfare, GoSL</Link>
                  {/* <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">Ministry of Social Work</Link>
                    <Link to="/about-slasw">NEC</Link>
                    <Link to="/about-slasw">BEC</Link>
                  </div> */}
                  <Link to="." className="nav-item sub-dropdown-trigger">UNICEF Sierra Leone</Link>
                  {/* <Link to="." className="nav-item sub-dropdown-trigger">ASSW/</Link> */}
                  {/* <Link to="." className="nav-item sub-dropdown-trigger">University  Societies / Departments</Link> */}
                  
                  <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">University Social Work (Students ) Societies</Link>
                  {/* <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">FBC</Link>
                    <Link to="/about-slasw">MMTU</Link>
                    <Link to="/about-slasw">UNIMAK</Link>
                    <Link to="/about-slasw">EBKUST</Link>
                    <Link to="/about-slasw">Njala</Link>
                    <Link to="/about-slasw">ETU</Link>
                  </div> */}
                </div>
                </div>
                  </div>
                </div>

            </div>
          </div>

          <div className="nav-dropdown">
          <Link to="/emembership" className="nav-item">
            Membership
          </Link>
          <div className="dropdown-content">
              <Link to="/governance">Membership type</Link>
              <Link to="/delegate-assembly">Professional Benefits</Link>
              <Link to="/legal-defence-fund">Member Directory</Link>
              <Link to="/career">Member Resources</Link>
              {/* <Link to="/legal-defence-fund">Member Articles</Link> */}
              <Link to="/legal-defence-fund">Member FAQ</Link>
            </div>
          </div>
          <div className="nav-dropdown">
          <Link to="/emembership" className="nav-item">
            Policy & Practice
          </Link>
          <div className="dropdown-content">
              <Link to="/governance">SLASW Code of Ethics</Link>
              <Link to="/delegate-assembly">SLASW Policies</Link>
              <Link to="/career">National Policies</Link>
              {/* <Link to="/legal-defence-fund">Social work/Resources</Link> */}
              <Link to="/legal-defence-fund">Advocacy & Social Action</Link>
              {/* <Link to="/legal-defence-fund">Social Justice</Link> */}
            </div>
          </div>
          <div className="nav-dropdown">
          <Link to="/practice" className="nav-item">
            Professional/Development
          </Link>
          <div className="dropdown-content">
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">Center for Research</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">Academic Training</Link>
                    <Link to="/about-slasw">Excellence</Link>
                  </div>
                </div>
              
              <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">Careers and Jobs</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">For Employers</Link>
                    <Link to="/about-slasw">Jobs</Link>
                  </div>
                </div>
              {/* <Link to="/career">Child Welfare</Link>
              <Link to="/ethics">Clinical Social Work</Link>
              <Link to="/legal-defence-fund">Legal Defence Fund</Link> */}
            </div>
            </div> 
            <div className="nav-dropdown">
          <Link to="/career" className="nav-item">
            Events
            </Link>
            <div className="dropdown-content">
              <Link to="/agm">Celebrations</Link>
              <Link to="/executive-meeting">Conferences</Link>
              <Link to="/executive-meeting">National Campaign</Link>
              <Link to="/executive-meeting">Awards</Link>
              <Link to="/executive-meeting">Upcomming Events/Calendar</Link>
              <Link to="/executive-meeting">Archives</Link>
              {/* <div className="dropdown-content">
                <Link to="/board">Board</Link>
              </div> */}
            </div>
            </div>
          
            <div className="nav-dropdown">
          <Link to="/emembership" className="nav-item">
            SLASW Press
          </Link>
          <div className="dropdown-content">
          <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">NEWS</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">BLOGS</Link>
                    <Link to="/about-slasw">PRESS RELEASES</Link>
                    <Link to="/about-slasw">MARGAZINES</Link>
                  </div>
                </div>

                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">PUBLICATIONS</Link>
                  <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">POLICIES</Link>
                    <Link to="/about-slasw">REPORTS</Link>
                    <Link to="/about-slasw">JOURNALS</Link>
                    <Link to="/about-slasw">BOOKS</Link>
                  </div>
                </div>
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">PODCASTS</Link>
                  {/* <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">POLICIES</Link>
                    <Link to="/about-slasw">REPORTS</Link>
                    <Link to="/about-slasw">JOURNALS</Link>
                    <Link to="/about-slasw">BOOKS</Link>
                  </div> */}
                </div>
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">GALLARY</Link>
                  {/* <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">POLICIES</Link>
                    <Link to="/about-slasw">REPORTS</Link>
                    <Link to="/about-slasw">JOURNALS</Link>
                    <Link to="/about-slasw">BOOKS</Link>
                  </div> */}
                </div>
                <div className="sub-dropdown">
                  <Link to="." className="nav-item sub-dropdown-trigger">INFORMATION HUB</Link>
                  {/* <div className="sub-dropdown-content">
                    <Link to="/what-is-social-work">POLICIES</Link>
                    <Link to="/about-slasw">REPORTS</Link>
                    <Link to="/about-slasw">JOURNALS</Link>
                    <Link to="/about-slasw">BOOKS</Link>
                  </div> */}
                </div>
            </div>
          </div>
        
          {/* Add more regular navigation links as needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
