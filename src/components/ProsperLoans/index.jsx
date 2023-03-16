import Mobile from "../../assets/mobile.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProsperLoans = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="bg-black">
        <div className="w-[90%] mx-auto p-10 flex gap-20">
          <div
            data-aos="fade-right"
            className="flex justify-center  flex-col gap-20"
          >
            <h1 className="text-white text-4xl font-bold text-left">
              What is LendingThree?
            </h1>

            <div className="flex flex-col gap-10">
              <p className="text-white">
                LendingThree is a network connecting lenders who offer
                short-term loans. Our goal is to pair you with one or more
                short-term loan lenders who can provide you with access to
                emergency funds, regardless of the reason. We help you find
                loans of up to $10,000 quickly and with ease.
              </p>
              <div className="flex gap-6">
                <NavLink to="/apply">
                  <button className="text-green-700 border-2 border-green-700 p-3 rounded-md">
                    LEARN MORE
                  </button>
                </NavLink>

                <NavLink to="/apply">
                  <button className="text-blue-900 border-2 border-blue-900 p-3 rounded-md">
                    GET STARTED
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <img src={Mobile} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProsperLoans;
