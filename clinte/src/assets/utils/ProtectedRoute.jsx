import React, { useState, useEffect } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import axios from './axiosConfig';
import './loader.css'
import { toast } from 'react-toastify';

export const ProtectedRoute = ({ allowedRoles }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState('')

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get('/api/v1/loginAuth');

        if (response.data.success) {
          setIsAuthenticated(true);
          setRole(response.data.role);
        } else {
          clearLocalStorage()

        }
      } catch (error) {
        clearLocalStorage()
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <>
      <center>
        <div className="boxify d-flex justify-content-center position-absolute top-50">
          <div class="fancy-spinner">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="dot"></div>
          </div>
        </div>
      </center>
    </>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />; 
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    toast.error('Unauthorized Access');
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
