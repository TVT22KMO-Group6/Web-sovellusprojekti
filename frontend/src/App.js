import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Frontpage from './pages/Frontpage';
import Navbar from './components/Navbar';
import Visual2 from './components/chart/Visual2';
import Visual1 from './pages/Visual1';
import Visual5 from './components/chart/Visual5';
import Visual4 from './pages/Visual4';
import Nav1 from './pages/Nav1';
import Nav2 from './pages/Nav2';
import Nav3 from './pages/Nav3';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterModal from './components/user/RegisterModal';
import LoginModal from './components/user/LoginModal';
import Dashboard from './pages/Dashboard';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  

  return (
    <div className="App">
      <Navbar openRegisterModal={openRegisterModal}
              openLoginModal={openLoginModal} />
      <Routes>
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> }/>
        <Route path="/visual1" element={<Visual1 />} />
        <Route path="/visual2" element={<Visual2 />} />

        <Route path="/visual4" element={<Visual4 />} />
        <Route path="/visual5" element={<Visual5 />} />
        <Route path="/" element={<Frontpage />} />
        <Route path="/N1" element={<Nav1 />} />
        <Route path="/N2" element={<Nav2 />} />
        <Route path="/N3" element={<Nav3 />} />


      </Routes>
      <RegisterModal isOpen={isRegisterModalOpen} closeModal={closeRegisterModal} />
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />

    </div>
  );
}

export default App;