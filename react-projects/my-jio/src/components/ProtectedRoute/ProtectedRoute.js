import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Check login status
  return isAuthenticated ? children : <Navigate to="/" />; // Redirect to login if not authenticated
}

export default ProtectedRoute;
