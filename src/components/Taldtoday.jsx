import React from "react";
import Samebtn from "./Samebtn";
import ep_r from "../Assets/img.webp/ep_right.png";

const Taldtoday = () => {
  return (
    <div className="relative md:pt-[50px] md:mt-[50px] md:pb-[50px]">
      <div className=" container mx-auto max-w-[1164px] px-3  md:py-[50px] mb-[39px] md:mt-[50px]">
        <div className="md:flex  items-center justify-between md:justify-between mt-[50px]">
          <div className="flex justify-center md">
            <p className="sm:text-[40px] text-[32px] z-20 font-bold ff-recharge text-center md:text-start sm:leading-[52px] text-[#ffffff] max-w-[517px]">
              Ready to get started{" "}
              <span className="text-[#02CDCF]"> Talk to us Today</span>
            </p>
          </div>
          <span className="flex justify-center py-5 md:py-0">
            <Samebtn text="Get Started" />
          </span>
        </div>
      </div>
      <img className="  absolute right-0 top-0" src={ep_r} alt="" />

      <span className="sm:w-[230px] w-[130px] h-[130px] sm:h-[230px] rounded-[500px]  blur-[120px] bg-[#02cdcf] opacity-60 z-10 left-[-8%] absolute bottom-[5%]"></span>
      <span className="sm:w-[230px] w-[130px] h-[130px] sm:h-[230px] rounded-[500px]  blur-[120px] bg-[#02cdcf] opacity-60 z-10 right-[0%] absolute bottom-[-28%]"></span>
    </div>
  );
};

export default Taldtoday;
