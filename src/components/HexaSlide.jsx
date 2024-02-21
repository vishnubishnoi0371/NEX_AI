import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ep_r from "../Assets/img.webp/ep_right.png";
import ellp from "../Assets/img.webp/ellpse.webp";
import ep_l from "../Assets/img.webp/ep_left.png";
import { Card3, Card4, Scroll_1, Scroll_2 } from "../common_svg/icon";

const HexaSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div id="about" className="relative">
      <div className=" container mx-auto max-w-[1364px] px-3  sm:pt-[30px] mt-[30px]">
        <div className="  max-w-[1340px] relative mx-auto px-3 border-[1px] border-white scroll_bg object-cover overflow-hidden rounded-[32px]  min-h[800px]  bg-no-repeat bg-center">
          <div className="flex flex-col items-center justify-center pb-[40px mb-[40px] pt-[40px]">
            <p className=" text-[32px] sm:text-[40px] font-bold ff-recharge leading-[51px] text-white text-center mb-2 sm:mb-4 sm:mt-[40px]">
              Unique features
            </p>
            <p className=" text-[14px] sm:text-base text-center font-normal mb-[-30px] sm:mb-0 font-pop  opacity-[0.7] sm:leading-[26px] text-white  max-w-[397px]">
              ability to engage in natural, fluent conversations in over 15
              languages,
            </p>
          </div>
          <div className="flex  md:px-7 lg:px-[90px] flex-col sm:flex-row max-h-[532px] mt-0 sm:mt-[80px] items-start sm:justify-between scroll-hide  overflow-y-scroll  pt-[10px]">
            <div className="flex flex-col gap-4 sm:gap-[340px]">
              <div className="p-[30px_24px_44px_24px] w-full z-30 sm:max-w-[364px] max-h-[364px] border-[1px] border-[#fcfcfc66]  rounded-[16px] bg-white ">
                <span>
                  <Scroll_1 />
                </span>
                <p className="text-xl font-bold ff-recharge leading-[32px] sm:max-w-[304px] lg:mt-[30px] mb-[10px] text-black">
                  Remote Access and File Management
                </p>
                <p className=" text-[14px] sm:text-base font-pop font-normal text-black opacity-[0.7] sm:leading-[26px] sm:max-w-[316px]">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.
                </p>
              </div>
              <div className="p-[30px_24px_44px_24px] w-full z-30 sm:max-w-[364px] max-h-[364px] border-[1px] border-[#fcfcfc66]  rounded-[16px] bg-white ">
                <span>
                  <Card4 />
                </span>
                <p className="text-xl font-bold ff-recharge leading-[32px] sm:max-w-[304px] lg:mt-[30px] lg:mb-[10px] text-black">
                  Autonomous and Natural Language Communication{" "}
                </p>
                <p className=" text-[14px] sm:text-base font-pop font-normal text-black opacity-[0.7] lg:leading-[26px] sm:max-w-[316px]">
                  Nexai goes beyond standard home assistants by taking proactive
                  initiatives and engaging in natural language conversations. It
                  communicates with you as if you're talking to a friend,
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-[340px]">
              <div className="flex flex-col   p-[30px_24px_44px_24px]  z-30 w-full sm:max-w-[364px] border-[1px] border-[#fcfcfc66]  rounded-[16px] bg-white mt-5 sm:mt-[300px]">
                <span>
                  <Scroll_2 />
                </span>
                <p className="text-xl font-bold ff-recharge leading-[32px] sm:max-w-[304px] lg:mt-[30px] mb-[10px] text-black">
                  Real-time Home Monitoring
                </p>
                <p className=" text-[14px] sm:text-base font-pop font-normal text-black opacity-[0.7] sm:leading-[26px] sm:max-w-[316px]">
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
              <div className="flex flex-col mb-4  p-[30px_24px_44px_24px]  z-30 w-full sm:max-w-[364px] border-[1px] border-[#fcfcfc66]  rounded-[16px] bg-white ">
                <span>
                  <Card3 />{" "}
                </span>
                <p className="text-xl font-bold ff-recharge leading-[32px] sm:max-w-[304px] lg:mt-[30px] mb-[10px] text-black">
                  Intelligent Contextual Awareness{" "}
                </p>
                <p className=" text-[14px] sm:text-base font-pop font-normal text-black opacity-[0.7] sm:leading-[26px] sm:max-w-[316px]">
                  Nexai utilizes the hardware sensors placed throughout your
                  home to understand your location and deliver relevant
                  information or actions. For instance, if you're in the bedroom
                  and there's a smart TV present, Nexai will automatically
                  display on the TV screen.
                </p>
              </div>
            </div>
          </div>
          <img
            className="absolute left-[50%] z-10 translate-x-[-50%] translate-y-[-32%] mix-blend-color rounded-full top-[50%]"
            src={ellp}
            alt=""
          />
        </div>
      </div>
      <div className="sm:pt-[50px] relative mt-[10px]">
        <img
          className="hidden md:block  absolute right-0 top-0"
          src={ep_r}
          alt="ellepse"
        />
        <img
          className="hidden md:block  absolute left-0 bottom-0"
          src={ep_l}
          alt="ellepse"
        />

        <div className="flex items-center justify-center flex-col mt-[50px] sm:pt-[50px] sm:pb-[47px]">
          <p className="text-[32px] sm:text-[40px] leading-[normal] font-bold ff-recharge text-[#2dcdcf] text-center mb-4">
            Blockchain & AI technology
          </p>
          <p className="max-w-[997px] z-30 text-[14px]  sm:text-base font-normal font-pop leading-[25.4px] text-center text-[#ffffff] opacity-[70%]">
            Nexai is an advanced home assistant that will revolutionize the way
            we interact with our smart devices at home. Powered by sophisticated
            artificial intelligence, it leverages blockchain technology to offer
            a secure and efficient user experience.
          </p>
        </div>
        <div className="flex items-center justify-center mt-[47px]">
          <p className="text-xl z-30 font-bold ff-recharge text-center pb-[40px] sm:pb-[60px] leading-[32px] text-white max-w-[684px]">
            By building the software on blockchain, Nexai provides the following
            advantages
          </p>
        </div>
        <div
          id="market"
          className="container  md:pb-[100px] max-w-[1264px]  ps-3 910:ps-3 mx-auto 910:mx-0 910:ms-auto"
        >
          <Slider {...settings}>
            <div className="px- ">
              <div className=" bg_hexa bg-no-repeat flex flex-col items-center bg-center max-w-full  w-[350px] h-[350px]">
                <div className="w-[58px] flex flex-col items-center justify-center  mt-[70px] mb-[30px] h-[58px] rounded-full bg-[#040404] shadow-[0px_4px_16px_0px_#02cdcf99_inset] text-white text-center">
                  <p className="text-[32px]  font-bold ff-recharge leading-[51px] text-white">
                    1
                  </p>
                </div>

                <div className="flex items-center justify-center pt-1 ">
                  <p className="text-xl  top-[45%] max-w-[212px] right-[31%] text-center font-bold ff-recharge leading-[32px] text-[#ffffff]">
                    Security and Privacy
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:mt-[50px] sm:pt-[50px]  ">
              <div className="relativ bg_hexa bg-no-repeat  flex flex-col justify- items-center bg-center max-w-full w-[350px] h-[350px]">
                {/* <img className="drop-shadow-crd_sh_2" src={hexa} alt="" /> */}
                <div className="w-[58px] flex flex-col items-center justify-center  mt-[70px] mb-[30px] h-[58px] rounded-full bg-[#040404] shadow-[0px_4px_16px_0px_#02cdcf99_inset] text-white text-center">
                  <p className="text-[32px]  font-bold ff-recharge leading-[51px] text-white">
                    2
                  </p>
                </div>

                <div className="flex items-center justify-center pt-1 ">
                  <p className="text-xl  top-[45%] max-w-[212px] right-[31%] text-center font-bold ff-recharge leading-[32px] text-[#ffffff]">
                    Transparent and Reliable Data Management{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="px- ">
              <div className="relativ bg_hexa bg-no-repeat  flex flex-col justify- items-center bg-center max-w-full w-[350px] h-[350px]">
                {/* <img className="drop-shadow-crd_sh_2" src={hexa} alt="" /> */}
                <div className="w-[58px] flex flex-col items-center justify-center  mt-[70px] mb-[30px] h-[58px] rounded-full bg-[#040404] shadow-[0px_4px_16px_0px_#02cdcf99_inset] text-white text-center">
                  <p className="text-[32px]  font-bold ff-recharge leading-[51px] text-white">
                    3
                  </p>
                </div>

                <div className="flex items-center justify-center pt-1 ">
                  <p className="text-xl  top-[45%] max-w-[212px] right-[31%] text-center font-bold ff-recharge leading-[32px] text-[#ffffff]">
                    Self-learning and Personalization{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:mt-[50px] sm:pt-[50px] ">
              <div className="relativ bg_hexa bg-no-repeat  flex flex-col justify- items-center bg-center max-w-full w-[350px] h-[350px]">
                {/* <img className="drop-shadow-crd_sh_2" src={hexa} alt="" /> */}
                <div className="w-[58px] flex flex-col items-center justify-center  mt-[70px] mb-[30px] h-[58px] rounded-full bg-[#040404] shadow-[0px_4px_16px_0px_#02cdcf99_inset] text-white text-center">
                  <p className="text-[32px]  font-bold ff-recharge leading-[51px] text-white">
                    4
                  </p>
                </div>

                <div className="flex items-center justify-center pt-1 ">
                  <p className="text-xl  top-[45%] max-w-[212px] right-[31%] text-center font-bold ff-recharge leading-[32px] text-[#ffffff]">
                    Automated and Transparent Transactions{" "}
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <span className="sm:w-[230px] sm:h-[230px] rounded-[500px]  blur-[100px] bg-[#02cdcf] opacity-60 z-10 left-[-8%] absolute top-[25%]"></span>
        <span className="sm:w-[230px] sm:h-[230px] rounded-[500px]  blur-[100px] bg-[#02cdcf] opacity-60 z-10 right-[0%] absolute top-[28%]"></span>
        <span className="sm:w-[230px] sm:h-[230px] rounded-[500px]  blur-[100px] bg-[#02cdcf] opacity-60 z-10 right-[0%] absolute bottom-[-20%]"></span>
        {/* <span className="sm:w-[430px] sm:h-[430px] rounded-[500px]  blur-[120px] bg-[#02cdcf] opacity-60 z-10 right-[34%] absolute top-[-54%]"></span> */}
      </div>
    </div>
  );
};

export default HexaSlide;
