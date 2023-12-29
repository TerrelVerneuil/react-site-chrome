import React, { useState } from 'react';
import './App.css';
import Register from './register'; // Import the Register component
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false); // New state to toggle between login and register
  const [message, setMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in with:', userCredential.user)
      
      setMessage('welcome,', userCredential.user)
      // Perform any additional actions upon successful login here
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
          {showRegister ? 'Go to Login' : 'Go to Register'}
        </button>
      </header>
    </div>
  );
}

export default App;
