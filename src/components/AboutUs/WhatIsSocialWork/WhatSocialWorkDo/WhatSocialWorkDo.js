import React from 'react';
import "./WhatSocialWorkDo.css";
import whatIsImg from "../../../../image/ruth-allen-chief-executive.JPG.webp";
import whataSocialWorkDoImg from "../../../../image/shutterstock_482415004.jpg.webp";
import { Link } from 'react-router-dom';



function WhatSocialWorkDo() {
  return (
    <div className="about-us">
      <div className="WhatSocialWorkDo">
        <div className="WhatSocialWorkDo-content">
          <div className="navLinks">
            <Link to='/' className='navLink'>Home <span>/</span></Link>
            <Link to='/what-is-social-work' className='navLink'>About social work <span>/</span></Link>
            <Link className='navLink'>What is social work?</Link>
          </div>
          <h2>What is social work?</h2>
          <p>The job of a social work professional is varied but always aims to improve peoples lives.</p>
        </div>
        <div className="WhatSocialWorkDo-image">
          <img src={whatIsImg}alt="Banner ImageIMO1" className='imgg' />
        </div>
      </div>
      <div className="whatSocialWorkDoContent">
        <div className="leftContainer">
          <div className="content">
            <p>Social workers aim to improve peoples lives by helping with social and interpersonal difficulties, promoting human rights and wellbeing. </p>
            <p>Social workers protect children and adults with support needs from harm.</p>
            <p>From helping keep a family under pressure together to supporting someone with mental health problems, social work is a varied, demanding, often emotional and very rewarding career.</p>
            <p>Read the <Link>International Federation of Social Works global definition of social work.</Link> </p>
            <div className="quote">
              🎶
              <p className="desc">Social workers recognise the bigger picture affecting people’s lives and work for a more equal and just society where human rights are respected and protected</p>
            </div>
            <div className="imageContainer">
              <img src={whataSocialWorkDoImg} alt="What a Social Do" />
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="links">
            <Link to='/what-is-social-work' className='headLink'>What is social work?</Link>
            <Link to="." className='lowerLink'>What social workers do</Link>
            <Link to="." className='lowerLink'>People with lived experience</Link>
            <Link to="." className='lowerLink'>Regulators & professional registration</Link>
            <Link to="." className='lowerLink'>World Social Work Day</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatSocialWorkDo;
