import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Frontpage from './pages/Frontpage';
import Navbar from './components/Navbar';
import Visual2 from './components/Visual2';
import Visual1 from './pages/Visual1';
import Visual5 from './components/Visual5';
import Visual4 from './pages/Visual4';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/visual1" element={<Visual1 />} />
        <Route path="/visual2" element={<Visual2 />} />

        <Route path="/visual4" element={<Visual4 />} />
        <Route path="/visual5" element={<Visual5 />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </div>
  );
}

export default App;