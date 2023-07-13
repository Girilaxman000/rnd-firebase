import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="bg-gradient-to-r to-cyan-500 from-blue-500    p-5 ">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row space-y-4 justify-between items-center">
          <h1 className="color text-2xl text-white font-semibold">
            Copyrights © 2017 All Rights Reserved by LendingThree.
          </h1>
          <div data-aos="flip-up">
            <button
              type="button"
              className="text-white bg-blue-900  p-4 rounded-xl"
            >
              <Link to="/apply">RETURNING CUSTOMER</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-10">
          <p className="text-[17px]">
            Because each lender is different and LendingThree has no control
            over the rates and fees each lender charges, we urge you to
            carefully review the terms associated with the offer before
            accepting or declining. Please remember that you are never under any
            obligation to accept an offer from a lender and you can cancel the
            entire process at any time at your discretion. LendingThree cannot
            be held accountable for any charges or terms presented to you by a
            lender, and we are in no way responsible for any agreement between
            you and a lender. For details, questions or concerns regarding your
            loan, please contact your lender directly. Please note that lender
            terms may vary, and lenders may use different criteria to determine
            whether an applicant is eligible for a loan. Not all who submit a
            request for credit will be chosen by a lender or approved for loan.
            If you are not chosen by a lender in the participating lender
            network, your information may be offered to participating third
            party advertisers and generators for consideration.
          </p>
          <p className="text-[17px]">
            It is not our policy to perform credit checks on any of our
            customers. However, some of the lenders in our network might perform
            a credit check before making their decisions using the three major
            reporting bureaus like, TransUnion, Experian and Equifax, as well as
            other alternate sources of consumer information. In the end, your
            credit rating may be impacted by a particular lender's actions. If
            you do not pay back your loan by the specified due date, your lender
            may choose to report this delinquency to one or more of the major
            credit bureaus, which could negatively affect your rating.
          </p>
          <p className="text-[17px]">
            Any of the information that you read on this website may be changed
            at any time without any prior notice. We can not guarantee that your
            submitted information will be provided to a lender or that a lender
            will approve you for a loan. Not all lenders can provide up to
            $1,500. The loans that may be offered by a lender are expensive
            forms of credit and are intended to provide you with short-term
            financing to solve immediate financial needs and should not be
            considered a long-term solution. If you are having serious financial
            issues, it is often best to consult with a professional credit
            counselor.
          </p>
          <p className="text-[17px]">
            LendingThree strives to keep you updated with all state laws
            governing short-term loans. As you may know, these regulations vary
            from state to state. Visit the Rates & Fees page to view information
            regarding availability, maximum loan amounts, and loan terms, as
            well as the information for your state regulator. Rates and fees
            will vary depending upon lender.
          </p>
          <p className="text-[17px]">
            If you are given an option to obtain a loan from a tribal lender,
            these lenders are owned by independent sovereign nations and may not
            be required to follow local or state laws regarding rates, fees and
            other loan terms. Please understand that the tribal lender's rates
            and fees may be higher than state-licensed lenders. Additionally,
            tribal lenders may require you to agree to resolve any disputes in a
            tribal jurisdiction.
          </p>
          <p className="text-[17px]">
            Testimonial Disclaimer: These are not actual testimonials, but they
            are representative of LendingThree services.
          </p>
          <h1 className="text-[20px] font-bold">Advertising Disclosures</h1>
          <p className="text-[17px]">
            LendingThree does not charge you any fees to submit a loan request,
            be connected with a lender, or to receive loan offers or quotes. If
            you receive a quote or a loan offer, the lender with which you may
            be connected is available to review its terms with you at no cost.
            It's possible that the lender may require a fee to process your
            formal loan application and/or credit report, but until you agree to
            pay the lender any fee(s) or sign any loan agreements, you may shop
            with LendingThree at no cost.
          </p>
          <p className="text-[17px]">
            The offers that you might receive are from companies from which
            LendingThree receives compensation. This compensation may impact
            what offers you receive and how/where products appear on this site
            (including, for example, the order in which they appear).
            LendingThree does not include all lenders available in the
            marketplace. If you are presented with an offer, carefully review
            the details before signing.?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
