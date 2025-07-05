import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Bundles from './components/Bundles';
import Success from './components/Success';
import Director from './components/Director';
import Payment from './components/Payment';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Hai English Admin</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={handleLoginClick} />
      <Hero />
      <About />
      <Courses />
      <Bundles />
      <Success />
      <Director />
      <Payment />
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleCloseModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;