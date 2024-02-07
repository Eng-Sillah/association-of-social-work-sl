import React from 'react';
import './MembershipForm.css'; // Import the CSS file

const MembershipForm = () => {
  return (
    <div className="membership-form-container">
      <h2>Membership Registration Form</h2>
      <form className="membership-form">
        {/* Personal Information Section */}
        <div className="section">
          <h3>Personal Information</h3>
          <div className="firstAndSurname">
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" required />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" required />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="middlename">Middle Name(s):</label>
            <input type="text" id="middlename" name="middlename" />
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
          <div>
          <div className="form-group">
            <label htmlFor="province">Province:</label>
            <input type="text" id="province" name="province" required />
          </div>
          <div className="form-group">
            <label htmlFor="district">District:</label>
            <input type="text" id="district" name="district" required />
          </div>
          </div>
            <div>
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

        {/* Contact Section */}
        <div className="section">
          <h3>Contact</h3>
          <div className="form-group">
            <label htmlFor="tel">Tel:</label>
            <input type="tel" id="tel" name="tel" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="national-id">National ID No.:</label>
            <input type="text" id="national-id" name="national-id" required />
          </div>
        </div>

        {/* Membership Category Section */}
        <div className="section">
          <h3>Membership Category</h3>
          <div className="form-group">
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
          {/* Include professional information fields here */}
        </div>

        {/* Motivation for Membership Section */}
        <div className="section">
          <h3>Motivation for Membership</h3>
          <div className="form-group">
            <label htmlFor="motivation">Motivation:</label>
            <textarea id="motivation" name="motivation" rows="4" required></textarea>
          </div>
        </div>

        {/* Referees Section */}
        <div className="section">
          <h3>Referees</h3>
          <div className="form-group">
            <label htmlFor="referee1">Referee 1:</label>
            <input type="text" id="referee1" name="referee1" required />
          </div>
          <div className="form-group">
            <label htmlFor="referee2">Referee 2:</label>
            <input type="text" id="referee2" name="referee2" required />
          </div>
        </div>

        {/* Declaration by Applicant Section */}
        <div className="section">
          <h3>Declaration by Applicant</h3>
          <div className="form-group">
            <label htmlFor="declaration">Declaration:</label>
            <textarea id="declaration" name="declaration" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="signature">Signature:</label>
            <input type="text" id="signature" name="signature" required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
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
  );
};

export default MembershipForm;
