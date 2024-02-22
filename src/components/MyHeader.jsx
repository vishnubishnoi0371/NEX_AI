import React, { useState } from "react";
import { Close_line, Nav_line } from "../common_svg/icon";
import Samebtn from "./Samebtn";
import botm from "../Assets/img.webp/header-btm.png";

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
    <div className="lg:pt-[10px] relative z-10 pb-[50px] ">
      <div className="overflow-hidden z-20 relative bg-hero min-h-[100vh] object-cover   bg-no-repeat bg-right md:bg-center ">
        <nav className=" pt-4 lg:pt-[40px]">
          <div className="container max-w-[1195px] mx-auto px-3">
            <div className=" flex  items-center md:justify-end">
              <div className="sm:w-[65%] w-full  flex justify-between items-center ">
                <p className="block md:hidden text-right  font-bold text-[40px] flex-nowrap ff-recharge cursor-pointer text-[#02CDCF]">
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
                      className=" font-normal text-base font-pop hover:text-[#02cdcf]  text-[#ffffff]  duration-300 relative after:absolute after:bg-[#02cdcf] after:w-0 after:h-[3px] after:bottom-[-4px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%] leading-[23.50%] "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#market"
                      className=" font-normal text-base font-pop hover:text-[#02cdcf]  text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#02cdcf] after:w-0 after:h-[3px] after:bottom-[-4px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] "
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#about"
                      className="  font-normal text-base font-pop hover:text-[#02cdcf]  text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#02cdcf] after:w-0 after:h-[3px] after:bottom-[-4px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#chat"
                      className="  font-normal text-base font-pop hover:text-[#02cdcf]  text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#02cdcf] after:w-0 after:h-[3px] after:bottom-[-4px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%] "
                    >
                      NextChat{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={Movement}
                      href="#token"
                      className="  font-normal text-base font-pop hover:text-[#02cdcf]  text-[#ffffff]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#02cdcf] after:w-0 after:h-[3px] after:bottom-[-4px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%]"
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
        <div
          id="home"
          className=" max-w-[1164px] mx-auto px-3 xl:py-0 min-h-[80vh] md:block  flex justify-center flex-col md:pt-8 lg:!pt-[104px] "
        >
          <h1 className=" text-[35px] xxs:text-[45px] xxl:pt-[70px] sm:text-[56px] md:text-[60px] leading-[40px] sm:leading-[75.6px] text-[#FFF] max-w-[577px] ff-recharge font-normal">
            <span className=" font-bold Recharge text-[#02CDCF]">Nexai</span> is
            an advanced AI-powered home assistant
          </h1>
          <p className=" font-pop font-normal leading-[normal] sm:leading-[25.6px]  text-[14px] sm:text-base text-[#FFFFFF] !opacity-70 mt-[6px] sm:mt-[16px]">
            Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
            odio.
          </p>
          <div className=" pt-[20px] 576:pt-[51px]">
            <Samebtn text="Know More" />
          </div>
        </div>
        <img
          className="absolute bottom-0 md:bottom-[-3%] lg:bottom-0 mx-auto w-full"
          src={botm}
          alt="shadow"
        />
      </div>
      <span className="sm:w-[230px] w-[130px] h-[130px] sm:h-[230px] rounded-[500px] blur-[120px] bg-[#02cdcf] !opacity-60 left-[-10%] absolute top-[8%]"></span>
    </div>
  );
};
export default MyHeader;
