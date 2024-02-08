import React from 'react';
import { useState } from 'react';
import './MembershipForm.css'; // Import the CSS file

const MembershipForm = () => {
// State to store form data
const [formData, setFormData] = useState({
  surname: '',
  firstname: '',
  middlename: '',
  permanentAddress: '',
  currentAddress: '',
  nationality: '',
  day: '',
  month: '',
  year: '',
  province: '',
  district: '',
  chiefdom: '',
  town: '',
  tel: '',
  email: '',
  nationalId: '',
  membershipType: '',
  institution: '',
  position: '',
  startDate: '',
  duties: '',
  motivation: '',
  referee1: '',
  referee1Occupation: '',
  referee1Tel: '',
  referee1Email: '',
  referee2: '',
  referee2Occupation: '',
  referee2Tel: '',
  referee2Email: '',
  signature: '',
  date: '',
});

// Handler for input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

// Handler for form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Here you can submit formData to your database
  console.log(formData);
};


  return (
    <div className="container">
    <div className="membership-form-container">
      <h2>Membership Registration Form</h2>
      <form className="membership-form" onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="section">
          <h3>Personal Information</h3>
          <i>(This section should include basic personal details)</i>
          <div className="firstAndSurname">
            <div className="form-group">
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" value={formData.surname} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="middlename">Middle Name(s):</label>
            <input type="text" id="middlename" name="middlename" value={formData.surname} onChange={handleChange} />
          </div>
        </div>

        {/* Address Section */}
        <div className="section">
          <h3>Address</h3>
          <div className="form-group">
            <label htmlFor="permanent-address">Permanent Address:</label>
            <input type="text" id="permanent-address" name="permanent-address" required />
          </div>
          <div className="form-group">
            <label htmlFor="current-address">Current Address:</label>
            <input type="text" id="current-address" name="current-address" required />
          </div>
        </div>

        {/* Nationality and Date of Birth Section */}
        <div className="section">
          <h3>Nationality and Date of Birth</h3>
          <div className="nationalityAndDOB">
            <div className="form-group">
              <label htmlFor="nationality">Nationality:</label>
              <input type="text" id="nationality" name="nationality" required />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <div className="dob">
                <input type="number" id="day" name="day" placeholder="Day" min="1" max="31" required />
                <input type="number" id="month" name="month" placeholder="Month" required />
                <input type="number" id="year" name="year" placeholder="Year" min="1900" max="2024" required />
              </div>
            </div>
          </div>
        </div>

        {/* Place of Birth Section */}
        <div className="section">
          <h3>Place of Birth</h3>
          <div className='pob-container'>
            <div className='pob'>
              <div className="form-group">
                <label htmlFor="province">Province:</label>
                <input type="text" id="province" name="province" required />
              </div>
              <div className="form-group">
                <label htmlFor="district">District:</label>
                <input type="text" id="district" name="district" required />
              </div>
            </div>
            <div className='pob'>
              <div className="form-group">
                <label htmlFor="chiefdom">Chiefdom:</label>
                <input type="text" id="chiefdom" name="chiefdom" required />
              </div>
              <div className="form-group">
                <label htmlFor="town">Town:</label>
                <input type="text" id="town" name="town" required />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="section">
          <h3>Contact</h3>
          <div className="emailTele">
            <div className="form-group">
              <label htmlFor="tel">Tel:</label>
              <input type="text" id="tel" name="tel" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="national-id">National ID No.:</label>
            <input type="text" id="national-id" name="national-id" required />
          </div>
        </div>

        {/* Membership Category Section */}
        <div className="section">
          <h3>Membership Category</h3>
          <i>(The categories of Membership are based on the level of experience and professional qualifications of the social worker pursuant to the SLASW Constitution) </i> <br />
          <div className="form-group">
            <br />
            <label htmlFor="membership-type">Membership Type:</label>
            <select id="membership-type" name="membership-type" required>
              <option value="">Select Membership Type</option>
              <option value="full">Full Membership</option>
              <option value="associate">Associate Membership</option>
              <option value="honorary">Honorary Membership</option>
              <option value="student">Student Membership</option>
            </select>
          </div>
          {/* Additional fields based on membership type */}
        </div>

        {/* Professional Information Section */}
        <div className="section">
          <h3>Professional Information</h3>
          <i>(This section should include details about your professional background if your application is not for student membership)  </i>
          <div className="form-group" id='current-employment'>
            <label htmlFor="current-employment">Current Employment:</label>
            <div className="employment-details">
              <div className="institution">
                <label htmlFor="institution">Institution:</label>
                <input type="text" id="institution" name="institution" required />
              </div>
              <div className="positionAndDate">
                <div className="position">
                  <label htmlFor="position">Title/Position:</label>
                  <input type="text" id="position" name="position" required />
                </div>
                <div className="start-date">
                  <label htmlFor="start-date">Start Date:</label>
                  <input type="date" id="start-date" name="start-date" required />
                </div>
              </div>
              <div className="duties">
                <label htmlFor="duties">Duties:</label>
                <textarea id="duties" name="duties" rows="2" required></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="current-employment">Previous Employment:</label>
            <div className="employment-details">
              <div className="institution">
                <label htmlFor="institution">Institution:</label>
                <input type="text" id="institution" name="institution" required />
              </div>
              <div className="positionAndDate">
                <div className="position">
                  <label htmlFor="position">Title/Position:</label>
                  <input type="text" id="position" name="position" required />
                </div>
                <div className="start-date">
                  <label htmlFor="start-date">Start Date:</label>
                  <input type="date" id="start-date" name="start-date" required />
                </div>
              </div>
              <div className="duties">
                <label htmlFor="duties">Duties:</label>
                <textarea id="duties" name="duties" rows="2" required></textarea>
              </div>
            </div>
          </div>
          {/* Additional fields for previous employment, educational qualifications, professional certifications or licenses */}
        </div>

        {/* Motivation for Membership Section */}
        <div className="section">
          <h3>Motivation for Membership</h3>
          <i>(This section is for the applicant to explain reasons for wanting to join SLASW, including their interest in the social work profession, their desire to contribute to the profession, and their expectations for the benefits of membership- not more than 1000 words) </i>
          <div className="form-group">
            <br />
            <label htmlFor="motivation">Motivation:</label>
            <textarea id="motivation" name="motivation" rows="10" required></textarea>
          </div>
        </div>

        {/* Referees Section */}
        <div className="section">
          <h3>Referees</h3>
          <i>(Applicants are required to provide references from other social workers or professionals who can attest to their experience and qualifications) </i>
          <div className="form-group">
            <br />
            <div className="referee">
              <label htmlFor="referee1">Referee 1:</label>
              <input type="text" id="referee1" name="referee1" required />
              <div className="occAndTele">
                <div>
                <label htmlFor="referee1-occupation">Occupation:</label>
              <input type="text" id="referee1-occupation" name="referee1-occupation" required />
                </div>
             <div>
                <label htmlFor="referee1-tel">Tel:</label>
                  <input type="text" id="referee1-tel" name="referee1-tel" required />
             </div>
            
              </div>
              
              <label htmlFor="referee1-email">Email:</label>
              <input type="email" id="referee1-email" name="referee1-email" required />
            </div>
          </div>
          <div className="form-group">
            <div className="referee">
              <label htmlFor="referee2">Referee 2:</label>
              <input type="text" id="referee2" name="referee2" required />
              <div className="occAndTele">
                <div>
                <label htmlFor="referee1-occupation">Occupation:</label>
              <input type="text" id="referee1-occupation" name="referee1-occupation" required />
                </div>
             <div>
                <label htmlFor="referee1-tel">Tel:</label>
                  <input type="text" id="referee1-tel" name="referee1-tel" required />
             </div>
            
              </div>
              <label htmlFor="referee2-email">Email:</label>
              <input type="email" id="referee2-email" name="referee2-email" required />
            </div>
          </div>
        </div>

        {/* Declaration by Applicant Section */}
        <div className="section">
          <h3>Declaration by Applicant</h3>
          <div className="form-group">
            <label htmlFor="declaration">I</label>
            <input type="text" name="" id="inline" className='inline'  />
            <p className='inline' id='space'>,</p>
            <i className='inline' id='declara'>hereby declare that all the information provided by me in my application for membership to the Sierra Leone Association of Social Workers (SLASW) is true and complete to the best of my knowledge. I understand that any false information provided may lead to the rejection of my application or termination of membership even after approval upon the reliance of the false information provided. 
I also pledge to abide by the Code of Ethics of SLASW, the constitution, and every term, condition, and rule of the Association. I understand that membership in SLASW is a privilege and that I have a responsibility to uphold the values and standards of the Association. I will actively participate in the activities of the Association and contribute to its growth and development to the best of my ability
</i>
          </div>
          <div className="signDate">
          <div className="form-group">
            <label htmlFor="signature">Signature:</label>
            <input type="text" id="signature" name="signature" required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
          </div>
          </div>

        </div>

        {/* Official Use Section */}
        <div className="section">
          <h3>Official Use</h3>
          {/* Include official use fields here */}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default MembershipForm;
