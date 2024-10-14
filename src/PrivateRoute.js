/*
 * A React component that renders its children only if the user is authenticated.
 * If the user is not authenticated, it redirects them to the root path ('/').
 * 
 * This component uses the `useAuth` hook from the `AuthContext` to get the
 * authentication state of the user.
 */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';  // Import the AuthContext

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();  // Get the authentication state

  return isAuthenticated ? children : <Navigate to="/" />;  // Redirect to login if not authenticated
};

export default PrivateRoute;
