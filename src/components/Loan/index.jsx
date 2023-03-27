import cursor from "../../assets/icons8-cursor-50.png";
import techometer from "../../assets/icons8-speedometer-50.png";
import chart from "../../assets/icons8-line-chart-48.png";
import bank from "../../assets/icons8-bank-building-50.png";
import lock from "../../assets/icons8-unlock-private-50.png";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
const Loan = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="w-[90%] mx-auto pt-20 pb-20">
        <div
          data-aos="fade-down"
          data-aos-easing="ease"
          className="grid grid-cols-1 space-y-8  sm:grid-cols-3 space-y-6"
        >
          <div className="flex gap-5 items-start">
            <img src={cursor} alt="" />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">WHY REQUEST A LOAN ONLINE?</h1>
              <p>
                Requesting a loan online is very easy and quick. You don't need
                to wait in long lines to request a loan or leave the comfort of
                your own home.
              </p>
            </div>
          </div>
          <div className="flex mt-0 ml-0 gap-5 items-start">
            <img src={techometer} alt="" />
            <div>
              <h1 className="text-2xl font-bold">CREDIT SCORE HAS NO IMPACT</h1>
              <p>
                Your credit history or lack of credit do not impact your ability
                to obtain the funds you need timely.
              </p>
            </div>
          </div>
          <div className="flex mt-0 ml-0 gap-5 items-start">
            <img src={chart} alt="" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={techometer} alt="" />
                <p>All credit scores considered</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={bank} alt="" />
                <p>All credit scores considered</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={lock} alt="" />
                <p>All credit scores considered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r to-cyan-500 from-blue-500 p-5 ">
        <div className="w-[90%] sm:w-[35%] mx-auto  flex flex-col  gap-3 sm:flex-row  ">
          <p className="text-white">
            Have your personal and banking information ready when you complete
            our form and you will get a decision in minutes.
          </p>
          <div className="flex items-center ">
            <NavLink to="/apply">
              <button className="bg-blue-600 text-white h-[50px] w-40 flex justify-center items-center rounded-lg">
                GET STARTED
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan;
