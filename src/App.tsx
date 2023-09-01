import React, { useState } from "react";

const NAME_FIRST = "Hope";
const NAME_LAST = "True";
const NAVBAR_TITLE = "True Hope 4 Success";
const PORTRAIT = "/home_grad.jpg";

// Define an array of items for the sidebar
const SIDEBAR_ITEMS = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "qualifications", text: "Qualifications" },
  { id: "availability", text: "Availability" },
  { id: "rates", text: "Rates" },
  { id: "contact", text: "Contact" },
];

const QUALIFICATIONS_TEXT = [
  {
    text: "Bachelor of Science in Sociology from Fresno State University with a Minor in Mathematics",
  },
  {
    text: "Associate's Degree in Mathematics from Fresno City College",
  },
  {
    text: "Certified Tutor from the College Reading and Learning Association (CRLA)",
  },
  {
    text: "Honor Graduate at Fresno State University and Fresno City College",
  },
  {
    text: "5+ Years of Experience Tutoring Math",
  },
  {
    text: "Mother of 4",
  },
];

function App() {
  // Define a state to track whether the sidebar (navbar) is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar (navbar)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    setTimeout(() => {
      el?.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }, 200);
  };

  // Function to handle clicking on a sidebar item
  const handleSidebarItemClick = (id: string) => {
    // Scroll to the corresponding section
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close the sidebar
    setIsSidebarOpen(false);
  };

  return (
    <div className="scroll-behavior-smooth mx-auto">
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
        {/* Render the sidebar items */}
        <ul
          className={`${
            isSidebarOpen
              ? "max-h-screen opacity-100 transition-all duration-1000 ease-in-out"
              : "max-h-0 opacity-0 transition-all duration-1000 ease-in-out"
          } overflow-hidden text-sky-50 ml-4`}
        >
          {SIDEBAR_ITEMS.map((item) => (
            <li className="mb-2" key={item.id}>
              <a
                href={`#${item.id}`}
                className="block py-2 hover:text-sky-400"
                onClick={() => handleSidebarItemClick(item.id)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Centered Content */}
      <main
        className="w-full md:w-4/5 bg-sky-100 flex justify-center items-center p-8"
        id="home"
      >
        {/* Main content goes here */}
        <div className="text-center sm:mt-28">
          <img
            src={PORTRAIT}
            alt="PORTRAIT"
            className="rounded-full w-52 h-52 object-cover mx-auto mt-16 md:mt-0"
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
          <h2 className="text-3xl font-bold text-center pb-4">About Me</h2>
          <p className="m-4 text-left">
            Hello, I'm{" "}
            <span className="font-bold">{NAME_FIRST + " " + NAME_LAST}</span>, a
            devoted <span className="font-bold capitalize">math tutor</span>{" "}
            with over <span className="font-bold">5 years</span> of experience.
            I have earned a{" "}
            <span className="font-bold">Bachelor of Science in Sociology</span>{" "}
            with a <span className="font-bold">Minor in Mathematics</span> from
            Fresno State University and hold an{" "}
            <span className="font-bold">
              Associate's Degree in Mathematics{" "}
            </span>
            from Fresno City College. I am also a{" "}
            <span className="font-bold">Certified Tutor</span> accredited by the
            College Reading and Learning Association (CRLA). Furthermore, I
            proudly achieved{" "}
            <span className="font-bold capitalize">honor graduate</span> status
            at both Fresno State University and Fresno City College.
          </p>
          <p className="m-4 text-left">
            With my extensive background, I specialize in various subjects
            including{" "}
            <span className="font-bold">
              Algebra, Geometry, Trigonometry, Pre-Calculus, Calculus,
              Statistics
            </span>
            , and more. My passion lies in assisting students of all levels,
            including those with learning disabilities, in achieving their
            academic goals. Whether you prefer in-person tutoring in Monterey,
            CA, or online sessions, I'm here to help. Plus, I bring valuable
            experience as a <span className="font-bold">Mother of 4</span>,
            making me particularly attuned to the needs of young learners. Let's
            work together to excel in mathematics!
          </p>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="bg-sky-100 py-16 text-sky-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center pb-4">
            Qualifications
          </h2>
          <ul className="list-none">
            {QUALIFICATIONS_TEXT.map((item, index) => (
              <li key={index} className="m-4 text-left">
                <span className="font-bold">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="bg-sky-50 py-16 text-sky-900">
        <div className="container mx-auto capitalize">
          <h2 className="text-3xl font-bold  text-center pb-4">Availability</h2>
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
          <h2 className="text-3xl font-bold pb-4">Rates</h2>
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
          <h2 className="text-3xl pb-4">Contact</h2>
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
