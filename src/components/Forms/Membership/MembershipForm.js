import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipForm.css'; // Import the CSS file
import "../../../firebaseConfig"
import { getFirestore, collection, addDoc } from 'firebase/firestore';



const MembershipForm = () => {
// State to store form data
const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate()
const [formData, setFormData] = useState({
  surname: '',
  firstname: '',
  middlename: '',
  gender: '',
  permanentAddress: '',
  currentAddress: '',
  nationality: '',
  dayOfBirth: '',
  monthOfBirth: '',
  yearOfBirth: '',
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
  const { name, value, type } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: type === 'checkbox' ? e.target.checked : value,
  }));

   // Additional handling for gender input
   if (name === 'gender') {
    setFormData((prevData) => ({
      ...prevData,
      gender: value,
    }));
  }
};

// Handler for form submission
 // Handler for form submission

 const saveDataToFireStore = async () => {
  const db = getFirestore();
  await addDoc(collection(db, "userData"), formData);
  console.log("Record Successfully Submitted");
}


 const handleSubmit = async (e) => {
  e.preventDefault();
  

  try {
    await saveDataToFireStore();
    // Provide feedback to the user upon successful submission (e.g., show a success message)
    setSubmitted(true);
    console.log("Form submitted successfully!");
  } catch (error) {
    // Handle errors gracefully (e.g., show an error message to the user)
    console.error("Error submitting form:", error);
  }
  console.log(formData)
  setFormData({
    surname: '',
    firstname: '',
    middlename: '',
    gender: '',
    permanentAddress: '',
    currentAddress: '',
    nationality: '',
    dayOfBirth: '',
    monthOfBirth: '',
    yearOfBirth: '',
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

};

const resetForm = () => {
  setSubmitted(false);
  navigate('/')
};


  return (
    <div className="container">
    <div className="membership-form-container">
    {submitted ? (
          <div className="congratulations">
            <h2>Congratulations!</h2>
            <p>Your form has been successfully submitted.</p>
            <button onClick={resetForm}>Okay</button>
          </div>
        ) : (
          <React.Fragment>
      <h2>Membership Registration Form</h2>
      <form className="membership-form" action="http://localhost:5000/submit-form" method="POST" onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="section">
          <h3>Personal Information</h3>
          <i>(This section should include basic personal details)</i>
          <div className="firstAndSurname">
            <div className="form-group">
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" onChange={handleChange} required />
            </div>
          </div>
          <div className="middleGender">
          <div className="form-group">
            <label htmlFor="middlename">Middle Name(s):</label>
            <input type="text" id="middlename" name="middlename" onChange={handleChange} />
          </div>

          <div className="form-group">
          <label>Gender:</label><br />
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
          <label htmlFor="female" className='femaleOther'>Female</label>
          <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
          <label htmlFor="other" className='femaleOther'>Other</label>
          <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} />
        </div>
          </div>
          
        </div>

        {/* Address Section */}
        <div className="section">
          <h3>Address</h3>
          <div className="form-group">
            <label htmlFor="permanentAddress">Permanent Address:</label>
            <input type="text" id="permanentAddress" name="permanentAddress" onChange={handleChange}  />
          </div>
          <div className="form-group">
            <label htmlFor="currentAddress">Current Address:</label>
            <input type="text" id="currentAddress" name="currentAddress" onChange={handleChange}  />
          </div>
        </div>

        {/* Nationality and Date of Birth Section */}
        <div className="section">
          <h3>Nationality and Date of Birth</h3>
          <div className="nationalityAndDOB">
            <div className="form-group">
              <label htmlFor="nationality">Nationality:</label>
              <input type="text" id="nationality" name="nationality" onChange={handleChange}  />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <div className="dob">
              <input type="number" id="dayOfBirth" name="dayOfBirth" placeholder="Day" min="1" max="31" onChange={handleChange} value={formData.dayOfBirth} />
              <input type="number" id="monthOfBirth" name="monthOfBirth" placeholder="Month" onChange={handleChange} value={formData.monthOfBirth} />
              <input type="number" id="yearOfBirth" name="yearOfBirth" placeholder="Year" min="1900" max="2024" onChange={handleChange} value={formData.yearOfBirth} />
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
                <input type="text" id="province" name="province" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="district">District:</label>
                <input type="text" id="district" name="district" onChange={handleChange} />
              </div>
            </div>
            <div className='pob'>
              <div className="form-group">
                <label htmlFor="chiefdom">Chiefdom:</label>
                <input type="text" id="chiefdom" name="chiefdom" onChange={handleChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="town">Town:</label>
                <input type="text" id="town" name="town" onChange={handleChange} />
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
              <input type="text" id="tel" name="tel" onChange={handleChange}  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" onChange={handleChange}  />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="nationalId">National ID No.:</label>
            <input type="text" id="nationalId" name="nationalId"  onChange={handleChange} />
          </div>
        </div>

        {/* Membership Category Section */}
        <div className="section">
          <h3>Membership Category</h3>
          <i>(The categories of Membership are based on the level of experience and professional qualifications of the social worker pursuant to the SLASW Constitution) </i> <br />
          <div className="form-group">
            <br />
            <label htmlFor="membership-type">Membership Type:</label>
              <select id="membership-type" name="membershipType" onChange={handleChange} value={formData.membershipType}>
                <option value="">Select Membership Type</option>
                <option value="Full Membership">Full Membership</option>
                <option value="Associate Membership">Associate Membership</option>
                <option value="Honorary Membership">Honorary Membership</option>
                <option value="Student Membership">Student Membership</option>
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
                <input type="text" id="institution" name="institution" onChange={handleChange} />
              </div>
              <div className="positionAndDate">
                <div className="position">
                  <label htmlFor="position">Title/Position:</label>
                  <input type="text" id="position" name="position" onChange={handleChange}  />
                </div>
                <div className="start-date">
                  <label htmlFor="start-date">Start Date:</label>
                  <input type="date" id="start-date" name="start-date" onChange={handleChange} />
                </div>
              </div>
              <div className="duties">
                <label htmlFor="duties">Duties:</label>
                <textarea id="duties" name="duties" rows="2" onChange={handleChange} ></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="current-employment">Previous Employment:</label>
            <div className="employment-details">
              <div className="institution">
                <label htmlFor="institution">Institution:</label>
                <input type="text" id="institution" name="institution" onChange={handleChange} />
              </div>
              <div className="positionAndDate">
                <div className="position">
                  <label htmlFor="position">Title/Position:</label>
                  <input type="text" id="position" name="position" onChange={handleChange}  />
                </div>
                <div className="startDate">
                  <label htmlFor="startDate">Start Date:</label>
                  <input type="date" id="startDate" name="startDate" onChange={handleChange} />
                </div>
              </div>
              <div className="duties">
                <label htmlFor="duties">Duties:</label>
                <textarea id="duties" name="duties" rows="2" onChange={handleChange}></textarea>
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
            <textarea id="motivation" name="motivation" rows="10" onChange={handleChange} ></textarea>
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
              <input type="text" id="referee1" name="referee1" onChange={handleChange} />
              <div className="occAndTele">
                <div>
                <label htmlFor="referee1Occupation">Occupation:</label>
              <input type="text" id="referee1Occupation" name="referee1Occupation" onChange={handleChange} />
                </div>
             <div>
                <label htmlFor="referee1Tel">Tel:</label>
                  <input type="text" id="referee1Tel" name="referee1Tel" onChange={handleChange}  />
             </div>
            
              </div>
              
              <label htmlFor="referee1Email">Email:</label>
              <input type="email" id="referee1Email" name="referee1Email" onChange={handleChange}  />
            </div>
          </div>
          <div className="form-group">
            <div className="referee">
              <label htmlFor="referee2">Referee 2:</label>
              <input type="text" id="referee2" name="referee2" onChange={handleChange} />
              <div className="occAndTele">
                <div>
                <label htmlFor="referee2Occupation">Occupation:</label>
              <input type="text" id="referee2Occupation" name="referee2Occupation" onChange={handleChange}  />
                </div>
             <div>
                <label htmlFor="referee2Tel">Tel:</label>
                  <input type="text" id="referee2Tel" name="referee2Tel" onChange={handleChange}  />
             </div>
            
              </div>
              <label htmlFor="referee2Email">Email:</label>
              <input type="email" id="referee2Email" name="referee2Email" onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Declaration by Applicant Section */}
        <div className="section">
          <h3>Declaration by Applicant</h3>
          <div className="form-group">
            <label htmlFor="declaration">I</label>
            <input type="text" name="declaration" id="inline" className='inline' onChange={handleChange}  />
            <p className='inline' id='space'>,</p>
            <i className='inline' id='declara'>hereby declare that all the information provided by me in my application for membership to the Sierra Leone Association of Social Workers (SLASW) is true and complete to the best of my knowledge. I understand that any false information provided may lead to the rejection of my application or termination of membership even after approval upon the reliance of the false information provided. 
I also pledge to abide by the Code of Ethics of SLASW, the constitution, and every term, condition, and rule of the Association. I understand that membership in SLASW is a privilege and that I have a responsibility to uphold the values and standards of the Association. I will actively participate in the activities of the Association and contribute to its growth and development to the best of my ability
</i>
          </div>
          <div className="signDate">
          <div className="form-group">
            <label htmlFor="signature">Signature:</label>
            <input type="text" id="signature" name="signature" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" onChange={handleChange} />
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
      </React.Fragment>
      )}
    </div>
    </div>
  );
};

export default MembershipForm;
