import React, { useState } from "react";

const NAME_FIRST = "Hope";
const NAME_LAST = "True";
const NAVBAR_TITLE = "True Hope 4 Success";

function App() {
  // Define a state to track whether the sidebar (navbar) is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar (navbar)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToAbout = () => {
    const about = document.querySelector("#about");

    // Wait briefly before scrolling
    setTimeout(() => {
      about?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="scroll-behavior-smooth">
      {/* Top Navbar (Visible on Mobile) */}
      <nav
        className={`md:hidden fixed top-0 w-full`}
        style={{
          background: isSidebarOpen
            ? "linear-gradient(to bottom, #082f49, #6B7280)"
            : "linear-gradient(to bottom, #082f49, #082f49)",
        }}
      >
        {/* Hamburger Button */}
        <div className="flex justify-between items-center py-2 px-4">
          <div className="text-sky-50 text-2xl">{NAVBAR_TITLE}</div>
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
            <a href="#" className="block py-2 hover:text-sky-400">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#about"
              className="scroll-link block py-2 hover:text-sky-400"
            >
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#skills" className="block py-2 hover:text-sky-400">
              Qualifications
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
        </ul>
      </nav>

      {/* Centered Content */}
      <section className="w-full md:w-4/5 bg-sky-100 h-screen flex justify-center items-center p-8">
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
      </section>

      {/* About Section */}
      <section id="about" className="bg-sky-50 py-16 text-sky-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold  text-center">About Me</h2>
          <p className="m-4 text-left">
            Hello, I'm Hope True, a dedicated math tutor with over 5 years of
            experience. I hold a B.S. in Mathematics from Fresno State and am a
            Certified Tutor. I'm passionate about helping students succeed, from
            elementary to college level, including those with learning
            disabilities.
          </p>
          <p className="m-4 text-left">
            Whether in-person in Monterey, CA, or online, I cover various
            subjects like Algebra, Geometry, Trigonometry, Pre-Calculus,
            Calculus, Statistics, and more. Let's work together to achieve your
            academic goals.
          </p>

          {/* Add more content about your organization */}
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="bg-sky-100 py-16 text-sky-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold  text-center">Qualifications</h2>
          <li>
            <ul>
              <li className="m-4 text-left">
                <span className="font-bold">B.S. in Mathematics</span> from
                California State University, Fresno as an{" "}
                <span className="font-bold">Honor Graduate</span>
              </li>
              <li className="m-4 text-left">
                <span className="font-bold">Certified Tutor</span> from the
                College Reading and Learning Association (CRLA)
              </li>
              <li className="m-4 text-left">
                <span className="font-bold">5+ Years</span> of experience
                tutoring math
              </li>
              <li className="m-4 text-left">
                <span className="font-bold">Mother</span> of 4.
              </li>
            </ul>
          </li>
        </div>
      </section>
    </div>
  );
}

export default App;
