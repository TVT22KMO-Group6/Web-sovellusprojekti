import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import Frontpage from './pages/Frontpage';
import Navbar from './components/Navbar';
import Visual2 from './components/chart/Visual2Chart';
import Visual1 from './components/chart/Visual1Chart';
import Visual5 from './components/chart/Visual5Chart';
import Visual4 from './components/chart/Visual4Chart';
import Visual3 from './components/chart/Visual3Chart';
import Nav1 from './pages/Nav1';
import Nav2 from './pages/Nav2';
import Nav3 from './pages/Nav3';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterModal from './components/user/Register';
import LoginModal from './components/user/Login';
import UserVisual from './pages/UserVisual';
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
        <Route path="/newuservisual" element={ <ProtectedRoute> <Nav3 /> </ProtectedRoute> }/>
        <Route path="/visual1" element={<Visual1 />} />
        <Route path="/visual2" element={<Visual2 />} />
        <Route path="/visual3" element={<Visual3 />} />
        <Route path="/visual4" element={<Visual4 />} />
        <Route path="/visual5" element={<Visual5 />} />
        <Route path="/N1" element={<Nav1 />} />
        <Route path="/N2" element={<Nav2 />} />
        <Route path="/:url" element={<UserVisual />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
      <RegisterModal isOpen={isRegisterModalOpen} closeModal={closeRegisterModal} />
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />

    </div>
  );
}

export default App;