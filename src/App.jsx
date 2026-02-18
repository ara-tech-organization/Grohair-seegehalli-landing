import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GrohairLanding from './components/GrohairLanding';
import ThankYou from './components/ThankYou';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GrohairLanding />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
