import React, { useState, useEffect } from 'react';
import './App.css';
import Register from './register';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';

//dashboard component to generate the dashboard specifically for user
function Dashboard({ username, onLogout }) {
  return (
    <div className="Dashboard">
      <div className="Dashboard-header">
        <h3>Welcome to Your Dashboard, {username}!</h3>
      </div>

      <div className="Dashboard-content">
        <div className="Dashboard-profile">
          <h2>{username}</h2>
          {/* maybe add a profile image here */}
        </div>
        <div className="Dashboard-stats">
          {/* this button is where we will have user stats etc make a
          component for this. */}
          <button>Your Stats</button>
          {/* pressing the your stats button will generate */}
        </div>
      </div>
      <button className="Dashboard-logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Check if the user exists in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      //IF USER DOES NOT EXIST CREATE A NEW USER FOR THE GOOGLE ACCOUNT
      if (!userDoc.exists()) {
        await setDoc(userDocRef, { //BY USING SET DOC WE CAN MAKE EDITS TO THE FIREBASE DATABASE.
          uid: user.uid,
          email: user.email,
          username: user.displayName, 
        });
      }
      setUsername(user.displayName);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; 
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        setUsername(userDoc.data().username);
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUsername('');
  };
  //if user login works, then generate the dashboard form
  if (user) {
    return <Dashboard username={username} onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {showRegister ? (
          <Register />
        ) : (
          <form onSubmit={handleLogin}>
            <div>
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
          {showRegister ? 'Sign In' : 'Sign Up'}
        </button>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </header>
    </div>
  );
}

export default App;
