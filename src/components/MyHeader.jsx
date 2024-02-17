import React, { useState } from "react";
import { Close_line, Nav_line } from "../common_svg/icon";
import Samebtn from "./Samebtn";

const MyHeader = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className="pt-[10px] relative z-10 pb-[50px] ">
      <div className="overflow-hidden z-20 relative bg-hero min-h-[100vh] object-cover   bg-no-repeat bg-right md:bg-center ">
        <nav className=" pt-4 md:pt-[40px]">
          <div className="container max-w-[1195px] mx-auto px-3">
            <div className=" flex  items-center md:justify-end">
              <div className="sm:w-[65%] w-full  flex justify-between items-center ">
                <p className="block md:hidden text-right  font-bold text-[40px] flex-nowrap ff-recharge text-[#02CDCF]">
                  Nex<span className="text-white">Ai</span>
                </p>
                <ul
                  className={`${
                    show ? "left-0" : "left-[-100%]"
                  }  z-40 min-h-screen fixed flex items-center justify-center lg:min-h-fit lg:static w-full lg:w-auto
              top-0 bg-[#041717] lg:bg-[unset]  max-lg:w-[100%] max-lg:flex-col flex-row max-lg:min-h-screen gap-5  right-0 ps-0 duration-[400ms] transition-all ease-linear`}
                >
                  <li>
                    <a
                      onClick={Movement}
                      href="#home"
                      className=" font-normal text-base font-pop text-[#ffffff]  duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%] leading-[23.50%] "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#market"
                      className=" font-normal text-base font-pop text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] "
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#about"
                      className="  font-normal text-base font-pop text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#chat"
                      className="  font-normal text-base font-pop text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] "
                    >
                      NextChat{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#token"
                      className="  font-normal text-base font-pop text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#fff] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%]"
                    >
                      Tokens{" "}
                    </a>
                  </li>
                  <div className=" flex  items-center  gap-2">
                    <div className="xs_1:hidden block text-nowrap  ">
                      <Samebtn text="Sign up" />
                    </div>
                  </div>
                </ul>
                <div className=" hidden xs_1:block ">
                  <div className="flex items-center  gap-2">
                    <div className=" text-nowrap  ">
                      <Samebtn text="Sign up" />
                    </div>
                  </div>
                </div>

                <div
                  className=" relative  z-50  block lg:hidden  "
                  onClick={() => {
                    setshow(!show);
                  }}
                >
                  {show ? (
                    <span>
                      <Close_line />
                    </span>
                  ) : (
                    <span>
                      <Nav_line />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div id="home" className="container max-w-[1194px] px-3">
          <div className="flex-col flex sm:ps-5 lg:ms-[50px] lg:ps-[100px] ">
            <p className="max-w-[577px] font-bold text-[40px] sm:text-[60px] mb-2 mt-0 sm:mt-[50px] pt-[50px] sm:leading-[75.6px] ff-recharge text-[#02CDCF]">
              Nexai{" "}
              <span className="font-normal text-[#ffffff] ff-neuo">
                {" "}
                is an advanced AI-powered home assistant
              </span>
            </p>
            <p className="font-pop text-base font-normal sm:mt-2 leading-[25.6px] text-[#b3b6b8]">
              Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
              odio.
            </p>
            <div className="mt-3 sm:mt-14">
              <Samebtn text="Know More" />
            </div>
          </div>
        </div>
      </div>
      <span className="sm:w-[230px] w-[130px] h-[130px] sm:h-[230px] rounded-[500px]  blur-[120px] bg-[#02cdcf] opacity-60 left-[-10%] absolute top-[8%]"></span>
    </div>
  );
};

export default MyHeader;
