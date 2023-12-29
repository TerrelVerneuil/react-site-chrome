import React, { useState } from 'react';
import './App.css';
import Register from './register';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in with:', userCredential.user);

      // Fetch the user document from Firestore
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Display the username
        setMessage(`Welcome, ${userDoc.data().username}`);
      } else {
        setMessage("User data not found.");
      }

      // Reset form
      setEmail('');
      setPassword('');

      // Additional actions upon successful login (e.g., redirection)
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {showRegister ? (
          <Register />
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              {message && <div id="message">{message}</div>}
              <h2>Login</h2>
              <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                placeholder='Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
        <button onClick={() => setShowRegister(!showRegister)}>
          {showRegister ? 'Login' : 'Register'}
        </button>
      </header>
    </div>
  );
}

export default App;
