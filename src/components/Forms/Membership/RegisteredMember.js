import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './RegisteredMember.css';
import { useReactToPrint } from 'react-to-print';
import UserDetail from './UserDetail';

const RegisteredMember = () => {
  // State to store user data
  const [userData, setUserData] = useState([]);
  // State to store the selected user's data for detailed view
  const [selectedUser, setSelectedUser] = useState(null);
  // Ref for the form template
  const componentRef = useRef();

  useEffect(() => {
    // Fetch user data from Firestore
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'userData'));
      const userDataArray = [];
      querySnapshot.forEach((doc) => {
        userDataArray.push({ id: doc.id, ...doc.data() });
      });
      setUserData(userDataArray);
    };

    fetchData();
  }, []);

  const handleApprove = async (id) => {
    const db = getFirestore();
    await deleteDoc(doc(db, 'userData', id));
    console.log('User approved and removed from database');
    // You can add more actions here, such as sending an email notification to the user
  };

  const handleDeny = async (id) => {
    // Handle denial logic, if needed
    console.log('User denied');
  };

  const handleViewMore = (user) => {
    // Render UserDetail component with user data
    ReactDOM.render(<UserDetail formData={user} />, document.getElementById('root'));
  };

  const handleCloseDetail = () => {
    setSelectedUser(null);
  };

  // Function to handle PDF download
  const handleDownloadPDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="registered-member-container">
      <h2>Registered Members</h2>
      <table className="registered-member-table">
        <thead>
          <tr>
            <th>Surname</th>
            <th>First Name</th>
            <th>Gender</th>
            <th>Current Address</th>
            <th>Nationality</th>
            <th>Membership Type</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.surname}</td>
              <td>{user.firstname}</td>
              <td>{user.gender}</td>
              <td>{user.currentAddress}</td>
              <td>{user.nationality}</td>
              <td>{user.membershipType}</td>
              <td>{user.tel}</td>
              <td>{user.email}</td>
              <td className='userPhoto'>
                {user.profilePhoto && <img src={user.profilePhoto} alt="Profile" />}
              </td>

              <td className='action'>
                <button className="approve-btn" onClick={() => handleApprove(user.id)}>Pending</button>
                <button className="approve-btn" onClick={() => handleApprove(user.id)}>Approve</button>
                <button className="deny-btn" onClick={() => handleDeny(user.id)}>Deny</button>
                <button className="view-btn" onClick={() => handleViewMore(user)}>View More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render detailed information for selected user */}
      {selectedUser && (
        <div className="detailed-info-container">
          <h3>Detailed Information</h3>
          <div ref={componentRef}>
            <form>
              {/* Iterate over selectedUser object and render each field */}
              {Object.entries(selectedUser).map(([key, value]) => (
                <div key={key}>
                  <label>{key}:</label>
                  <input type="text" value={value} readOnly />
                </div>
              ))}
            </form>
          </div>
          <button onClick={handleDownloadPDF}>Download PDF</button>
          <button onClick={handleCloseDetail}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RegisteredMember;
