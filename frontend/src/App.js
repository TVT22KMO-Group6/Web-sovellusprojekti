import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Frontpage from './pages/Frontpage';
import Navbar from './components/Navbar';
import Visual2 from './components/Visual2';
import Visual1 from './pages/Visual1';
import Visual5 from './components/Visual5';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';
import Visual4 from './pages/Visual4';

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
        <Route path="/visual1" element={<Visual1 />} />
        <Route path="/visual2" element={<Visual2 />} />

        <Route path="/visual4" element={<Visual4 />} />
        <Route path="/visual5" element={<Visual5 />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
      <RegisterModal isOpen={isRegisterModalOpen} closeModal={closeRegisterModal} />
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />

    </div>
  );
}

export default App;