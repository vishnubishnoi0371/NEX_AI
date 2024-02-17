import React from "react";

const Samebtn = (props) => {
  return (
    <button className="px-[20px] sm:px-[32px] common-btn green-sh shadow-[inset_18rem_0_0_0_#02CDCF] hover:shadow-[inset_0_0_0_0]  duration-500  md:px-[32px] buttonbox py-2 sm:py-3 md:py-[18px] bg-[#02CDCF]  rounded-[12px]  text-[#0B0A0A]  text-base sm:text-lg ff-recharge  font-bold text-center">
      {props.text}
    </button>
  );
};
export default Samebtn;
