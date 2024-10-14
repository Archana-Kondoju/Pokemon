/*
  Provides an authentication context for the React application. 
*/
import React, { createContext, useState, useContext } from 'react';

/*
  The `AuthContext` is used to manage the authentication state of the application,
  including whether the user is currently authenticated and the user's data.
*/
const AuthContext = createContext();

/*
  The `useAuth` hook can be used to access the authentication state and functions
  from within any component in the application.
*/
export const useAuth = () => {
  return useContext(AuthContext);
};

/* 
  The `AuthProvider` component should be used to wrap the entire application
  in order to make the authentication context available to all components.
*/
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Set the user data in state
    setIsAuthenticated(true);
  };
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated,user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
