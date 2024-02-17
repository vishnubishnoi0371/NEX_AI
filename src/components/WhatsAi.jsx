import React from "react";
import AI from "../Assets/img.webp/what_ai.webp";
import Samebtn from "./Samebtn";
const WhatsAi = () => {
  return (
    <div className="pt-[60px] md:pb-[50px] md:mt-[60px]">
      <div className=" container mx-auto max-w-[1246px] px-3 nter">
        <div className=" whats_bg   bg-no-repeat bg-center  rounded-[24px]">
          <div className="  max-w-[1246px] px-3 border-[1px] border-white rounded-[24px] whats_bg  bg-no-repeat bg-center">
            <div className="flex flex-row  items-center justify-center flex-wrap lg:flex-nowrap min-h-[810px]  -mx-3 xl:px-[95px]">
              <div className=" lg:w-1/2 w-full px-3 ">
                <p className=" text-[32px] sm:text-[40px] ff-recharge font-bold text-[#02CDCF] pt-5 lg:pt-0 leading-[50.5px]  mb-2">
                  What is NexAi?
                </p>
                <p className="text-base font-pop font-normal  text-[#b4b4b4] leading-[25.5px] lg:max-w-[564px] mb-2">
                  Beyond its convenience, Nexai revolutionizes the way you
                  interact with your home environment. It enhances productivity,
                  efficiency, and overall well-being. From managing your
                  schedules to transforming the way you experience smart living,
                  Nexai opens up a world of possibilities.
                </p>
                <p className="text-base font-pop font-normal  text-[#b4b4b4] leading-[25.5px] lg:max-w-[564px] mb-[40px]">
                  Nexai's software can be installed on all your smart devices,
                  including smartphones, computers, smart TVs, and kitchen
                  appliances. It acts as a centralized control hub, allowing you
                  to manage and interact with all your devices seamlessly.
                  Whether it's adjusting the temperature, turning on appliances,
                  or even accessing files on your home computer from anywhere,
                  Nexai empowers you with effortless control.
                </p>

                <span>
                  <Samebtn text="Learn More" />
                </span>
              </div>
              <div className=" lg:w-7/12 w-full px-3">
                <img className="w-100" src={AI} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAi;