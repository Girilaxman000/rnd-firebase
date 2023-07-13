import cursor from "../../assets/icons8-cursor-50.png";
import techometer from "../../assets/icons8-speedometer-50.png";
import chart from "../../assets/icons8-line-chart-48.png";

const Work = () => {
  return (
    <>
      <div className="p-9 sm:p-14">
        <h1 className="text-center text-5xl font-bold ">How it works</h1>
        <div
          className="grid grid-cols-1 space-y-6 space-x-0 sm:grid-cols-3 sm:space-x-5 sm:space-y-0
         mt-10"
        >
          <div className="flex items-start gap-3">
            <img src={cursor} alt="" />
            <div>
              <h1 className="text-[20px] font-semibold">SUBMIT ONLINE</h1>
              <p>Fill out our short form secured with 256-bit technology.</p>
            </div>
          </div>
          <div className="flex ml-0 mt-0 items-start gap-3">
            <img src={techometer} alt="" />
            <div>
              <h1 className="text-[20px] font-semibold">RECEIVE RESPONSE</h1>
              <p>
                If approved, review all the terms and rates on the lender's
                website.
              </p>
            </div>
          </div>
          <div className="flex ml-0 mt-0 items-start gap-3">
            <img src={chart} alt="" />
            <div>
              <h1 className="text-[20px] font-semibold">CHECK YOUR ACCOUNT</h1>
              <p>
                Get money deposited into your bank account as soon as the next
                business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
