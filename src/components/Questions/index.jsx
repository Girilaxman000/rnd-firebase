import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Questions = () => {
  return (
    <>
      <div className="bg-gradient-to-r to-cyan-500 from-blue-500 p-12">
        <h1 className="text-center text-white text-4xl font-bold">
          Have a question? We've got answers!
        </h1>
        <div className="w-full px-4 pt-8">
          <div className="w-[50%] mx-auto">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-[16px] font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What is a short-term loan?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-[16px] rounded-xl bg-white mt-2 text-gray-500">
                    A short-term loan is a way for consumers to get the money
                    they need in emergencies without the same hassle that is
                    associated with other forms of consumer credit. Getting
                    money from credit cards or traditional banks can be time
                    consuming and frustrating. Short-term loans are
                    headache-free and relatively easy for most people to
                    obtain—even if they have been denied other forms of credit
                    due to their credit histories. In just a few short minutes,
                    consumers can request and be approved for a short-term loan
                    of up to $10,000.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-[16px] font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>What are the qualifications?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-[16px] rounded-xl bg-white mt-2 text-gray-500">
                    In most cases, the criteria you must meet in order to be
                    eligible for a short-term loan are the same across all
                    lenders. You must be 18 years of age or older, a legal
                    resident of the United States, have a steady source of
                    monthly income (e.g. employment, SSI, etc.), have a bank
                    account that is not currently overdrawn, and have a working
                    telephone number and email address. Some lenders may provide
                    you with funds even if you are not employed, but you must be
                    able to show proof of steady income from various sources
                    such as SSI or unemployment. Remember that each lender has
                    its own rules and regulations and LendingThree.com cannot
                    guarantee that a lender will approve you for a loan.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-[16px] font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Are short-term loans expensive?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-[16px] rounded-xl bg-white mt-2 text-gray-500">
                    Short-term loans certainly have a reputation for being
                    expensive, but they are truthfully no more expensive than
                    getting a credit card loan or overdrawing a checking
                    account. Think of it this way: while the interest rates for
                    short-term loans are indeed higher, these loans are made to
                    be paid off within a very short period of time. As long as
                    consumers are able to stick to the terms of the loan and pay
                    them off according to the original agreement, it can
                    certainly be a very convenient and affordable option.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-[16px] font-medium text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>When should I take out a short-term loan?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-[16px] rounded-xl bg-white mt-2 text-gray-500">
                    You would not overdraw your checking account or get a loan
                    from your credit card without good reason, so the same
                    principles should be applied to short-term loans. They are
                    designed to be used during financial crises as a short-term
                    solution and never as a way to dig oneself out of a mountain
                    of debt. We encourage consumers to use their loans
                    responsibly and never request money for frivolous spending.
                    Consumers who have serious financial trouble should consider
                    hiring a professional credit counselor to help them prepare
                    budgets and pay off debt.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
