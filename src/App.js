// App.js
import React from 'react';
import './App.css'; // Import CSS file for styling'..


function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-title">
          <h1>Online Parking System</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
            <li>
              <a href="/user">User</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <div className="welcome-message">
          <h2>Welcome to Online Parking System</h2>
        </div>
        <div className="parking-lot">
          <img src="park.jpg" alt="Parking Lot" />
        </div>
      </main>
    </div>
  );
}

export default App;