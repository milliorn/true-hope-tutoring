import { ADDITIONAL_FEES, TUTORING_FEES } from "./data";

export function Rates() {
  return (
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
        <p className="pb-8 font-bold text-center capitalize cursor-pointer sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20 hover:text-sky-600">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/17bYBhZZgOqL9MJm0ACH-I1UU3YC4w8cn7DRAMJB5YP0/edit#heading=h.gyhdmbxflob3"
          >
            click here for additional information
          </a>
        </p>
      </div>
    </section>
  );
}
