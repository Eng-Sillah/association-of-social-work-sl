import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  // State variables to store the username, password, validity, and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate username and password fields
    if (!username.trim()) {
      setUsernameValid(false);
      setUsernameError('Please enter a username.');
      return;
    }

    if (!password.trim()) {
      setPasswordValid(false);
      setPasswordError('Please enter a password.');
      return;
    }

    const db = getFirestore();
    try {
      // Check if the user exists in Firestore
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('username', '==', username)));
      if (!querySnapshot.empty) {
        // Assuming the password is stored in Firestore and needs to be checked here
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.password === password) {
            // Redirect user to RegisteredMember page if username and password match
            navigate('/registered-member');
          } else {
            setPasswordValid(false);
            setPasswordError('Incorrect password.');
          }
        });
      } else {
        setUsernameValid(false);
        setUsernameError('User does not exist.');
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle authentication errors, such as displaying an error message to the user
    }
  };

  return (
    <div className="login-container">
      <div className="content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={!usernameValid ? 'invalid' : ''}
              required
            />
            {!usernameValid && <p className="error-message">{usernameError}</p>}
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className='passwordLabel'>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={!passwordValid ? 'invalid' : ''}
              required
            />
            {!passwordValid && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
