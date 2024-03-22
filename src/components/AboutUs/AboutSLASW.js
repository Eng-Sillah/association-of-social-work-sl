import React from 'react';
import "./AboutSLASW.css";
import whatIsImg from "../../image/SLASW LOGO.jpg";
import whataSocialWorkDoImg from "../../image/Photo/swc01.jpeg";
import { Link } from 'react-router-dom';



function AboutSLASW() {

  return (
    <div className="about-us">
      <div className="WhatSocialWorkDo">
        <div className="WhatSocialWorkDo-content">
          <div className="navLinks">
            <Link to='/' className='navLink'>Home <span>/</span></Link>
            <Link to='/what-is-social-work' className='navLink'>About social work <span>/</span></Link>
            <Link className='navLink'>What is social work?</Link>
          </div>
          <h2>What is all about SLASW?</h2>
          <p>Find out all you need to know about the Sierra Leone Association of Social Work (SLASW)</p>
        </div>
        <div className="WhatSocialWorkDo-image">
          <img src={whatIsImg}alt="Banner ImageIMO1" className='imgg' />
        </div>
      </div>
      <div className="whatSocialWorkDoContent">
        <div className="leftContainer">
          <div className="content">
            <h4>ABOUT SLASW</h4>
            <p>The Sierra Leone Association of Social Workers (SLASW) is a National Organization comprising of Social Work Professionals, Social Workers and Promoters of the core values of the Profession and the Association in Sierra Leone. The Mission of SLASW is to advocate for Social Justice, Human Rights and Social Development through plans, actions, programs and the promotion of best practice models in Social Work within a framework of national and international cooperation.</p>
            <h4>OBJECTIVES OF THE ASSOCIATION </h4>
            <p>The objectives of the Association shall be: </p>
            <p>a. To promote the Social Work Profession.</p>
            <p>b. To provide support to Social Workers in the practice of the Profession </p>
            <p>c. To represent the views of Social Workers on matters of Social Welfare Policies and Practice at National and International level </p>
            <p>d. To advocate for the welfare and interests of members of the Association </p>
            <p>e. To promote awareness about the contribution of Social Work to society </p>
            <p>f. To ensure that Social Workers in Sierra Leone engage in ongoing Professional Development and Capacity Building</p>
            <p>SLASW works to enhance the professional growth and development of its members, to create and maintain professional standards, and to advance sound social welfare policies for Sierra Leone. </p>
            
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
          <div className="gallery">
            <div className="imageDiv">
            <img src={whataSocialWorkDoImg} alt="What a Social Do" />
            </div>
            <div className="imageDiv">
            <img src={whataSocialWorkDoImg} alt="What a Social Do" />
            </div>
            <div className="imageDiv">
            <img src={whataSocialWorkDoImg} alt="What a Social Do" />
            </div>
            <div className="imageDiv">
            <img src={whataSocialWorkDoImg} alt="What a Social Do" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSLASW;
