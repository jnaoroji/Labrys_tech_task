import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Crypto from './components/card.js';
import MyTokens from './pages/myTokens.js';


function App() {
  const [myTokens, setMyTokens] = useState([]);

  const handleAddToMyTokens = (token) => {
    setMyTokens([...myTokens, token]);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
                path="/" 
                element={<Crypto />}
              />
          <Route 
                path="/myTokens" 
                element={<myTokens />}
              />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
