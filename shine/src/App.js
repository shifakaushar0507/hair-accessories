import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SideNavbar from './components/SideNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNavbar />
        <header className="App-header">
          <h1>Welcome to Shine</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
