/**
 * The main React component for the application.
 * It sets up the routing and authentication context for the application.
 * The component renders the Login, Signup, and Dashboard pages, with the Dashboard page being a private route that requires authentication.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Route for the Login page */}
            <Route path="/" element={<Login />} />
            
            {/* Route for the Signup page */}
            <Route path="/signup" element={<Signup />} />
            
            {/* Private route for the Dashboard, accessible only after login */}
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
