const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb13_pMLYi15oum4z7eDdsK0g6fx-40mA",
  authDomain: "slasw-3654e.firebaseapp.com",
  projectId: "slasw-3654e",
  storageBucket: "slasw-3654e.appspot.com",
  messagingSenderId: "770511568540",
  appId: "1:770511568540:web:d5d0341e19295c03237759",
  measurementId: "G-DH09G2XEQM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Pass firebaseApp to getFirestore

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Define a route to handle form submissions
app.post('/submit-form', async (req, res) => {
  const formData = req.body;
  console.log('Form data received:', formData);

  try {
    // Add form data to Firestore
    const docRef = await addDoc(collection(db, 'formData'), formData);
    console.log('Document written with ID:', docRef.id);
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error adding document:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
