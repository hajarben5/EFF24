import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Formulaire from './Formulaire'; 
import Expert from './Expert'; 
import Experts2 from './Experts2'; 
import expertsData from './data';  

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/formulaire">Formulaire</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Expert">Experts 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experts2">Experts 2</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/formulaire" element={<Formulaire experts={expertsData} />} />
          <Route path="/Expert" element={<Expert />} />
          <Route path="/experts2" element={<Experts2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
