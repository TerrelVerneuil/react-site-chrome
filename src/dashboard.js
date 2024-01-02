import React from 'react';
import Sidebar from './Components/Sidebar';
import BlockedSite from './Components/BlockedSite';
import TimeBarChart from './Components/TimeBarChart';
import CategoryPieChart from './Components/CategoryPieChart';

function Dashboard({ onLogout }) {
  const blockedSitesData = ['quora.com', 'youtube.com', 'youtube.com', 'discord.com', 'discord.com'];

  return (
    <div className="Dashboard">
      <Sidebar />
      <div className="Dashboard-stats">
        <h1 className="name">Dashboard</h1>
        <TimeBarChart />
        <CategoryPieChart />
        <BlockedSite />
      </div>
    </div>
  );
}

export default Dashboard;
