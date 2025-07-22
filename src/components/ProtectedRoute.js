// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userToken');

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />; 
  }
  return children;
};

export default ProtectedRoute;