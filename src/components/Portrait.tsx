import { NAME_FIRST, NAME_LAST, PORTRAIT } from "./data";

interface PortraitProps {
  scrollToAbout: () => void;
}

export function Portrait({ scrollToAbout }: PortraitProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center sm:mt-4 md:-mt-48 lg:-mt-64 xl:-mt-96 lg:min-w-screen md:h-full">
      <img
        src={PORTRAIT}
        alt="PORTRAIT"
        className="object-cover w-56 h-56 mx-auto mt-16 rounded-full md:mt-0 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 2xl:w-96 2xl:h-96 xl:h-80"
      />
      <div className="mt-8 md:mt-0">
        <h1 className="pt-4 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          {NAME_FIRST} <span className="text-sky-600">{NAME_LAST}</span>
        </h1>
        <h2 className="pt-4 text-2xl font-bold capitalize sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:pt-8 xl:pt-12">
          Private <span className="text-sky-600">Math</span> Tutor{" "}
          <span className="text-sky-600">&amp;</span>
        </h2>
        <h3 className="pt-2 text-lg font-bold text-center capitalize sm:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          True Hope <span className="text-sky-600">4</span> Success Tutoring
        </h3>
        <button
          onClick={scrollToAbout}
          className="inline-block px-4 py-2 mt-8 font-semibold transition duration-1000 ease-in-out rounded-full shadow-md text-sky-50 bg-sky-700 hover:bg-sky-950 lg:py-4 lg:px-8 xl:py-6 2xl:py-8 2xl:px-12 xl:px-10 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
