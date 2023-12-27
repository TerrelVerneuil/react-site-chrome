import React, { useState } from 'react';
import './App.css';
//add some firebase functionality to work with the database

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the default page reload on form submit
    console.log('Logging in with:', email, password);
    // Here, you can add logic to handle the authentication
  };

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
