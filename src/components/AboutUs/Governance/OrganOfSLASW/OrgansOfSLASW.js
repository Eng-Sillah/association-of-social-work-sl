import React from 'react';
import "./OrgansOfSLASW.css";
import whatIsImg from "../../../../image/ruth-allen-chief-executive.JPG.webp";
import { Link } from 'react-router-dom';
import Banner from '../../../Banner/Banner';
import OtherEvents from '../../../OtherEvents/OtherEvents';


function OrgansOfSLASW() {
  return (
    <div className="about-us">
      <div className="whatAboutUsBanner">
        <div className="whatAboutUsBanner-content">
          <h2>Organs of the SLASW</h2>
          <p>Get to know all the executives layers or organs of the SLASW.</p>
        </div>
        <div className="whatAboutUsBanner-image">
          <img src={whatIsImg}alt="Banner ImageIMO1" className='imgg' />
        </div>
      </div>

      <div className="article-links">
        <div className="article-link">
        <span>➡️</span>
          <Link to="/what-social-work-do" className='link' >Annual General Meeting (AGM)</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link'>General Meeting (GM)</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >Board of Trustees</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >National Executive Committee (NEC)</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >Social Work Education</Link>
        </div>
      </div>
      <Banner />
      <OtherEvents />
    </div>
  );
}

export default OrgansOfSLASW;
