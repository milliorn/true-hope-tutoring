import { QUALIFICATIONS_IMG, QUALIFICATIONS_TEXT } from "./data";

export function Qualifications() {
  return (
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
          className="block object-cover w-56 h-56 mx-auto mb-4 border-2 sm:w-60 sm:h-60 rounded-2xl border-sky-600 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 md:w-7/12 md:h-1/6"
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
  );
}
