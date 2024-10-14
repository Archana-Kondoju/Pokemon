/**
 * The `Dashboard` component represents the main dashboard view of the application.
 * It displays a sidebar menu with navigation links and a main content area that
 * shows an overview, reports, and analytics sections.
 * 
 * The component uses the `useAuth` hook to retrieve the authenticated user's data,
 * which is displayed in the header. The sidebar is toggled on mobile and tablet
 * devices using the `sidebarOpen` state.
 */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../AuthContext'; // Importing the AuthContext

const Dashboard = () => {
  const { user } = useAuth(); // Retrieve the authenticated user's data
  /**
   * The `sidebarOpen` state variable controls whether the sidebar is open or closed on mobile and tablet devices.
   * The `setSidebarOpen` function is used to update the `sidebarOpen` state.
   */
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile and Tablet Menu Icon */}
      <div className="bg-gray-800 text-white p-4 md:hidden flex justify-between items-center">
        <div className="text-lg font-bold">My Dashboard</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <FaTimes className="w-6 h-6" /> 
          ) : (
            <FaBars className="w-6 h-6" />  
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } md:block md:w-64 bg-gray-800 text-white min-h-screen p-4 absolute md:relative z-10`}
      >
        <div className="text-lg font-bold mb-6 text-center">My Dashboard</div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#profile" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                Profile
              </a>
            </li>
            <li className="mb-4">
              <a href="#settings" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                Settings
              </a>
            </li>
            <li className="mb-4">
              <a href="/" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="text-gray-700">Hello, {user?.username || user?.email || 'Guest'}</div>

            {/* User Profile Icon */}
            <div
              className="w-8 h-8 rounded-full bg-gray-800 text-gray-100 flex justify-center items-center border-2 border-gray-300"
              style={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              {user?.username? user.username.charAt(0).toUpperCase() : user?.email ? user.email.charAt(0).toUpperCase() : 'G'} {/* First letter of username */}
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-2">Overview</h2>
            <p className="text-gray-600">
              Quick summary of key metrics and data.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-2">Reports</h2>
            <p className="text-gray-600">
              Generate reports based on user activity.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-2">Analytics</h2>
            <p className="text-gray-600">
              View detailed analytics and insights.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
