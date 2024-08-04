import React from 'react';
import HomeSearchBar from './components/HomeSearchBar';
import './styles/HomeSearchBar.css';

function App() {
  return (
    <div className="header">
      <div className="logo">StayAway</div>
      <div className="search-bar-container">
        <HomeSearchBar />
      </div>
      <div className="profile-icon"></div>
    </div>
  );
}

export default App;
