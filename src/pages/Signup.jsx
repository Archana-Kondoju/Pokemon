/**
 * The `Signup` component is a React component that renders a sign-up form for users. It uses the Formik library for form management and Yup for form validation.
 */
 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const navigate = useNavigate();

  // Yup validation schema for signup

 /* 
  * The component includes the following form fields:
  * - Username: Required, minimum 3 characters
  * - Email: Required, must be a valid email address
  * - Password: Required, minimum 6 characters
  * - Confirm Password: Required, must match the password
  */
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Password confirmation is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  // Handle form submission
  /* When the form is submitted, the `handleSignup` function is called, 
   * which logs the form values to the console and navigates the user to the `/dashboard` route.
   */

  const handleSignup = (values) => {
    console.log('Signup values:', values);
    // Add signup logic here (e.g., API call)
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
       <div className="bg-gradient-to-l to-gray-400 via-gray-600 from-gray-800 p-8 shadow-md rounded-lg max-w-md w-full">
         <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSignup(values)}
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

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="email"
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

            {/* Confirm Password field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            /*
             * The component also includes a link to the login page for users who already have an account.
             */
            <p className="text-center mt-4">Already have an account? <a href="/" className="text-blue-500">Login</a></p>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Signup;