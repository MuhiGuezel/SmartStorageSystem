import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './components/Home/HomePage';
import StoragesPage from './components/Storage/StoragesPage';
import OrdersPage from './components/Order/OrdersPage';
import PasswordInput from './components/shared/PasswordInput';
import ConnectDevice from './components/Connect/ConnectDevice';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage to persist authentication status
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle successful password entry
  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Persist the status
  };

  return isAuthenticated ? (
    <Router>
      <div className="h-screen bg-purple-700 text-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/storages" element={<StoragesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/connect" element={<ConnectDevice />}/>
        </Routes>
      </div>
    </Router>
  ) : (
    <PasswordInput onSuccess={handlePasswordSuccess} />
  );
}

export default App;
