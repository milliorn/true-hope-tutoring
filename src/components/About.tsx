import {
  ABOUT_IMG,
  NAME_FIRST,
  NAME_LAST
} from "./data";

export function About() {
  return (
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
          <span className="font-bold">{NAME_FIRST + " " + NAME_LAST}</span>, a
          devoted <span className="font-bold capitalize">math tutor</span> with
          over <span className="font-bold">5 years</span> of experience. I have
          earned a{" "}
          <span className="font-bold">Bachelor of Science in Sociology</span>{" "}
          with a <span className="font-bold">Minor in Mathematics</span> from
          Fresno State University and hold an{" "}
          <span className="font-bold">Associate's Degree in Mathematics </span>
          from Fresno City College. I am also a{" "}
          <span className="font-bold">Certified Tutor</span> accredited by the
          College Reading and Learning Association (CRLA). Furthermore, I
          proudly achieved{" "}
          <span className="font-bold capitalize">honor graduate</span> status at
          both Fresno State University and Fresno City College.
        </p>
        <img
          src={ABOUT_IMG}
          alt="ABOUT_IMG"
          className="block object-cover w-56 h-56 mx-auto mb-4 border-2 rounded-3xl border-sky-600 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-96 lg:h-96 md:my-8 lg:my-12 xl:my-16 2xl:my-20 2xl:w-11/12 2xl:h-11/12" />
        <p className="m-4 text-left sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:m-8">
          With my extensive background, I specialize in various subjects
          including{" "}
          <span className="font-bold">
            Algebra, Geometry, Trigonometry, Pre-Calculus, Calculus, Statistics
          </span>
          , and more. My passion lies in assisting students of all levels,
          including those with learning disabilities, in achieving their
          academic goals. Whether you prefer in-person tutoring in Monterey, CA,
          or online sessions, I'm here to help. Plus, I bring valuable
          experience as a <span className="font-bold">Mother of 4</span>, making
          me particularly attuned to the needs of young learners. Let's work
          together to excel in mathematics!
        </p>
      </div>
    </section>
  );
}
