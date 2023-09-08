import { CONTACT, EMAIL_ADDRESS } from "./data";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen py-16 md:pb-72 lg:pb-96 bg-sky-50"
    >
      <div className="container mx-auto font-bold text-center capitalize md:mb-96 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        <h2 className="pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20">
          Contact
        </h2>
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
        <img
          src={CONTACT}
          alt="CONTACT"
          className="block object-cover w-56 h-56 mx-auto mb-4 border-2 rounded-3xl border-sky-600 lg:w-96 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 md:w-96 md:h-4/6 xl:w-fit"
        />
        <h3 className="m-4 lg:m-6 xl:m-8 2xl:m-10">
          True Hope 4 Success Tutoring
        </h3>
      </div>
    </section>
  );
}
