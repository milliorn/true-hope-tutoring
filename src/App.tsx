import React, { useState } from "react";

function App() {
  // Define a state to track whether the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="md:flex">
        {/* Mobile Navbar (Visible on Mobile) */}
        <nav className={`md:hidden bg-gray-800`}>
          {/* Hamburger Button */}
          <div className="flex justify-between items-center py-2 px-4">
            <div className="text-white text-2xl font-bold">
              True Hope 4 Success
            </div>
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Hamburger Icon */}
                {isSidebarOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 14H6v-1h12zm0-5H6V8h12zm0-4H6V4h12z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v1H4zm0 5h16v-1H4zm0 5h16v-1H4z"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Sidebar (Hidden on Mobile) */}
        <aside
          className={`md:block w-3/12 bg-gray-800 h-screen transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out duration-300`}
        >
          {/* Sidebar content */}
          <ul className="text-white text-center pt-4">
            {/* List of clickable anchor elements */}
            <li className="mb-2">
              <a href="#about" className="block hover:text-blue-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#skills" className="block hover:text-blue-400">
                Skills
              </a>
            </li>
            <li className="mb-2">
              <a href="#education" className="block hover:text-blue-400">
                Education
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="block hover:text-blue-400">
                Contact
              </a>
            </li>
            {/* Add more sections as needed */}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-4/5 bg-white p-8">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
}

export default App;
