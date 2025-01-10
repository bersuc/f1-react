import React from 'react';
import './css/global.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Pilotos from './components/Pilotos';
import Tabela from './components/Tabela';
import DriverDetail from './components/DriverDetail';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabela" element={<Tabela />} />
          <Route path="/pilotos" element={<Pilotos />} />
          <Route path="/pilotos/:id" element={<DriverDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
