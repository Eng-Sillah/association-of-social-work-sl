import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MembershipForm.css'; // Import the CSS file
import "../../../firebaseConfig"
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { imgStorage, txtStorage } from '../../../firebaseConfig';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';



const MembershipForm = () => {
// State to store form data
const [submitted, setSubmitted] = useState(false);
const [profilePhoto, setProfilePhoto] = useState('');
 // State to store selected ID card type and ID number
 const [idCardType, setIdCardType] = useState('');
 const [idCardNumber, setIdCardNumber] = useState('');
const navigate = useNavigate()
// const [referees, setReferees] = useState([{ name: '', occupation: '', tel: '', email: '' }]);
const [formData, setFormData] = useState({
  surname: '',
  firstname: '',
  middlename: '',
  gender: '',
  profilePhoto: '',
  permanentAddress: '',
  currentAddress: '',
  nationality: '',
  dayOfBirth: '',
  monthOfBirth: '',
  yearOfBirth: '',
  tel: '',
  email: '',
  nationalId: '',
  membershipType: '',
  institution: '',
  position: '',
  startDate: '',
  duties: '',
  motivation: '',
  signature: '',
  date: '',
  referees: [{ name: '', occupation: '', tel: '', email: '' }],
  employments: [{ institution: '', position: '', startDate: '', duties: '' }],
  educationalQualifications: [{ date: '', institution: '', certificateEarned: '', certificateFile: null },],
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
 
  // Function to handle changes in the referee input fields
  const handleRefereeChange = (e, index) => {
    const { name, value } = e.target;
    const updatedReferees = [...formData.referees];
    updatedReferees[index][name] = value;
    setFormData(prevData => ({
      ...prevData,
      referees: updatedReferees
    }));
  };

  const handleEmploymentChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEmployments = [...formData.employments];
    updatedEmployments[index][name] = value;
    setFormData(prevData => ({
      ...prevData,
      employments: updatedEmployments
    }));
  };

  // Handler for input changes in the educational qualification section
  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducationalQualifications = [
      ...formData.educationalQualifications,
    ];
    updatedEducationalQualifications[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      educationalQualifications: updatedEducationalQualifications,
    }));
  };


    // Handler for selecting ID card type
    const handleIdCardTypeChange = (e) => {
      setIdCardType(e.target.value);
      // Reset ID number when changing ID card type
      setIdCardNumber('');
    };
  
    // Handler for entering ID number
    const handleIdNumberChange = (e) => {
      setIdCardNumber(e.target.value);
    };
   

      // Handler for uploading profile photo
      const handleProfilePhotoUpload = async (e) => {
        const file = e.target.files[0];
        
        setProfilePhoto(file)


        try {
          // Upload profile photo to Firebase Storage
          const profilePhotoRef = ref(imgStorage, `profilePhotos/${v4()}`);
          await uploadBytes(profilePhotoRef, file);
      
          // Get the download URL for the uploaded profile photo
          const downloadURL = await getDownloadURL(profilePhotoRef);
      
          // Update the form data with the profile photo URL
          formData.profilePhoto = downloadURL;
        } catch (error) {
          console.error('Error uploading profile photo:', error);
          // Handle error
        }
      };
      


