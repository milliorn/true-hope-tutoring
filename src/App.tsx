import React, { useState } from "react";

function App() {
  // Define a state to track whether the sidebar (navbar) is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar (navbar)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="md:flex">
        {/* Mobile Navbar (Visible on Mobile) */}
        <nav
          className={`md:hidden`}
          style={{
            background: isSidebarOpen
              ? "linear-gradient(to bottom, #111827, #6B7280)"
              : "linear-gradient(to bottom, #111827, #111827)",
          }}
        >
          {/* Hamburger Button */}
          <div className="flex justify-between items-center py-2 px-4">
            <div className="text-sky-50 text-2xl">True Hope 4 Success</div>
            <button
              onClick={toggleSidebar}
              className="text-sky-500 hover:text-sky-100 focus:outline-none focus:text-sky-100"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Hamburger or X Icon */}
                {isSidebarOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v1H4zm0 5h16v1H4zm0 5h16v1H4z"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Dropdown Navigation */}
          <ul
            className={`${
              isSidebarOpen
                ? "max-h-screen opacity-100 transition-all duration-1000 ease-in-out"
                : "max-h-0 opacity-0 transition-all duration-1000 ease-in-out"
            } overflow-hidden text-sky-50 ml-4`}
          >
            {/* List of clickable anchor elements */}
            <li className="mb-2">
              <a href="#about" className="block py-2 hover:text-sky-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#skills" className="block py-2 hover:text-sky-400">
                Skills
              </a>
            </li>
            <li className="mb-2">
              <a href="#education" className="block py-2 hover:text-sky-400">
                Education
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="block py-2 hover:text-sky-400">
                Contact
              </a>
            </li>
            {/* Add more sections as needed */}
          </ul>
        </nav>

        {/* Sidebar (Hidden on Mobile) */}
        {/* You can remove this section as it's no longer needed */}

        {/* Main Content */}
        <main className="w-full md:w-4/5 bg-sky-100 h-screen p-8">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
}

export default App;
