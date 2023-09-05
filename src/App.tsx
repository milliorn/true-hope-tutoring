import { useState } from "react";
import {
  ABOUT_IMG,
  ADDITIONAL_FEES,
  AVAILABILITY_IMG,
  CONTACT,
  EMAIL_ADDRESS,
  NAME_FIRST,
  NAME_LAST,
  NAVBAR_TITLE,
  PORTRAIT,
  QUALIFICATIONS_IMG,
  QUALIFICATIONS_TEXT,
  SIDEBAR_ITEMS,
  TUTORING_FEES,
} from "./data";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleSidebarItemClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="mx-auto scroll-behavior-smooth 2xl:container">
      <nav
        className={`md:hidden fixed top-0 w-full bg-gradient-to-b from-sky-800 to-sky-600`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <div className="text-2xl text-sky-50 sm:text-3xl">{NAVBAR_TITLE}</div>
          <button
            onClick={toggleSidebar}
            className="border rounded text-sky-200 hover:text-sky-100 focus:outline-none focus:text-sky-100 border-sky-200"
          >
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
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
                className="block py-2 text-xs hover:text-sky-400 sm:text-base"
                onClick={() => handleSidebarItemClick(item.id)}
              >
                {item.text}
              </a>
            </li>
          ))}
          <div className="text-xs text-center sm:text-sm">
            <a
              href="https://github.com/milliorn/true-hope-tutoring"
              className="text-sky-50 hover:text-sky-900"
              target="_blank"
              rel="noreferrer"
            >
              <span className="">
                &copy; {new Date().getFullYear()} Source Code
              </span>
            </a>
          </div>
        </ul>
      </nav>

      <nav
        className={`hidden md:block fixed top-0 h-full p-4 lg:p-6 xl:p-8 2xl:p-10 bg-gradient-to-b from-sky-800 to-sky-600`}
      >
        <div className="flex flex-col justify-center h-full text-center text-white">
          {SIDEBAR_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block py-2 lg:py-6 xl:py-8 2xl:py-10 hover:text-sky-400 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
              onClick={() => handleSidebarItemClick(item.id)}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="relative">
          <a
            href="https://github.com/milliorn/true-hope-tutoring"
            className="text-sky-50 hover:text-sky-900"
            target="_blank"
            rel="noreferrer"
          >
            <p className="absolute inset-x-0 top-0 text-xs leading-[0] text-center">
              &copy; {new Date().getFullYear()} Source Code
            </p>
          </a>
        </div>
      </nav>

      <main className="w-full bg-sky-100 text-sky-950" id="home">
        <div className="md:grid md:grid-cols-1 md:grid-rows-6 md:grid-flow-col md:gap-4 md:pl-36 lg:pl-44 xl:pl-52 2xl:pl-60">
          <section className="flex flex-col items-center justify-center min-h-screen text-center sm:mt-4 md:-mt-48 lg:-mt-64 xl:-mt-96 lg:min-w-screen md:h-full">
            <img
              src={PORTRAIT}
              alt="PORTRAIT"
              className="object-cover w-56 h-56 mx-auto mt-16 rounded-full md:mt-0 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 2xl:w-96 2xl:h-96 xl:h-80"
            />
            <div className="mt-8 md:mt-0">
              {" "}
              {/* Removed md:-mt-16 */}
              <h1 className="pt-4 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                {NAME_FIRST} <span className="text-sky-400">{NAME_LAST}</span>
              </h1>
              <h2 className="pt-4 text-2xl font-bold capitalize sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:pt-8 xl:pt-12">
                Private <span className="text-sky-400">Math</span> Tutor{" "}
                <span className="text-sky-400">&amp;</span>
              </h2>
              <h3 className="pt-2 text-lg font-bold text-center capitalize sm:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                True Hope <span className="text-sky-400">4</span> Success
                Tutoring
              </h3>
              <button
                onClick={scrollToAbout}
                className="inline-block px-4 py-2 mt-8 font-semibold text-white transition duration-1000 ease-in-out rounded-full shadow-md bg-sky-500 hover:bg-sky-600 lg:py-4 lg:px-8 xl:py-6 2xl:py-8 2xl:px-12 xl:px-10 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
              >
                Learn More
              </button>
            </div>
          </section>

          <section
            id="about"
            className="min-h-screen py-24 bg-sky-50 lg:py-32 xl:py-40 lg:px-4 xl:px-8"
          >
            <div className="mx-auto">
              <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl xl:pb-8 2xl:pb-12">
                About Me
              </h2>
              <p className="m-4 text-left 2xl:m-8 sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Hello, I'm{" "}
                <span className="font-bold">
                  {NAME_FIRST + " " + NAME_LAST}
                </span>
                , a devoted{" "}
                <span className="font-bold capitalize">math tutor</span> with
                over <span className="font-bold">5 years</span> of experience. I
                have earned a{" "}
                <span className="font-bold">
                  Bachelor of Science in Sociology
                </span>{" "}
                with a <span className="font-bold">Minor in Mathematics</span>{" "}
                from Fresno State University and hold an{" "}
                <span className="font-bold">
                  Associate's Degree in Mathematics{" "}
                </span>
                from Fresno City College. I am also a{" "}
                <span className="font-bold">Certified Tutor</span> accredited by
                the College Reading and Learning Association (CRLA).
                Furthermore, I proudly achieved{" "}
                <span className="font-bold capitalize">honor graduate</span>{" "}
                status at both Fresno State University and Fresno City College.
              </p>
              <img
                src={ABOUT_IMG}
                alt="ABOUT_IMG"
                className="block object-cover w-56 h-56 mx-auto mb-4 border-2 rounded-3xl border-sky-600 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-96 lg:h-96 md:my-8 lg:my-12 xl:my-16 2xl:my-20 2xl:w-11/12 2xl:h-11/12"
              />
              <p className="m-4 text-left sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:m-8">
                With my extensive background, I specialize in various subjects
                including{" "}
                <span className="font-bold">
                  Algebra, Geometry, Trigonometry, Pre-Calculus, Calculus,
                  Statistics
                </span>
                , and more. My passion lies in assisting students of all levels,
                including those with learning disabilities, in achieving their
                academic goals. Whether you prefer in-person tutoring in
                Monterey, CA, or online sessions, I'm here to help. Plus, I
                bring valuable experience as a{" "}
                <span className="font-bold">Mother of 4</span>, making me
                particularly attuned to the needs of young learners. Let's work
                together to excel in mathematics!
              </p>
            </div>
          </section>

          <section
            id="qualifications"
            className="min-h-screen py-24 bg-sky-100 lg:py-32 xl:py-40 2xl:py-16 lg:px-4 xl:px-8"
          >
            <div className="container mx-auto">
              <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                Qualifications
              </h2>
              <img
                src={QUALIFICATIONS_IMG}
                alt="QUALIFICATIONS_IMG"
                className="block object-cover w-56 h-56 mx-auto mb-4 border-2 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-2xl border-sky-600 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 2xl:w-max 2xl:h-max"
              />
              <ul className="list-none">
                {QUALIFICATIONS_TEXT.map((item, index) => (
                  <li key={index} className="m-4 lg:m-6 xl:m-8 2xl:m-10">
                    <span className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="availability"
            className="flex flex-col items-center justify-center min-h-screen py-16 bg-sky-50 lg:py-32 2xl:py-0 xl:py-40"
          >
            <div className="container mx-auto text-center">
              <div className="flex flex-col items-center">
                <h2 className="pb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20">
                  Availability
                </h2>
                <h3 className="mt-4 mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  I am available at the following locations:
                </h3>
                <ul className="text-sm font-bold list-none sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  <li className="m-4 cursor-pointer lg:m-6 xl:m-8 2xl:m-10 hover:text-sky-400">
                    <a href="https://www.google.com/maps/place/2100+Garden+Rd+c312,+Monterey,+CA+93940">
                      2100 Garden Rd c312, Monterey, CA 93940
                    </a>
                  </li>
                  <li className="m-4 lg:m-6 xl:m-8 2xl:m-10">Zoom</li>
                  <li className="m-4 lg:m-6 xl:m-8 2xl:m-10">
                    At your home ($25.00 travel fee)
                  </li>
                </ul>
                <img
                  src={AVAILABILITY_IMG}
                  alt="AVAILABILITY_IMG"
                  className="block object-cover w-56 h-56 mx-auto mb-4 border-2 cursor-pointer rounded-xl border-sky-600 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-3/6 xl:h-3/6 2xl:w-3/6 md:mb-12 lg:my-16"
                />
              </div>
            </div>
          </section>

          <section
            id="rates"
            className="min-h-screen py-24 bg-sky-100 lg:py-32 xl:py-40 2xl:py-16 lg:px-4 xl:px-8"
          >
            <div className="container mx-auto">
              <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                Tutoring Fees
              </h2>
              <ul className="list-none">
                {TUTORING_FEES.map((category, index) => (
                  <li key={index} className="m-4 lg:m-6 xl:m-8 2xl:m-10">
                    <span className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                      {category.category}
                    </span>
                    <ul className="pl-6 list-none">
                      {Array.isArray(category.fees) ? (
                        category.fees.map((fee, subIndex) => (
                          <li
                            key={subIndex}
                            className="py-1 sm:py-px md:py-2 lg:py-3 xl:py-4 2xl:py-5 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                          >
                            {fee}
                          </li>
                        ))
                      ) : (
                        <li className="py-1">{category.fees}</li>
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
              <li className="m-4 list-none lg:m-6 xl:m-8 2xl:m-10">
                <span className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                  Additional Fees:
                </span>
                <ul className="pt-2 pl-6 list-none">
                  {ADDITIONAL_FEES.map((fee, index) => (
                    <li
                      key={index}
                      className="py-1 sm:py-px md:py-2 lg:py-3 xl:py-4 2xl:py-5 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                    >
                      {fee}
                    </li>
                  ))}
                </ul>
              </li>
            </div>
          </section>

          <section
            id="contact"
            className="flex items-center justify-center min-h-screen py-16 bg-sky-50 lg:py-32 xl:py-40 2xl:py-0"
          >
            <div className="container mx-auto font-bold text-center capitalize sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <img
                src={CONTACT}
                alt="CONTACT"
                className="block object-cover w-56 h-56 mx-auto mb-4 border-2 rounded-3xl border-sky-600 md:w-64 md:h-64 lg:w-96 lg:h-96 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 2xl:w-max 2xl:h-max"
              />
              <h2 className="pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20">
                Contact
              </h2>
              <h3 className="m-4 lg:m-6 xl:m-8 2xl:m-10">
                True Hope 4 Success Tutoring
              </h3>
              <h3 className="m-4 lg:m-6 xl:m-8 2xl:m-10">
                <a
                  className="cursor-pointer hover:text-sky-800"
                  href="tel:5599301934"
                >
                  Phone: (559) 930-1934
                </a>
              </h3>
              <h3 className="m-4 lg:m-6 xl:m-8 2xl:m-10">
                <a
                  className="cursor-pointer hover:text-sky-800"
                  href={`mailto:${EMAIL_ADDRESS}`}
                >
                  Email: <span className="lowercase">{EMAIL_ADDRESS}</span>
                </a>
              </h3>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