// Function to handle uploading certificate photos
const handleCertificatePhotoUpload = async (e, index) => {
  const file = e.target.files[0];

  try {
    // Upload certificate photo to Firebase Storage
    const certificatePhotoRef = ref(imgStorage, `certificatePhotos/${v4()}`);
    await uploadBytes(certificatePhotoRef, file);

    // Get the download URL for the uploaded certificate photo
    const downloadURL = await getDownloadURL(certificatePhotoRef);

    // Update the form data with the certificate photo URL
    const updatedEducationalQualifications = [...formData.educationalQualifications];
    updatedEducationalQualifications[index].certificatePhoto = downloadURL;
    setFormData(prevData => ({
      ...prevData,
      educationalQualifications: updatedEducationalQualifications
    }));
  } catch (error) {
    console.error('Error uploading certificate photo:', error);
    // Handle error
  }
};

    // Function to add a new referee section
    const addReferee = () => {
      setFormData(prevData => ({
        ...prevData,
        referees: [...prevData.referees, { name: '', occupation: '', tel: '', email: '' }]
      }));
    };
    const addEmployment = () => {
      setFormData(prevData => ({
        ...prevData,
        employments: [...prevData.employments, { institution: '', position: '', startDate: '', duties: '' }]
      }));
    };

  // Function to add a new educational qualification section
  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      educationalQualifications: [
        ...prevData.educationalQualifications,
        { date: '', institution: '', certificateEarned: '', certificateFile: null },
      ],
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
    education: false,
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

 const saveDataToFirestore = async () => {
  const db = getFirestore();
  try {
    await addDoc(collection(db, 'userData'), formData);
    console.log('Record Successfully Submitted to Firestore');
  } catch (error) {
    console.error('Error submitting form to Firestore:', error);
    // Handle error
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
     // Upload profile photo to Firebase Storage
     let profilePhotoUrl = ''; // Initialize profile photo URL variable

     if (profilePhoto) {
       const photoref = ref(imgStorage, `profilePhotos/${v4()}`);
       await uploadBytes(photoref, profilePhoto);
       profilePhotoUrl = await getDownloadURL(photoref);
       console.log(profilePhotoUrl);
 
       // Update the form data with the profile photo URL
       setFormData(prevData => ({
         ...prevData,
         userProfiePhoto: profilePhotoUrl,
       }));
     } else {
       throw new Error('Profile photo is required');
     }
    // Include profile photo URL in the form data
    const updatedFormData = {
      ...formData,
      profilePhoto: profilePhotoUrl,
    };

    // Upload certificate files to Firebase Storage and get their URLs
    const certificateUrls = await Promise.all(
      updatedFormData.educationalQualifications.map(async (edu) => {
        if (edu.certificateFile) {
          const certificateRef = ref(imgStorage, `certificates/${edu.certificateFile.name}`);
          await uploadBytes(certificateRef, edu.certificateFile);
          return certificateRef.getDownloadURL();
        }
        return '';
      })
    );

    // Include certificate URLs in the form data
    updatedFormData.educationalQualifications = updatedFormData.educationalQualifications.map((edu, index) => ({
      ...edu,
      certificateFile: certificateUrls[index],
    }));

    // Store form data into Firestore
    await saveDataToFirestore(updatedFormData);

    // Provide feedback to the user upon successful submission
    setSubmitted(true);
    console.log("Form submitted successfully!");
  } catch (error) {
    // Handle errors gracefully
    console.error("Error submitting form:", error);
  }

  // Clear the form data
  setFormData({
    surname: '',
    firstname: '',
    middlename: '',
    gender: '',
    profilePhoto: '',
    permanentAddress: '',
    currentAddress: '',
    nationality: '',
    dayOfBirth: '',
    monthOfBirth: '',
    yearOfBirth: '',
    email: '',
    nationalId: '',
    membershipType: '',
    institution: '',
    position: '',
    startDate: '',
    duties: '',
    motivation: '',
    signature: '',
    date: '',
    referees: [{ name: '', occupation: '', tel: '', email: '' }],
    employments: [{ institution: '', position: '', startDate: '', duties: '' }],
    educationalQualifications: [{ date: '', institution: '', certificateEarned: '', certificateFile: null }],
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
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('personalInformation')}>Personal Information</h3>
          <div>
          {sectionVisibility.personalInformation && (
            <div>
          <i>(This section should include basic personal details)</i>
          <div className="firstAndSurname">
            <div className="form-group">
              <label htmlFor="surname">Surname:<span className="required-field">*</span></label>
              <input type="text" id="surname" name="surname" onChange={handleChange} value={formData.surname} required />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name:<span className="required-field">*</span></label>
              <input type="text" id="firstname" name="firstname" onChange={handleChange} value={formData.firstname} required />
            </div>
          </div>
          <div className="middleGender">
          <div className="form-group">
            <label htmlFor="middlename">Middle Name(s):</label>
            <input type="text" id="middlename" name="middlename" onChange={handleChange} value={formData.middlename} />
          </div>

          <div className="form-group gender">
          <label>Gender:<span className="required-field">*</span></label><br />
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} />
          <label htmlFor="female" className='femaleOther'>Female</label>
          <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
          <label htmlFor="other" className='femaleOther'>Other</label>
          <input type="radio" id="other" name="gender" value="Other" onChange={handleChange} />
        </div>

        <div className="section profilePhoto">
                <div className="form-group">
                  <label htmlFor="profilePhoto">Upload Profile Photo:</label>
                  <input
                    type="file"
                    id="profilePhoto"
                    name="profilePhoto"
                    accept="image/*"
                    onChange={handleProfilePhotoUpload}
                  />
                </div>
                {profilePhoto && (
                  <div className="profile-photo-preview">
                    <img src={URL.createObjectURL(profilePhoto)} alt="Profile" />
                  </div>
                )}
          </div>
        
          </div>

          <div className="nationalityAndDOB">
            <div className="form-group">
              <label htmlFor="nationality">Nationality:<span className="required-field">*</span></label>
              <input type="text" id="nationality" name="nationality" onChange={handleChange} value={formData.nationality} required />
            </div>
            <div className="form-group">
              <label>Date of Birth:<span className="required-field">*</span></label>
              <div className="dob">
              <input type="number" id="dayOfBirth" name="dayOfBirth" placeholder="Day" min="1" max="31" onChange={handleChange} value={formData.dayOfBirth} />
              <input type="number" id="monthOfBirth" name="monthOfBirth" placeholder="Month" onChange={handleChange} value={formData.monthOfBirth} />
              <input type="number" id="yearOfBirth" name="yearOfBirth" placeholder="Year" min="1900" max="2024" onChange={handleChange} value={formData.yearOfBirth} required/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="currentAddress">Current Address:<span className="required-field">*</span></label>
            <input type="text" id="currentAddress" name="currentAddress" onChange={handleChange} value={formData.currentAddress} required  />
          </div>
          </div>
            )}
            </div>
        </div>

        {/* Contact Section */}
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('contact')}>Contact</h3>
          <div>
          {sectionVisibility.contact && (
            <div>
          <div className="emailTele">
            <div className="form-group">
              <label htmlFor="tel">Tel:<span className="required-field">*</span></label>
              <input type="text" id="tel" name="tel" onChange={handleChange} value={formData.tel}  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:<span className="required-field">*</span></label>
              <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="nationalId">National ID No.:</label>
            <input type="text" id="nationalId" name="nationalId" onChange={handleChange} value={formData.nationalId} />
          </div>

          <div>
        {/* <h3>National ID Number</h3> */}
        <div className="form-group">
          <label htmlFor="idCardType">Select ID Card Type:</label>
          <select id="idCardType" name="idCardType" value={idCardType} onChange={handleIdCardTypeChange}>
            <option value="">Select ID Card Type</option>
            <option value="National ID">National ID</option>
            <option value="Passport">Passport</option>
            {/* Add more options if needed */}
          </select>
        </div>
        {idCardType && (
          <div className="form-group">
            <label htmlFor="idCardNumber">Enter {idCardType} Number:</label>
            <input
              type="text"
              id="idCardNumber"
              name="idCardNumber"
              value={idCardNumber}
              onChange={handleIdNumberChange}
              required
            />
          </div>
        )}
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
            <label htmlFor="membershipType">Membership Type:<span className="required-field">*</span></label>
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
                {sectionVisibility.professionalInformation && (
                  <div>
                    <i>(Please enter at least one(1) job experience)</i>
                    <br />
               {formData.employments.map((employment, index) => (
              <div key={index} className="referee-section">
                <div className="form-group">
                  <label htmlFor={`name-${index}`}>Institution:<span className="required-field">*</span></label>
                  <input type="text" id={`institution-${index}`} name="institution" value={employment.institution} onChange={(e) => handleEmploymentChange(e, index)} />
                </div>
                <div className="form-group">
                  <label htmlFor={`occupation-${index}`}>Position:<span className="required-field">*</span></label>
                  <input type="text" id={`position-${index}`} name="position" value={employment.position} onChange={(e) => handleEmploymentChange(e, index)} />
                </div>
                <div className="form-group">
                  <label htmlFor={`tel-${index}`}>StartDate:<span className="required-field">*</span></label>
                  <input type="date" id={`startDate-${index}`} name="startDate" value={employment.startDate} onChange={(e) => handleEmploymentChange(e, index)} />
                </div>
                <div className="form-group">
                  <label htmlFor={`email-${index}`}>Duties:<span className="required-field">*</span></label>
                  <input type="text" id={`eduties-${index}`} name="duties" value={employment.duties} onChange={(e) => handleEmploymentChange(e, index)} />
                </div>
              </div>
            ))}
                <button type="button" onClick={addEmployment}>Add Previouse Employment</button>
            {/* {renderReferees()} */}
                </div>
                )}
        </div>

      {/* Educational Section */}

      <div className="section">
                <h3 onClick={() => toggleSectionVisibility('education')}>
                  Educational Qualifications
                </h3>
                {sectionVisibility.education && (
                  <div>
                    <i>(Please provide all your academics information and upload the certificate for each)</i>
                    {formData.educationalQualifications.map((edu, index) => (
                      <div key={index} className="education-section">
                        <div className="form-group">
                          <label htmlFor={`date-${index}`}>Date:<span className="required-field">*</span></label>
                          <input
                            type="date"
                            id={`date-${index}`}
                            name="date"
                            value={edu.date}
                            onChange={(e) => handleEducationChange(e, index)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor={`institution-${index}`}>
                            Institution:<span className="required-field">*</span>
                          </label>
                          <input
                            type="text"
                            id={`institution-${index}`}
                            name="institution"
                            value={edu.institution}
                            onChange={(e) => handleEducationChange(e, index)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor={`certificate-${index}`}>
                            Certificate Earned:<span className="required-field">*</span>
                          </label>
                          <input
                            type="text"
                            id={`certificate-${index}`}
                            name="certificateEarned"
                            value={edu.certificateEarned}
                            onChange={(e) => handleEducationChange(e, index)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor={`certificateFile-${index}`}>
                            Upload Certificate:<span className="required-field">*</span>
                          </label>
                          <input
                            type="file"
                            id={`certificateFile-${index}`}
                            name="certificateFile"
                            onChange={(e) => handleCertificatePhotoUpload(e, index)}
                          />
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={addEducation}>
                      Add Education
                    </button>
                  </div>
                )}
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
              <label htmlFor="motivation">Motivation:<span className="required-field">*</span></label>
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
                    <i>(Please enter at least one(1)) referee</i>
               {formData.referees.map((referee, index) => (
              <div key={index} className="referee-section">
                <div className="form-group">
                  <label htmlFor={`name-${index}`}>Name:<span className="required-field">*</span></label>
                  <input type="text" id={`name-${index}`} name="name" value={referee.name} onChange={(e) => handleRefereeChange(e, index)} />
                </div>
                <div className="form-group">
                  <label htmlFor={`occupation-${index}`}>Occupation:<span className="required-field">*</span></label>
                  <input type="text" id={`occupation-${index}`} name="occupation" value={referee.occupation} onChange={(e) => handleRefereeChange(e, index)} />
                </div>
                <div className="form-group">
                  <label htmlFor={`tel-${index}`}>Tel:<span className="required-field">*</span></label>
                  <input type="text" id={`tel-${index}`} name="tel" value={referee.tel} onChange={(e) => handleRefereeChange(e, index)} />
                </div>
                <div className="form-group">
                  <label htmlFor={`email-${index}`}>Email:</label>
                  <input type="email" id={`email-${index}`} name="email" value={referee.email} onChange={(e) => handleRefereeChange(e, index)} />
                </div>
              </div>
            ))}
                <button type="button" onClick={addReferee}>Add Referee</button>
            {/* {renderReferees()} */}
                </div>
                )}
          </div>

        {/* Declaration by Applicant Section */}
        <div className="section" >
          <h3 onClick={() => toggleSectionVisibility('declaration')}>Declaration by Applicant</h3>
          {sectionVisibility.declaration && (
            <div>
          <div className="form-group">
            <label htmlFor="declaration">I:<span className="required-field">*</span></label>
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
            <label htmlFor="date">Date:<span className="required-field">*</span></label>
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