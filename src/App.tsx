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
            <a href="#qualifications" className="block py-2 hover:text-sky-400">
              Qualifications
            </a>
          </li>
          <li className="mb-2">
            <a href="#availability" className="block py-2 hover:text-sky-400">
              Availability
            </a>
          </li>
          <li className="mb-2">
            <a href="#rates" className="block py-2 hover:text-sky-400">
              Rates
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
      <main className="w-full md:w-4/5 bg-sky-100 h-screen flex justify-center items-center p-8">
        {/* Main content goes here */}
        <div className="text-center">
          <img
            src="../public/home_grad.jpg"
            alt="Your Portrait"
            className="rounded-full w-52 h-52 object-cover mx-auto mt-16"
          />
          <h1 className="text-5xl font-bold pt-4">
            {NAME_FIRST} <span className="text-sky-400">{NAME_LAST}</span>
          </h1>
          <h2 className="text-2xl font-bold capitalize pt-4">
            Private <span className="text-sky-400">Math</span> Tutor{" "}
            <span className="text-sky-400">&amp;</span>
          </h2>
          <h3 className="font-bold capitalize text-center pt-2 text-lg">
            True Hope <span className="text-sky-400">4</span> Success Tutoring
          </h3>
          {/* Learn More Button */}
          <button
            onClick={scrollToAbout}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-1000 ease-in-out inline-block my-4"
          >
            Learn More
          </button>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="bg-sky-50 py-16 text-sky-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold  text-center">About Me</h2>
          <p className="m-4 text-left">
            Hello, I'm Hope True, a devoted math tutor with over 5 years of
            experience. I have earned a Bachelor of Science in Sociology with a
            Minor in Mathematics from Fresno State University and hold an
            Associate's Degree in Mathematics from Fresno City College. I am
            also a Certified Tutor accredited by the College Reading and
            Learning Association (CRLA). Furthermore, I proudly achieved honor
            graduate status at both Fresno State University and Fresno City
            College.
          </p>
          <p className="m-4 text-left">
            With my extensive background, I specialize in various subjects
            including Algebra, Geometry, Trigonometry, Pre-Calculus, Calculus,
            Statistics, and more. My passion lies in assisting students of all
            levels, including those with learning disabilities, in achieving
            their academic goals. Whether you prefer in-person tutoring in
            Monterey, CA, or online sessions, I'm here to help. Plus, I bring
            valuable experience as a mother of 4, making me particularly attuned
            to the needs of young learners. Let's work together to excel in
            mathematics!
          </p>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="bg-sky-100 py-16 text-sky-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Qualifications</h2>
          <ul className="list-none">
            <li className="m-4">
              <span className="font-bold">
                Bachelor of Science in Sociology
              </span>{" "}
              from<span className="font-bold"> Fresno State University </span>{" "}
              with a <span className="font-bold">Minor in Mathematics</span>
            </li>
            <li className="m-4 text-left">
              <span className="font-bold">
                Associate's Degree in Mathematics{" "}
              </span>
              from <span className="font-bold">Fresno City College</span>
            </li>
            <li className="m-4 text-left">
              <span className="font-bold">Certified Tutor</span> from the{" "}
              <span className="font-bold">
                College Reading and Learning Association (CRLA)
              </span>
            </li>
            <li className="m-4 text-left">
              <span className="font-bold">Honor Graduate</span> at{" "}
              <span className="font-bold">Fresno State University</span> and{" "}
              <span className="font-bold">Fresno City College</span>
            </li>
            <li className="m-4 text-left">
              <span className="font-bold">5+ Years</span> of Experience{" "}
              <span className="font-bold">Tutoring Math</span>
            </li>
            <li className="m-4 text-left">
              <span className="font-bold">Mother</span> of 4.
            </li>
          </ul>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="bg-sky-50 py-16 text-sky-900">
        <div className="container mx-auto capitalize">
          <h2 className="text-3xl font-bold  text-center">Availability</h2>
          <h3 className="text-lg text-center m-4">
            I am available at the following locations:
          </h3>
          <ul className="font-bold list-none text-center">
            <li className="m-4 cursor-pointer hover:text-sky-400">
              <a href="https://www.google.com/maps/place/2100+Garden+Rd+c312,+Monterey,+CA+93940">
                2100 Garden Rd c312, Monterey, CA 93940
              </a>
            </li>
            <li className="m-4">Zoom</li>
            <li className="m-4">At your home ($25.00 travel fee)</li>
          </ul>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="bg-sky-100 py-16 text-sky-900">
        <div className="container mx-auto text-center capitalize">
          <h2 className="text-3xl font-bold">Rates</h2>
          <ul className="list-none">
            <li className="m-4">
              <span className="font-bold">
                Call or email for pricing information
              </span>
            </li>
            <li className="m-4">
              <span className="font-bold">Group rates available</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-sky-50 py-16 text-sky-900">
        <div className="container mx-auto capitalize text-center font-bold">
          <h2 className="text-3xl m-4">Contact</h2>
          <h3 className=" m-4"> True Hope 4 Success Tutoring</h3>
          <h3 className="m-4">
            <a className="cursor-pointer" href="tel:5599301934">
              Phone: (559) 930-1934
            </a>
          </h3>
          <h3 className="m-4">
            <a className="mailto" href="mailto:truehopetutoring@gmail.com">
              Email:{" "}
              <span className="lowercase">truehopetutoring@gmail.com</span>
            </a>
          </h3>
        </div>
      </section>
    </div>
  );
}

export default App;
