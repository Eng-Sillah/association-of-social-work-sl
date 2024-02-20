import React from 'react';
import "./AboutSLASW.css";
import whatIsImg from "../../../image/SLASW LOGO (White).jpg";
import { Link } from 'react-router-dom';
import Banner from './Banner01/Banner';
import OtherEvents from './OtherEvents01/OtherEvents';


function AboutSLASW() {
  return (
    <div className="about-us">
      <div className="whatAboutUsBanner">
        <div className="whatAboutUsBanner-content">
          <h2>About SLASW?</h2>
          <p>Find out about all you need to know about Sierra Leone Association of Social Work (SLASW)</p>
        </div>
        <div className="whatAboutUsBanner-image">
          <img src={whatIsImg}alt="Banner ImageIMO1" className='imgg' />
        </div>
      </div>

      <div className="article-links">
        <div className="article-link">
        <span>➡️</span>
          <Link to="/" className='link' >Aims and Objectives of SLASW</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link'>Vission of SLASW</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >Goals of SLASW</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >Policies of SLASW</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >Terms and Services to become a SLASW Member</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >Archievement of the SLASW</Link>
        </div>
      </div>
      <Banner />
      <OtherEvents />
    </div>
  );
}

export default AboutSLASW;
