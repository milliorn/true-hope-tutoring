import React, { useState } from "react";

const NAME_FIRST = "Hope";
const NAME_LAST = "True";

function App() {
  // Define a state to track whether the sidebar (navbar) is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar (navbar)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="md:flex">
        {/* Mobile Navbar (Visible on Mobile) */}
        <nav
          className={`md:hidden`}
          style={{
            background: isSidebarOpen
              ? "linear-gradient(to bottom, #082f49, #6B7280)"
              : "linear-gradient(to bottom, #082f49, #082f49)",
          }}
        >
          {/* Hamburger Button */}
          <div className="flex justify-between items-center py-2 px-4">
            <div className="text-sky-50 text-2xl">True Hope 4 Success</div>
            <button
              onClick={toggleSidebar}
              className="text-sky-200 hover:text-sky-100 focus:outline-none focus:text-sky-100 border rounded border-sky-200"
            >
              <svg
                className="h-8 w-8 fill-current"
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

        {/* Centered Content */}
        <main className="w-full md:w-4/5 bg-sky-50 h-screen flex justify-center items-center p-8">
          {/* Main content goes here */}
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              {NAME_FIRST} <span className="text-sky-400">{NAME_LAST}</span>
            </h1>
            <h2 className="text-2xl font-bold capitalize pt-4">
              Private <span className="text-sky-400">Math</span> Tutor{" "}
              <span className="text-sky-400">&amp;</span>
            </h2>
            <h3 className="font-bold capitalize text-center pt-4 text-lg">
              True Hope <span className="text-sky-400">4</span> Success Tutoring
            </h3>
            {/* Learn More Button */}
            <button
              onClick={scrollToAbout}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-1000 ease-in-out inline-block m-4"
            >
              Learn More
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
