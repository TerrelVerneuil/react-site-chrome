import React, { useState } from 'react';
import './App.css';
import Register from './register'; // Import the Register component

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false); // New state to toggle between login and register
  const [showLogin, setShowLogin] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      onLoginSuccess();
    } catch (error) {
      console.error("Authentication error:", error);
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
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
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
