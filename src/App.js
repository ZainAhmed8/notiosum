import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="nav-item">Home</div>
          <div className="nav-item">TODO</div>
          <div className="nav-item">MENTOR</div>
          <div className="nav-item">MESSAGES</div>
          <div className="nav-item profile">Profile</div>
        </nav>
      </header>
      <main className="main-content">
        <h1>Welcome to notiosum</h1>
        <div className="picture-frame">
          <p></p>
        </div>
      </main>
    </div>
  );
}

export default App;