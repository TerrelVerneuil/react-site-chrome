import React, { useState } from 'react';
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 
//we will eventually have to access members in the database to make edits to certain
//parts of the extension.
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
  export default Dashboard;
