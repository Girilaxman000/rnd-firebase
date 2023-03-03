const HomeForm = () => {
  return (
    <>
      <div className="bg-gradient-to-r to-cyan-500 from-blue-500 p-10 ">
        <div className="w-[90%] mx-auto flex justify-between">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Name"
            className={`rounded-md outline-none border-none w-44 py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none focus:border-indigo-500`}
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Name"
            className={` rounded-md w-44 outline-none border-none py-2 pr-2 pl-8 border-2  border-gray-300 focus:outline-none focus:border-indigo-500`}
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Name"
            className={`rounded-md w-44 py-2 outline-none border-none pr-2 pl-8 border-2  border-gray-300 focus:outline-none focus:border-indigo-500`}
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Name"
            className={`rounded-md w-44 py-2 pr-2 outline-none border-none pl-8 border-2  border-gray-300 focus:outline-none focus:border-indigo-500`}
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Name"
            className={`rounded-md w-44 py-2 pr-2 outline-none border-none pl-8 border-2  border-gray-300 focus:outline-none focus:border-indigo-500`}
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Name"
            className={`rounded-md w-44 py-2 pr-2  outline-none border-none pl-8 border-2  border-gray-300 focus:outline-none focus:border-indigo-500`}
          />
          <button
            type="submit"
            className="bg-[#08c177] text-white p-3 rounded-lg border "
          >
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeForm;
