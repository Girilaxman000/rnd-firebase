import logo from "../../assets/logo.svg";
import file from "../../assets/ios-files-logo.png";
import { Link, Router } from "react-router-dom";
import { db } from "../../../firebase";
import { useState } from "react";
import { doc, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const Details = (e) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const myCollectionRef = collection(db, "lending_users_data");

    addDoc(myCollectionRef, {
      Legal_First_Name: firstName,
      Legal_Middle_Name: middleName,
      Legal_Last_Name: lastName,
      Legal_Email: email,
      Phone_Number: phoneNumber,
      Date_Of_Birth: DOB,
    })
      .then((docRef) => {
        toast.success("Your response has been submitted successfully!");
        Router;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oops, something went wrong!");
      });
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className=" bg-[#101f30] p-4 w-full ">
        <div className="flex justify-between items-center w-[95%] mx-auto">
          <div className="h-7 w-28 ">
            <Link to="/">
              <img
                src={logo}
                className="object-cover h-full w-full cursor-pointer  "
                alt="Your Image"
              />
            </Link>
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r hover:to-green-400 hover:from-blue-500 from-pink-500 to-yellow-500 p-4 rounded-xl"
          >
            <Link to="/apply">RETURNING CUSTOMER</Link>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <form
          className="col-span-2 w-full p-4 md:w-full lg:w-[70%] ml-auto  sm:p-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap flex-col gap-5">
            <div className="flex items-center">
              <img src={file} className="w-10  " alt="Your Image" />

              <h1 className="font-sans font-semibold text-2xl">
                PERSONAL DETAILS
              </h1>
            </div>

            <div>
              <p>Tell us how much you need...</p>
            </div>
            <hr />
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*Legal First Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Legal First Name"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div>
                  <p className="font-bold">*Legal Middle Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Legal Middle Name"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*Legal Last Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Legal Last Name"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">*Email</p>
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*Phone Number</p>
                  <input
                    required
                    type="text"
                    placeholder="Phone Number"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default Details;
