import heroImage from "../../assets/hero_image.jpg";
import logo from "../../assets/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div
          className="flex flex-col gap-2"
          style={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <h1 data-aos="fade-down" className="text-5xl font-semibold">
            Request up to $10,000 Now!
          </h1>
          <h2 data-aos="fade-down" className="text-2xl">
            It's as simple as one, two, three
          </h2>
          <div>
            <NavLink to="/apply">
              <button
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1000"
                type="button"
                className="text-white bg-gradient-to-r hover:from-green-400 to-blue-500 from-pink-500 hover:to-yellow-500 p-4 rounded-xl"
              >
                GET STARTED
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className=" fixed top-0 p-4 w-full bg-[#101f30] bg-opacity-90">
        <div className="flex justify-between items-center w-[95%] mx-auto">
          <div className="h-7 w-28 ">
            <img
              src={logo}
              className="object-cover h-full w-full"
              alt="Your Image"
            />
          </div>
          <div data-aos="zoom-in">
            <button
              type="button"
              className="text-white bg-gradient-to-r hover:to-green-400 hover:from-blue-500 from-pink-500 to-yellow-500 p-4 rounded-xl"
            >
              <Link to="/apply">RETURNING CUSTOMER</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
