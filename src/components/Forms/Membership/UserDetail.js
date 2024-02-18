import React, { useRef } from 'react';
import './MembershipForm.css'; // Import the CSS file
import { useReactToPrint } from 'react-to-print';

const UserDetail = ({ formData }) => {
    const componentRef = useRef();
    
    const handleDownloadPDF = useReactToPrint({
      content: () => componentRef.current,
     
    }
    );

  
    const handleCancel = () => {
    //   onCancel(); // Call onCancel function provided by parent component
    };

  return (
    <div className="container">
      <div className="membership-form-container">
        <h2>User Details</h2>
        <form className="membership-form">
          {/* Personal Information Section */}
          <div className="section">
            <h3>Personal Information</h3>
            <div className="firstAndSurname">
              <div className="form-group">
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="surname" value={formData.surname} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" value={formData.firstname} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="middlename">Middle Name(s):</label>
                <input type="text" id="middlename" name="middlename" value={formData.middlename} readOnly />
              </div>
            </div>
            <div className="middleGender">
              <div className="form-group">
                <label>Gender:</label><br />
                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'} readOnly />
                <label htmlFor="female" className='femaleOther'>Female</label>
                <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === 'Female'} readOnly />
                <label htmlFor="other" className='femaleOther'>Other</label>
                <input type="radio" id="other" name="gender" value="Other" checked={formData.gender === 'Other'} readOnly />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="section">
            <h3>Address</h3>
            <div className="form-group">
              <label htmlFor="permanentAddress">Permanent Address:</label>
              <input type="text" id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="currentAddress">Current Address:</label>
              <input type="text" id="currentAddress" name="currentAddress" value={formData.currentAddress} readOnly />
            </div>
          </div>

          {/* Nationality and Date of Birth Section */}
          <div className="section">
            <h3>Nationality and Date of Birth</h3>
            <div className="form-group">
              <label htmlFor="nationality">Nationality:</label>
              <input type="text" id="nationality" name="nationality" value={formData.nationality} readOnly />
            </div>
            <div className="dob">
              <div className="form-group">
                <label>Date of Birth:</label>
                <input type="text" value={`${formData.dayOfBirth}/${formData.monthOfBirth}/${formData.yearOfBirth}`} readOnly />
              </div>
            </div>
          </div>

          {/* Place of Birth Section */}
          <div className="section">
            <h3>Place of Birth</h3>
            <div className="pob-container">
              <div className="form-group pob">
                <label htmlFor="province">Province:</label>
                <input type="text" id="province" name="province" value={formData.province} readOnly />
              </div>
              <div className="form-group pob">
                <label htmlFor="district">District:</label>
                <input type="text" id="district" name="district" value={formData.district} readOnly />
              </div>
              <div className="form-group pob">
                <label htmlFor="chiefdom">Chiefdom:</label>
                <input type="text" id="chiefdom" name="chiefdom" value={formData.chiefdom} readOnly />
              </div>
              <div className="form-group pob">
                <label htmlFor="town">Town:</label>
                <input type="text" id="town" name="town" value={formData.town} readOnly />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="section">
            <h3>Contact</h3>
            <div className="form-group">
              <label htmlFor="tel">Tel:</label>
              <input type="text" id="tel" name="tel" value={formData.tel} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="nationalId">National ID No.:</label>
              <input type="text" id="nationalId" name="nationalId" value={formData.nationalId} readOnly />
            </div>
          </div>

          {/* Membership Category Section */}
          <div className="section">
            <h3>Membership Category</h3>
            <div className="form-group">
              <label htmlFor="membership-type">Membership Type:</label>
              <input type="text" id="membership-type" name="membershipType" value={formData.membershipType} readOnly />
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="section">
            <h3>Professional Information</h3>
            <div className="form-group" id='current-employment'>
              <label htmlFor="institution">Institution:</label>
              <input type="text" id="institution" name="institution" value={formData.institution} readOnly />
            </div>
            <div className="form-group" id='position'>
              <label htmlFor="position">Title/Position:</label>
              <input type="text" id="position" name="position" value={formData.position} readOnly />
            </div>
            <div className="form-group" id='start-date'>
              <label htmlFor="start-date">Start Date:</label>
              <input type="date" id="start-date" name="start-date" value={formData.startDate} readOnly />
            </div>
            <div className="form-group" id='duties'>
              <label htmlFor="duties">Duties:</label>
              <textarea id="duties" name="duties" rows="2" readOnly>{formData.duties}</textarea>
            </div>
          </div>

          {/* Motivation for Membership Section */}
          <div className="section">
            <h3>Motivation for Membership</h3>
            <div className="form-group">
              <label htmlFor="motivation">Motivation:</label>
              <textarea id="motivation" name="motivation" rows="10" readOnly>{formData.motivation}</textarea>
            </div>
          </div>

          {/* Referees Section */}
          <div className="section">
            <h3>Referees</h3>
            <div className="form-group referee">
              <label htmlFor="referee1">Referee 1:</label>
              <input type="text" id="referee1" name="referee1" value={formData.referee1} readOnly />
            </div>
            <div className="form-group referee">
              <label htmlFor="referee1Occupation">Occupation:</label>
              <input type="text" id="referee1Occupation" name="referee1Occupation" value={formData.referee1Occupation} readOnly />
            </div>
            <div className="form-group referee">
              <label htmlFor="referee1Tel">Tel:</label>
              <input type="text" id="referee1Tel" name="referee1Tel" value={formData.referee1Tel} readOnly />
            </div>
            <div className="form-group referee">
              <label htmlFor="referee1Email">Email:</label>
              <input type="email" id="referee1Email" name="referee1Email" value={formData.referee1Email} readOnly />
            </div>
            <div className="form-group referee">
              <label htmlFor="referee2">Referee 2:</label>
              <input type="text" id="referee2" name="referee2" value={formData.referee2} readOnly />
            </div>
            <div className="form-group referee">
              <label htmlFor="referee2Occupation">Occupation:</label>
              <input type="text" id="referee2Occupation" name="referee2Occupation" value={formData.referee2Occupation} readOnly />
            </div>
            <div className="form-group referee">
              <label htmlFor="referee2Tel">Tel:</label>
              <input type="text" id="referee2Tel" name="referee2Tel" value={formData.referee2Tel} readOnly />
            </div>
            <div className="form-group referee">
              <label htmlFor="referee2Email">Email:</label>
              <input type="email" id="referee2Email" name="referee2Email" value={formData.referee2Email} readOnly />
            </div>
          </div>

          {/* Declaration by Applicant Section */}
          <div className="section">
            <h3>Declaration by Applicant</h3>
            <div className="form-group">
              <label htmlFor="declaration">Declaration:</label>
              <input type="text" id="declaration" name="declaration" value={formData.declaration} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="signature">Signature:</label>
              <input type="text" id="signature" name="signature" value={formData.signature} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" value={formData.date} readOnly />
            </div>
          </div>

          {/* Official Use Section */}
          <div className="section">
            <h3>Official Use</h3>
            {/* Include official use fields here */}
          </div>

            <div className="section">
            <button onClick={handleDownloadPDF}>Download PDF</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetail;
