import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Frontpage from './pages/Frontpage';
import Navbar from './components/Navbar';
import Visual2 from './components/Visual2';
import Visual1 from './pages/Visual1';
import Visual5 from './components/Visual5';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/visual2" element={<Visual2 />} />
          <Route path="/visual1" element={<Visual1 />} />
          <Route path="/visual5" element={<Visual5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;