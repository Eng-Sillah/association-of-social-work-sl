import React, { useRef } from 'react';
import './MembershipForm.css'; // Import the CSS file
import { useReactToPrint } from 'react-to-print';

const UserDetail = ({ formData }) => {
    const componentRef = useRef();
    
    const handleDownloadPDF = useReactToPrint({
      content: () => componentRef.current,
    });

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
            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <input type="text" id="position" name="position" value={formData.position} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input type="text" id="startDate" name="startDate" value={formData.startDate} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="duties">Duties:</label>
              <input type="text" id="duties" name="duties" value={formData.duties} readOnly />
            </div>
          </div>

          {/* Educational Qualifications Section */}
          <div className="section">
            <h3>Educational Qualifications</h3>
            {formData.educationalQualifications.map((edu, index) => (
              <div key={index} className="form-group education">
                <label>Date:</label>
                <input type="text" value={`${edu.date}`} readOnly />
                <label>Institution:</label>
                <input type="text" value={edu.institution} readOnly />
                <label>Certificate Earned:</label>
                <input type="text" value={edu.certificateEarned} readOnly />
              </div>
            ))}
          </div>

          {/* Motivation Section */}
          <div className="section">
            <h3>Motivation for Membership</h3>
            <div className="form-group">
              <label>Motivation:</label>
              <textarea rows="5" value={formData.motivation} readOnly />
            </div>
          </div>

          {/* Referees Section */}
          <div className="section">
            <h3>Referees</h3>
            {formData.referees.map((referee, index) => (
              <div key={index} className="form-group referee">
                <label>Name:</label>
                <input type="text" value={referee.name} readOnly />
                <label>Occupation:</label>
                <input type="text" value={referee.occupation} readOnly />
                <label>Tel:</label>
                <input type="text" value={referee.tel} readOnly />
                <label>Email:</label>
                <input type="email" value={referee.email} readOnly />
              </div>
            ))}
          </div>

          {/* Declaration Section */}
          <div className="section">
            <h3>Declaration by Applicant</h3>
            <div className="form-group declaration">
              <input type="text" value="I, " readOnly />
              <input type="text" value={formData.declaration} readOnly />
              <input type="text" value="," readOnly />
              <input type="text" value={formData.signature} readOnly />
              <input type="text" value="hereby declare that all the information provided by me in my application for membership to the Sierra Leone Association of Social Workers (SLASW) is true and complete to the best of my knowledge. I understand that any false information provided may lead to the rejection of my application or termination of membership even after approval upon the reliance of the false information provided. I also pledge to abide by the Code of Ethics of SLASW, the constitution, and every term, condition, and rule of the Association. I understand that membership in SLASW is a privilege and that I have a responsibility to uphold the values and standards of the Association. I will actively participate in the activities of the Association and contribute to its growth and development to the best of my ability," readOnly />
              <input type="date" value={formData.date} readOnly />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UserDetail;

