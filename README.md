
# React Web Application - Login, Signup, and Dashboard

This project is a simple React web application that features a responsive Login and Signup page, along with a basic Dashboard. The application uses **Tailwind CSS** for styling, **Formik** for form management, and **Yup** for form validation.

## Features

- **Login and Signup Forms**: 
  - Responsive design using Tailwind CSS.
  - Form validation with Formik and Yup.
  - Navigation to Dashboard upon successful login/signup.
  
- **Dashboard**:
  - Basic layout with a sidebar and header.
  - Sidebar navigation for pages like Profile and Settings.
  - Responsive and hides the sidebar for mobile and tablet views.
  
- **React Icons**: Used for icons in the dashboard.
  
- **Protected Routes**: Only authenticated users can access the dashboard.

## Tech Stack

- **React**: Front-end library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Formik**: Form management library.
- **Yup**: Form validation library.
- **React Router**: Routing library for navigation.
- **React Icons**: For adding icons to the UI.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-login-signup-dashboard.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-login-signup-dashboard
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. The application should now be running on `http://localhost:3000`.

## Folder Structure

```bash
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   ├── App.js
│   ├── AuthContext.js
│   ├── index.js
└── README.md
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Form Validation

The form validation is handled using **Formik** and **Yup**. Here’s how validation works:

- The login form validates:
  - Username: Required, minimum 3 characters.
  - Password: Required, minimum 6 characters.
  
- The signup form validates:
  - Username: Required, minimum 3 characters.
  - Email: Must be a valid email.
  - Password: Required, minimum 6 characters.
  - Confirm Password: Must match the password.

## Routing

The app uses **React Router** for navigation between pages:

- **Protected Routes**: The dashboard is a protected route, meaning only authenticated users can access it.
- **Navigation**: The app navigates between Login, Signup, and Dashboard pages based on user actions.

## Authentication

- A simple authentication context (`AuthContext`) is implemented to simulate user login and logout.
- After login/signup, the user is redirected to the dashboard.

## Responsive Design

- **Tailwind CSS** is used for styling the entire app.
- The design adapts to different screen sizes (mobile, tablet, desktop).
- The sidebar on the dashboard is hidden on mobile and tablet views for better user experience.

## Future Enhancements

- Add API integration for real authentication.
- Extend the dashboard functionality to include more pages and features.
- Implement persistent authentication using JWT or session storage.

## License

This project is licensed under the MIT License.
