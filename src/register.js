import React, { useState } from 'react';
import { auth, db} from './firebaseConfig'; // Adjust the path as per your file structure
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  
  const handleRegister = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Registration successful
        console.log('Registered with:', userCredential.user);
        setMessage('Successfully Registered');

        // Add user to the database
        const userDoc = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        };
        await addDoc(collection(db, 'users'), userDoc);
      })
      .catch((error) => {
        // Error checking
        setMessage(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {message && <div id="message">{message}</div>}
      <form onSubmit={handleRegister}>
        <div>
      <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        </div>

        <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        </div>
        <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        </div>
        <button type="submit">Register</button>
      </form>
      
    </div>
  );
}

export default Register;
