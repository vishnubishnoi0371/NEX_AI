import React from "react";
import { Face, Share, Twiter } from "../common_svg/icon";

const My_Footer = () => {
  return (
    <div className="footer_bg bg-no-repeat bg-center object-cover md:pt-[50px] sm:mt-[50px]">
      <div className=" container mx-auto max-w-[1164px]  px-3 ">
        <div className="flex md:flex-row lg:min-h-[322px] items-center justify-between flex-wrap  -mx-3 ">
          <div className=" sm:5/12 md:w-1/3   px-3">
            <p className="text-base font-bold md:mt-[-110px]  ff-recharge text-[#ffffff] leading-[25.6px] mb-5 md:max-w-[356px]">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/login/"
                className="hover:translate-y-[-8px]  cursor-pointer transition-all duration-500"
                target="blank"
              >
                <Face />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="blank"
                className="rounded-full border-[2.5px] hover:translate-y-[-8px]  cursor-pointer transition-all duration-500 border-solid border-[#02cdcf] flex items-center justify-center w-[38px] h-[38px]"
              >
                <Twiter />
              </a>
              <a
                href="https://web.telegram.org/k/"
                className="hover:translate-y-[-8px]  cursor-pointer transition-all duration-500"
                target="blank"
              >
                <Share />
              </a>
            </div>
          </div>
          <div className=" md:w-5/12  px-3">
            <div className="flex md:flex-row items- justify- flex-wrap py-6 md:pt-0  -mx-3 ">
              <div className=" w-6/12  px-3">
                <p className="text-lg font-bold ff-recharge text-[#ffffff] mb-2 sm:mb-5">
                  Quick links
                </p>
                <ul className="ps-0">
                  <li className="mb-1 md:mb-5 ">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge hover:opacity-[1]  text-[#ffffff] opacity-[.7] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge hover:opacity-[1]  text-[#ffffff] opacity-[.7] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge hover:opacity-[1]  text-[#ffffff] opacity-[.7] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge hover:opacity-[1]  text-[#ffffff] opacity-[.7] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Tokens
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge hover:opacity-[1]  text-[#ffffff] opacity-[.7] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      NextChat
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge  hover:opacity-[1] text-[#ffffff] opacity-[.7] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-6/12  px-3">
                <p className="text-lg font-bold ff-recharge text-[#ffffff] mb-2 sm:mb-5">
                  Information's
                </p>
                <ul className="ps-0">
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge  text-[#ffffff] opacity-[.7] hover:opacity-[1] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge  text-[#ffffff] opacity-[.7] hover:opacity-[1] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Phone
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge  text-[#ffffff] opacity-[.7] hover:opacity-[1] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="mb-1 md:mb-5">
                    <a
                      href="#"
                      className="font-bold text-base ff-recharge  text-[#ffffff] opacity-[.7] hover:opacity-[1] relative not-italic leading-[19.2px] before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="max-w-full h-[2px] text-[#FCFCFC]"></hr>
        <p className="text-base leading-[19px] ff-recharge py-5 text-[#ffffff] opacity-[0.7] font-bold text-center">
          @Copyright.nexai
        </p>
      </div>
    </div>
  );
};

export default My_Footer;
