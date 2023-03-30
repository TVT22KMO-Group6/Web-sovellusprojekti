import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Frontpage from './pages/Frontpage';
import Navbar from './components/Navbar';
import Visual2 from './components/Visual2';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/visual2" element={<Visual2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;