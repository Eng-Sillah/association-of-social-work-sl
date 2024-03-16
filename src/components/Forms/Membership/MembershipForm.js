import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipForm.css'; // Import the CSS file
import "../../../firebaseConfig"
// import { getFirestore, collection, addDoc } from 'firebase/firestore';



const MembershipForm = () => {
// State to store form data
const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate()
const [referees, setReferees] = useState([{ name: '', occupation: '', tel: '', email: '' }]);
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
const handleChange = (e, index) => {
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

  // const newReferees = [...referees];
  //   newReferees[index][name] = value;
  //   setReferees(newReferees);
};

const addReferee = () => {
  setFormData((prevState) => ({
    ...prevState,
    referees: [...prevState.referees, { name: '', occupation: '', tel: '', email: '' }],
  }));
};
  // State to track visibility of each section
  const [sectionVisibility, setSectionVisibility] = useState({
    personalInformation: true,
    address: false,
    nationalityAndDOB: false,
    placeOfBirth: false,
    contact: false,
    membershipCategory: false,
    professionalInformation: false,
    motivation: false,
    referees: false,
    declaration: false,
  });


 // Effect to load draft from local storage
 useEffect(() => {
  const savedDraft = JSON.parse(localStorage.getItem('membershipFormDraft'));
  if (savedDraft) {
    setFormData(savedDraft);
  }
}, []);


  // Handler for toggling section visibility
  const toggleSectionVisibility = (sectionName) => {
    setSectionVisibility((prevVisibility) => ({
      ...Object.fromEntries(Object.entries(prevVisibility).map(([key, value]) => [key, key === sectionName ? !value : false])),
    }));
  };

  // Handler for saving draft to local storage
  const saveDraft = () => {
    localStorage.setItem('membershipFormDraft', JSON.stringify(formData));
    alert('Draft saved successfully!');
  };

// Handler for form submission
 // Handler for form submission

//  const saveDataToFireStore = async () => {
//   const db = getFirestore();
//   await addDoc(collection(db, "userData"), formData);
//   console.log("Record Successfully Submitted");
// }


 const handleSubmit = async (e) => {
  e.preventDefault();
  

  // try {
  //   await saveDataToFireStore();
  //   // Provide feedback to the user upon successful submission (e.g., show a success message)
  //   setSubmitted(true);
  //   console.log("Form submitted successfully!");
  // } catch (error) {
  //   // Handle errors gracefully (e.g., show an error message to the user)
  //   console.error("Error submitting form:", error);
  // }

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
 // Reset referee sections after submission
 setReferees([{ name: '', occupation: '', tel: '', email: '' }]);
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
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('personalInformation')}>Personal Information</h3>
          <div>
          {sectionVisibility.personalInformation && (
            <div>
          <i>(This section should include basic personal details)</i>
          <div className="firstAndSurname">
            <div className="form-group">
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname" onChange={handleChange} value={formData.surname} required />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" onChange={handleChange} value={formData.firstname} required />
            </div>
          </div>
          <div className="middleGender">
          <div className="form-group">
            <label htmlFor="middlename">Middle Name(s):</label>
            <input type="text" id="middlename" name="middlename" onChange={handleChange} value={formData.middlename} />
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

          <div className="nationalityAndDOB">
            <div className="form-group">
              <label htmlFor="nationality">Nationality:</label>
              <input type="text" id="nationality" name="nationality" onChange={handleChange} value={formData.nationality}  />
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

          <div className="form-group">
            <label htmlFor="currentAddress">Current Address:</label>
            <input type="text" id="currentAddress" name="currentAddress" onChange={handleChange} value={formData.currentAddress}  />
          </div>
          </div>
            )}
            </div>
        </div>

        {/* Address Section
        <div className="section" onClick={() => toggleSectionVisibility('address')}>
          <h3>Address</h3>
          {sectionVisibility.address && (
            <div>
          <div className="form-group">
            <label htmlFor="permanentAddress">Permanent Address:</label>
            <input type="text" id="permanentAddress" name="permanentAddress" onChange={handleChange}  />
          </div>
          <div className="form-group">
            <label htmlFor="currentAddress">Current Address:</label>
            <input type="text" id="currentAddress" name="currentAddress" onChange={handleChange}  />
          </div>
          </div>
          )}
        </div> */}

        {/* Nationality and Date of Birth Section */}
        {/* <div className="section" onClick={() => toggleSectionVisibility('nationalityAndDOB')}>
          <h3>Nationality and Date of Birth</h3>
          {sectionVisibility.nationalityAndDOB && (
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
          )}
        </div> */}

        {/* Place of Birth Section */}
        {/* <div className="section" onClick={() => toggleSectionVisibility('placeOfBirth')}>
          <h3>Place of Birth</h3>
          {sectionVisibility.placeOfBirth && (
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
          )}
        </div> */}

        {/* Contact Section */}
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('contact')}>Contact</h3>
          <div>
          {sectionVisibility.contact && (
            <div>
          <div className="emailTele">
            <div className="form-group">
              <label htmlFor="tel">Tel:</label>
              <input type="text" id="tel" name="tel" onChange={handleChange} value={formData.tel}  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="nationalId">National ID No.:</label>
            <input type="text" id="nationalId" name="nationalId" onChange={handleChange} value={formData.nationalId} />
          </div>
          </div>
          )}
          </div>
        </div>

        {/* Membership Category Section */}
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('membershipCategory')}>Membership Category</h3>
          {/* <i>(The categories of Membership are based on the level of experience and professional qualifications of the social worker pursuant to the SLASW Constitution) </i> <br /> */}
          <div>
          {sectionVisibility.membershipCategory && (
          <div className="form-group">
            <br />
            <label htmlFor="membershipType">Membership Type:</label>
              <select id="membershipType" name="membershipType" onChange={handleChange} value={formData.membershipType}>
                <option value="">Select Membership Type</option>
                <option value="Full Membership">Full Membership</option>
                <option value="Associate Membership">Associate Membership</option>
                <option value="Honorary Membership">Honorary Membership</option>
                <option value="Student Membership">Student Membership</option>
              </select>
          </div>
          )}
          </div>
          {/* Additional fields based on membership type */}
        </div>

        {/* Professional Information Section */}
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('professionalInformation')}>Professional Information</h3>
          {/* <i>(This section should include details about your professional background if your application is not for student membership)  </i> */}
          <div>
          {sectionVisibility.professionalInformation && (
            <div>
          <div className="form-group" id='current-employment'>
            <label htmlFor="current-employment">Current Employment:</label>
            <div className="employment-details">
              <div className="institution">
                <label htmlFor="institution">Institution:</label>
                <input type="text" id="institution" name="institution" onChange={handleChange} value={formData.institution} />
              </div>
              <div className="positionAndDate">
                <div className="position">
                  <label htmlFor="position">Title/Position:</label>
                  <input type="text" id="position" name="position" onChange={handleChange} value={formData.position} />
                </div>
                <div className="start-date">
                  <label htmlFor="start-date">Start Date:</label>
                  <input type="date" id="start-date" name="start-date" onChange={handleChange} value={formData.startDate} />
                </div>
              </div>
              <div className="duties">
                <label htmlFor="duties">Duties:</label>
                <textarea id="duties" name="duties" rows="2" onChange={handleChange} value={formData.duties} ></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="current-employment">Previous Employment:</label>
            <div className="employment-details">
              <div className="institution">
                <label htmlFor="institution">Institution:</label>
                <input type="text" id="institution" name="institution" onChange={handleChange} value={formData.institution} />
              </div>
              <div className="positionAndDate">
                <div className="position">
                  <label htmlFor="position">Title/Position:</label>
                  <input type="text" id="position" name="position" onChange={handleChange} value={formData.position}  />
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
          </div>

        )}
        </div>
          
          {/* Additional fields for previous employment, educational qualifications, professional certifications or licenses */}
        </div>

        {/* Motivation for Membership Section */}
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('motivation')}>Motivation for Membership</h3>
          <div>
            {sectionVisibility.motivation && (
              <div>
            <i>(This section is for the applicant to explain reasons for wanting to join SLASW, including their interest in the social work profession, their desire to contribute to the profession, and their expectations for the benefits of membership- not more than 1000 words) </i>
            <div className="form-group">
              <br />
              <label htmlFor="motivation">Motivation:</label>
              <textarea id="motivation" name="motivation" rows="10" onChange={handleChange} value={formData.motivation} ></textarea>
            </div>
            </div>
            )}
          </div>
        </div>

          {/* Referees Section */}
          <div className="section" >
                <h3 onClick={() => toggleSectionVisibility('referees')}>Referees</h3>
                {sectionVisibility.referees && (
                  <div>
                {referees.map((referee, index) => (
                  <div key={index} className="referee-section">
                    <div className="form-group">
                      <label htmlFor={`name-${index}`}>Name:</label>
                      <input type="text" id={`name-${index}`} name="name" value={referee.name} onChange={(e) => handleChange(e, index)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`occupation-${index}`}>Occupation:</label>
                      <input type="text" id={`occupation-${index}`} name="occupation" value={referee.occupation} onChange={(e) => handleChange(e, index)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`tel-${index}`}>Tel:</label>
                      <input type="text" id={`tel-${index}`} name="tel" value={referee.tel} onChange={(e) => handleChange(e, index)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`email-${index}`}>Email:</label>
                      <input type="email" id={`email-${index}`} name="email" value={referee.email} onChange={(e) => handleChange(e, index)} />
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addReferee}>Add Referee</button>
                </div>
                )}
              </div>

        {/* Declaration by Applicant Section */}
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('declaration')}>Declaration by Applicant</h3>
          {sectionVisibility.declaration && (
            <div>
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
          )}

        </div>

  
        {/* Submit Button */}
        <button type="submit">Submit</button>
        <button type="button" onClick={saveDraft}>Save Draft</button>
      </form>
      </React.Fragment>
      )}
    </div>
    </div>
  );
};

export default MembershipForm;