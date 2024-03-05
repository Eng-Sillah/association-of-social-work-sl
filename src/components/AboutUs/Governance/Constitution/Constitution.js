import React from 'react';
import "./Constitution.css";
import whatIsImg from "../../../../image/constitution01.jpg";
import whataSocialWorkDoImg from "../../../../image/shutterstock_482415004.jpg.webp";
import { Link } from 'react-router-dom';



function Constitution() {

  return (
    <div className="about-us">
      <div className="WhatSocialWorkDo">
        <div className="WhatSocialWorkDo-content">
          <div className="navLinks">
            <Link to='/' className='navLink'>Home <span>/</span></Link>
            <Link to='/what-is-social-work' className='navLink'>About social work <span>/</span></Link>
            <Link className='navLink'>What is social work?</Link>
          </div>
          <h2>Constitution of SLASW</h2>
          <p>This constitution shall be the supreme document of the Sierra Leone Association of Social Workers</p>
        </div>
        <div className="WhatSocialWorkDo-image">
          <img src={whatIsImg}alt="Banner ImageIMO1" className='imgg' />
        </div>
      </div>
      <div className="whatSocialWorkDoContent">
        <div className="leftContainer">
          <div className="content">
            <h4>Article 5: MEMBERSHIP</h4>
            <p>Categories of Membership of the Association shall be divided into the following four categories:  </p>
            <h5>a. FULL MEMBERSHIP</h5>
            <p>i. A Full Membership shall be comprised of Graduate in Social Work from a recognized Tertiary Institution.</p>
            <p>ii. A Full Member shall have Delegate Status and voting right at Annual General Meetings. Constitution of The Sierra Leone Association of Social Workers (SLASW) Adopted on 22/03/2023</p>
            <h5>b. ASSOCIATE MEMBERSHIP</h5>
            <p>i. Shall be Practitioners not meeting the Full Membership status, but have practiced for more than five years to the first Annual General Meeting of the Association</p>
            <p>ii. Shall be Practitioners in Social Work from other countries </p>
            <p>iii. Shall have observer status at the Annual General Meeting of the Association</p>
            <h5>c. HONORARY MEMBERSHIP</h5>
            <p>i. Shall be persons who, in the opinion of the Association have done distinguished work to promote the Social Work Profession</p>
            <p>ii. Shall be persons who, in the opinion of the Association have done distinguished work in furthering the objectives of the Association. </p>
            <p>iii. The recommendation or application for an Honorary Member shall be subject to approval at an Annual General Meeting.</p>
            <p>iv. An Honorary Member shall have observer status at the Annual General Meeting </p>
            <h5>d. STUDENT MEMBERSHIP</h5>
            <p>i. A student member shall be persons pursuing a Social Work Program in a recognized University</p>
            <p>ii. Should be a member of the Social Work Students Association of his/her University.</p>
            <p>iii. The Social Work Student Association of the University should have an accreditation from the Association (SLASW)</p>
            <p>iv. Student Members shall have observer status at the Annual General Meeting</p>
              <div className="downloadContainer">
            <a href="/constitution.pdf" download="CONSTITUTION OF SIERRA LEONE ASSOCIATION OF SOCIAL WORK (SLASW0).pdf" className="download-button">Download SLASW Constitution</a>
            <a href="/codeOfEthic.pdf" download="CODE OF ETHICS OF THE SIERRA LEONE ASSOCIATION OF SOCIAL WORKERS (SLASW).pdf" className="download-button">Download SLASW Code Of Ethics</a>
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

export default Constitution;
