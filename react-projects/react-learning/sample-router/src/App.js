import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
