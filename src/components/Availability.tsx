import { AVAILABILITY_IMG } from "./data";

export function Availability() {
  return (
    <section
      id="availability"
      className="flex flex-col items-center justify-center min-h-screen py-16 md:h-min bg-sky-50 lg:py-32 2xl:py-0 xl:py-40"
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
            className="block object-cover w-56 h-56 mx-auto mb-4 border-2 cursor-pointer rounded-xl border-sky-600 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-3/6 xl:h-3/6 2xl:w-3/6 md:mb-12 lg:my-16" />
        </div>
      </div>
    </section>
  );
}
