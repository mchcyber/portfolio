import { FaLocationArrow } from "react-icons/fa6";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const email = "networkingservicecode@gmail.com"; // Replace with your actual email address

  return (
    <div id="Contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Bring your next project to life with precision and expertise.
              </h2>
              <p className="text-sm md:text-base mt-2">
                Together, we’ll develop a tailored strategy that not only meets
                your goals but exceeds your expectations, delivering exceptional,
                professional results that drive success.
              </p>
            </div>
            <div>
              <a
                href={`mailto:${email}`} // Using mailto to open default email client
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border-gray-950"
              >
                <span className="font-semibold">Contact Me</span>
                <FaLocationArrow className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
