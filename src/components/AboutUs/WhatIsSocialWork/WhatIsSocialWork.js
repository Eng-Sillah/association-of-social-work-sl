import React from 'react';
import "./WhatIsSocialWork.css";
import whatIsImg from "../../../image/ruth-allen-chief-executive.JPG.webp";
import { Link } from 'react-router-dom';
import Banner from './Banner01/Banner';
import OtherEvents from './OtherEvents01/OtherEvents';


function WhatIsSocialWork() {
  return (
    <div className="about-us">
      <div className="whatAboutUsBanner">
        <div className="whatAboutUsBanner-content">
          <h2>What is social work?</h2>
          <p>Find out about the important work of social workers and the profession.</p>
        </div>
        <div className="whatAboutUsBanner-image">
          <img src={whatIsImg}alt="Banner ImageIMO1" className='imgg' />
        </div>
      </div>

      <div className="article-links">
        <div className="article-link">
        <span>➡️</span>
          <Link to="/what-social-work-do" className='link' >What social workers do?</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link'>People with lived experience</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >Regulators & professional registration</Link>
        </div>
        <div className="article-link">
        <span>➡️</span>
        <Link to="/" className='link' >World Social Work Day</Link>
        </div>
      </div>
      <Banner />
      <OtherEvents />
    </div>
  );
}

export default WhatIsSocialWork;
