import React from 'react';
import HomeSearchBar from './components/search/HomeSearchBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">StayAway</h1>
        <div className="search-bar-container">
          <HomeSearchBar />
        </div>
        <div className="login-circle" onClick={() => console.log('Iniciar sesión')}>
          {/* Icono o texto podría ir aquí */}
        </div>
      </header>
    </div>
  );
}

export default App;
