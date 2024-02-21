import React from "react";
import hand from "../Assets/img.webp/sec-1-img.webp";
import Samebtn from "./Samebtn";

const Sec_One = () => {
  return (
    <div className="md:pt-[50px] md:mt-[50px] relative sm:pb-[60px] md:mb-[40px] overflow-hidden">
      <div className=" container mx-auto max-w-[1246px] px-3 ">
        <div className="flex md:flex-row flex-col-reverse items-center justify-center flex-wrap  -mx-3 ">
          <div className=" md:w-1/2 w-full px-3 pt-8 md:pt-0">
            <img
              data-aos="zoom-in-up"
              className=" mx-auto w-full"
              src={hand}
              alt="hand"
            />
          </div>
          <div className=" md:w-1/2 w-full px-3 lg:ps-[40px]">
            <p
              data-aos="zoom-in-up"
              className="text-[32px] sm:text-[40px] ff-recharge font-bold text-[#02CDCF] leading-[normal] sm:leading-[50.5px] md:max-w-[517px] mb-2"
            >
              Ai-Powered Home Assistant
            </p>
            <p
              data-aos="zoom-in-up"
              className="sm:text-base z-30 text-[14px] font-pop font-normal  text-[#b4b4b4] leading-[25.5px] md:max-w-[517px] mb-[6px]"
            >
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p
              data-aos="zoom-in-up"
              className="sm:text-base z-30 text-[14px] font-pop font-normal  text-[#b4b4b4] leading-[25.5px] md:max-w-[517px] mb-[6px]"
            >
              Nexai offers an incredibly futuristic experience. It can take the
              initiative to ask about your day, schedule meetings, provide
              timely reminders
            </p>
            <p
              data-aos="zoom-in-up"
              className="sm:text-base z-30 text-[14px] font-pop font-normal  text-[#b4b4b4] leading-[25.5px] md:max-w-[517px] mb-3 sm:mb-[40px]"
            >
              assist with cooking by suggesting ingredients, track your fitness
              and nutrition goals, and even handle bill payments.
            </p>
            <span data-aos="zoom-in-up" className="z-30">
              <Samebtn data-aos="zoom-in-up" text="Learn More" />
            </span>
          </div>
        </div>
      </div>
      <span className="sm:w-[230px]  w-[130px] h-[130px] sm:h-[230px] rounded-[500px]  blur-[100px] bg-[#02cdcf] !opacity-60 right-[-10%] z-10 absolute bottom-[33%]"></span>
      <span className=" sm:w-[400px] w-[130px] h-[130px]  sm:h-[400px] rounded-[500px]  blur-[100px] bg-[#02cdcf] !opacity-30 left-[15%] z-10 absolute bottom-[17%]"></span>
    </div>
  );
};

export default Sec_One;
