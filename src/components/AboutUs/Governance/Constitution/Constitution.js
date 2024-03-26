import React, { useState } from 'react';
import './Constitution.css';
import whatIsImg from '../../../../image/constitution01.jpg';
import whataSocialWorkDoImg from '../../../../image/shutterstock_482415004.jpg.webp';
import { Link } from 'react-router-dom';

function Constitution() {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
    const hiddenContent = document.querySelector('.hidden');
    if (hiddenContent) {
      hiddenContent.classList.toggle('show');
      document.querySelector(".read-more-button").textContent = showFullContent ? 'Read More' : 'Read Less';
    } 
  };

  return (
    <div className="about-us">
      <div className="WhatSocialWorkDo">
        <div className="WhatSocialWorkDo-content">
          <div className="navLinks">
            <Link to="/" className="navLink">
              Home <span>/</span>
            </Link>
            <Link to="/what-is-social-work" className="navLink">
              About social work <span>/</span>
            </Link>
            <Link className="navLink">What is social work?</Link>
          </div>
          <h2>Constitution of SLASW</h2>
          <p>This constitution shall be the supreme document of the Sierra Leone Association of Social Workers</p>
        </div>
        <div className="WhatSocialWorkDo-image">
          <img src={whatIsImg} alt="Banner ImageIMO1" className="imgg" />
        </div>
      </div>
      <div className="whatSocialWorkDoContent">
        <div className="leftContainer">
          <div className="content">
            {/* Display 40% of the content */}
            <p>PREAMBLE</p>
              <p>The Sierra Leone Association of Social Workers (SLASW) is a National Organization comprising of Social Work Professionals, Social Workers and Promoters of the core values of the Profession and the Association in Sierra Leone. The Mission of SLASW is to advocate for Social Justice, Human Rights and Social Development through plans, actions, programs and the promotion of best practice models in Social Work within a framework of national and international cooperation. The</p>
              <p>Article 1: NAME</p>
              <p>The name of the Association shall be the Sierra Leone Association of Social Workers (SLASW), hereinafter referred to as “The Association”. </p>
              <p>Article 2: STATUS  </p>
              <p>i. 	This constitution shall be the supreme document of the Sierra Leone Association of Social Workers (SLASW)</p>
              <p>ii. 	The Association shall be non-governmental, non-political, non-religious and non-tribal </p>
              <p>iii. 	Any resolution, decision or action that is inconsistent with this constitution shall be null and void.  </p>
              <p>Article 3: PLACE OF OPERATION  </p>
              <p>i. 	The operations of the Association shall be throughout Sierra Leone and </p>
              <p>The Association shall have its Head Office situated in the Capital City of Sierra Leone.  </p>
              <p>iii. 	The Association shall have Regional Offices in the Provinces hereinafter referred to as “Region or Branch”</p>
              <p>Article 4: OBJECTIVES OF THE ASSOCIATION</p>

            <div className={`constitution-content ${showFullContent ? 'full-content' : 'partial-content'}`}>
              {/* Add your content here */}
              {/* For example: */}
              <div>
              <p>i. 	The objectives of the Association shall be:</p>
              <p>a.	To promote the Social Work Profession </p>
              <p>b.	To provide support to Social Workers in the practice of the Profession</p>
              <p>c.	To represent the views of Social Workers on matters of Social Welfare Policies and Practice at National and International level</p>
              <p>d.	To advocate for the welfare and interests of members of the Association</p>
              <p>e.	To promote awareness about the contribution of Social Work to society</p>
              <p>f.	To ensure that Social Workers in Sierra Leone engage in ongoing Professional Development and Capacity Building</p>
              <p>Article 5: MEMBERSHIP</p>
              <p>I. Categories of Membership of the Association shall be divided into the following four categories:</p>
              <p>a. FULL MEMBERSHIP</p>
              <p>i.	A Full Membership shall be comprised of Graduate in Social Work from a recognized Tertiary Institution. </p>
              <p>ii.	A Full Member shall have Delegate Status and voting right at Annual General Meetings. </p>
              <div className='hidden'>
              <p>b. ASSOCIATE MEMBERSHIP  </p>
              <p>Shall be Practitioners not meeting the Full Membership status, but have practiced for more than five years to the first Annual General Meeting of the Association </p>
              <p>ii. 	Shall be Practitioners in Social Work from other countries  </p>
              <p>iii. 	Shall have observer status at the Annual General Meeting of the </p>
              <p>c. HONORARY MEMBERSHIP  </p>
              <p>i.	Shall be persons who, in the opinion of the Association have done distinguished work to promote the Social Work Profession </p>
              <p>ii.	Shall be persons who, in the opinion of the Association have done distinguished work in furthering the objectives of the Association.  </p>
              <p>iii.	The recommendation or application for an Honorary Member shall be subject to approval at an Annual General Meeting </p>
              <p>iv.	An Honorary Member shall have observer status at the Annual General </p>
              <p>d. STUDENT MEMBERSHIP  </p>
              <p>i.	A student member shall be persons pursuing a Social Work Program in a recognized University </p>
              <p>ii.	Should be a member of the Social Work Students’ Association of his/her University.  </p>
              <p>iii.	The Social Work Student Association of the University should have an accreditation from the Association (SLASW). </p>
              <p>iv.	Student Members shall have observer status at the Annual General </p>
              <p>II. 	Application for Membership  </p>
              <p>i.	Application for membership shall be made by the completion of the respective application form as would be provided by the Association </p>
              <p>ii.	Applications shall go through vetting process in line with Social Work ethical Standards  </p>
              <p>III. 	Membership Fee  </p>
              <p>i.	The calendar year of the Association shall last from January 1st to December 31st. </p>
              <p>ii.	Members of the Association are required to pay a prescribed Annual Membership Fee.  </p>
              <p>iii.	Membership fee shall be due on the 30th of September every year.  </p>
              <p>iv.	The National Executive Committee (NEC) may from time to time amend the fees and dues, subject to the approval of Annual General Meeting (AGM). </p>
              <p>v.	Membership fees will be the same for different categories of membership except for student membership  </p>
              <p>IV. 	Termination of Membership  </p>
              <p>i. 	Membership of a Member of the Association shall be terminated when</p>
              <p>a.	The Member dies </p>
              <p>b.	The Member resigns and resignation is accepted </p>
              <p>c.	If a member is of unsound mind and </p>
              <p>d.	When a member is in breach of the Code of Ethics or commits serious misconduct as recommended by resolution of a disciplinary Committee of the National Executive Committee subject to the approval at an Annual General Meeting </p>
              <p>ARTICLE 6: ORGANS OF THE ASSOCIATION AND THEIR DUTIES</p>
              <p>I. 	The Annual General Meeting (AGM)  </p>
              <p>a.	The AGM will be the highest decision-making body of the Association </p>
              <p>b.	The AGM shall comprise of all Members that had fully complied with this constitution before the meeting </p>
              <p>c.	The AGM shall discuss and make decision on the President’s Annual Report and  </p>
              <p>d.	The AGM shall discuss and approve the Plan of Action of the New Activity Year </p>
              <p>e.	The AGM shall receive financial reports and approve budget of the Association for the new financial year   </p>
              <p>f.	The AGM shall in a Delegates Conference elect Office Bearers and Delegates at the AGM and replace vacant offices before their expiration of their terms </p>
              <p>g.	The AGM shall Discuss, Review, Modify, Approve or Disapprove Amendments to this Constitution </p>
              <p>h.	All Members are entitled to discuss the issues and delegates are entitled to vote on issues </p>
              <p>i.	Decisions at the AGM shall on first vote be by 2/3 majority at first voting, and where there is no winner, the first two in the voting result order would go for a simple majority of 50+1% voting </p>
              <p>II. 	The General Meeting (GM)</p>
              <p>a.	The General Meeting shall be the second highest decision-making body of the Association  </p>
              <p>b.	The GM shall comprise of all elected Officers at National Executive Committee, The Chairman, Regional Secretary and the Financial Secretary of the Branch Executive Committee and Members of the Board of Trustees  </p>
              <p>c.	The meetings for the General Meeting shall be convened quarterly of the year or where 1/3 of the NEC deems it fit and agree that there is a need for an Emergency General Meeting which can be convened at anytime  </p>
              <p>d.	The quorum for a General Meeting shall be at least 1/3 of every Organ to be represented  </p>
              <p>e.	The General Meeting can approve changes in the AGM’s approved plan of action,  </p>
              <p>f.	The General Meeting can approve supplemental budgetary expenditure,  </p>
              <p>g.	The General Meeting can approve suspension of a Member </p>
              <p>III. 	The National Executive Committee (NEC) </p>
              <p>a.	The National Executive Committee shall comprise of all elected National Officers at AGM and Delegates Conference  </p>
              <p>b.	Quorum of the NEC Meetings shall be by 1/3 and decisions shall be by 2/3 majority of members present </p>
              <p>c.	Shall be responsible to provide strategic leadership to the Association and oversee the day to day national business of the Association’s planning, implementation, monitoring and evaluation of the National Program of Action   </p>
              <p>d.	Shall support, promote and authorize projects of the Branch Executive Committee consistent with the approved National Plan of Action  </p>
              <p>IV. 	Branch General Meeting (BGM) </p>
              <p>a.	The Branch General Meetings shall be comprised of all Members of a Branch meeting the requirements as provided for in this constitution  </p>
              <p>b.	The meeting can be convened bi-monthly or where the Branch Executive Committee decides by 50+1% of all members of the BEC that there is need to convene an Emergency Branch General Meeting which can be done at anytime  </p>
              <p>c.	The quorum for a Branch General Meeting for decision-making shall be by 1/3 of Branch Members meeting qualification for the last Annual General Meeting to the meeting year </p>
              <p>d.	Decisions of the Branch General Meeting shall be by simple majority of total members present </p>
              <p>e.	Decisions of the Branch General Meeting shall not be inconsistent with decisions of the AGM, GM or NEC decisions or it would be null and void </p>
              <p>V. 	Branch Executive Committee (BEC) </p>
              <p>a.	The Branch Executive Committees shall be responsible for planning and administration of their respective Branches in accordance with this constitution </p>
              <p>b.	The Branch Executive Committee shall prepare and submit quarterly reports to the NEC. </p>
              <p>c.	The Branch Executive Committee shall comprise of all Executive Members of the Branch </p>
              <p>d.	Quorum of the BEC Meetings shall be by at least 2/3 of BEC Members </p>
              <p>e.	The decision of a Branch Executive shall be by simple majority of the BEC members present </p>
              <p>VI. 	BOARD OF TRUSTEES:  </p>
              <p>a.	The Association shall have a Board of Trustees comprising of 7 Members </p>
              <p>b.	The 7 members shall be constituted of 5 Members nominated and approved at the AGM, the NEC President and a Legal Practitioner with a Social Work credential who shall be the Secretary to the Board </p>
              <p>c.	The Chairman of the Board of Trustees shall be elected from the 5 members elected at the AGM from a simple majority vote from among the 5 of them </p>
              <p>d.	The Board of Trustees shall be the guardian of Sierra Leone Association of Social Workers (SLASW) and protect the legal and property rights of the Association </p>
              <p>e.	The Board of Trustee shall be the Managing Board of any subsidiary of the Association approved at an AGM </p>
              <p>f.	The Board of Trustees shall be the disciplinary structure of the NEC and BEC </p>
              <p>g.	Complaint for disciplinary measures against a NEC or BEC member shall be made in writing to the Secretary of the Board  </p>
              <p>h.	Rules of Procedure for a disciplinary action shall be made by the Board and made public to the Membership before the commencement of any procedure </p>
              <p>i.	The Board of Trustees shall approve or disapprove suspension of Members by the National Executive Committee   </p>
              <p>j.	Meetings of the Board of Trustees shall be conveyed at any time by the Secretary in consultation with the Chairman  </p>
              <p>k.	Decisions of the Board of Trustees shall be by at least 4/5 vote of the 5 AGM nominated members. Where there is a 3/5 vote, the Secretary shall make the deciding vote on whether to support or oppose a decision and shall be the final decision  </p>
              <p>Article 7: OFFICIALS OF THE NATIONAL EXECUTIVE COMMITTEE AND BRANCH EXECUTIVE COMMITTEE  </p>
                </div>
              </div>
              {/* Add more content here */}
            </div>
            {/* Read More button */}
            {/* {!showFullContent && (
              <button className="read-more-button" onClick={toggleContent}>
                Read More
              </button>
              
            )} */}
            <button className="read-more-button" onClick={toggleContent}>
                Read More
            </button>
            <a href="/constitution.pdf" download="CONSTITUTION OF SIERRA LEONE ASSOCIATION OF SOCIAL WORK (SLASW0).pdf" className="download-button">Download</a>
          </div>
        </div>
        <div className="rightContainer">
          <div className="links">
            <Link to="/what-is-social-work" className="headLink">
              What is social work?
            </Link>
            <Link to="." className="lowerLink">
              What social workers do
            </Link>
            <Link to="." className="lowerLink">
              People with lived experience
            </Link>
            <Link to="." className="lowerLink">
              Regulators & professional registration
            </Link>
            <Link to="." className="lowerLink">
              World Social Work Day
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Constitution;
