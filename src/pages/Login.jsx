/**
 * The `Login` component is a React component that handles the login functionality for the application.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  /**
   * Retrieves the login function from the authentication context and the navigate function from the react-router-dom library.
   * The login function is used to update the authentication context with user data, and the navigate function is used to navigate to the dashboard after a successful login.
   */
  const { login } = useAuth();
  const navigate = useNavigate();

  // Yup validation schema
  /**
   * Defines the validation schema for the login form using the Yup library.
   * The schema specifies that the username field is required and must be at least 3 characters long,
   * and the password field is required and must be at least 6 characters long.
   */
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Invalid Username'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Invalid Password'),
  });

  // Handle form submission
  /*
   * Handles the login process by updating the authentication context with the user data and navigating to the dashboard.
   */
  const handleLogin = (values) => {
    const userData = { username: values.username }; // Simulate user data
    login(userData); // Update auth context with the user data
    navigate('/dashboard'); // Navigate to dashboard after login
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
       <div className="bg-gradient-to-l to-gray-400 via-gray-600 from-gray-800 p-8 shadow-md rounded-lg max-w-md w-full">
         <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Username field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            /*
             * Renders a row of links for password reset and sign up functionality.
             * The row includes a link to the "Forgot Password?" page and a link to the sign up page.
             */
            <div className='flex flex-row justify-between'>
              <a href="#forgot_password" className="text-sm text-blue-900">Forgot Password?</a>
              <p>Don't have an account?<a href="/signup" className="text-sm text-blue-600">Sign Up</a></p>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Login;
