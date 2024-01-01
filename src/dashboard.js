import React, { useState } from "react";
import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Sidebar from "./Components/Sidebar";
import { Block } from "@mui/icons-material";
//we will eventually have to access members in the database to make edits to certain
//parts of the extension.
//dashboard component to generate the dashboard specifically for user
function Dashboard({ username, onLogout }) {
  return (
     <div className="Dashboard">
      <Sidebar />
      <div className="Dashboard-stats">
      </div>
      </div>
  );
}
export default Dashboard;
