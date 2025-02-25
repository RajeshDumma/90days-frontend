import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Mobile from './components/Mobile/Mobile';
import True5g from './components/True5g/True5g';
import JioFiber from './components/JioFiber/JioFiber';
import JioHome from './components/JioHome/JioHome';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router> {/* ✅ Router must wrap everything */}
      <Header />
      <Navbar /> {/* ✅ Ensure Navbar is inside Router */}
      <Routes>
        <Route path="/" element={<Login />} /> 

        {/* Protected Routes */}
        <Route path="/JioHome" element={<ProtectedRoute><JioHome /></ProtectedRoute>} />
        <Route path="/Mobile" element={<ProtectedRoute><Mobile /></ProtectedRoute>} />
        <Route path="/True5g" element={<ProtectedRoute><True5g /></ProtectedRoute>} />
        <Route path="/JioFiber" element={<ProtectedRoute><JioFiber /></ProtectedRoute>} />
        <Route path="/SignUp" element={<ProtectedRoute><SignUp /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
