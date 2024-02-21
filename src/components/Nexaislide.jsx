import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Nexaislide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    slidesToShow: 4.2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1102,
        settings: {
          slidesToShow: 3.5,
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
        breakpoint: 662,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    rtl: true,

    autoplaySpeed: 500,
    arrows: false,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1102,
        settings: {
          slidesToShow: 3.5,
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
        breakpoint: 662,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    slidesToShow: 4.2,
    slidesToScroll: 1,

    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1102,
        settings: {
          slidesToShow: 3.5,
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
        breakpoint: 662,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div id="chat">
      <div className="flex items-center justify-center flex-col mt-[50px] sm:pt-[50px] mb-[40px] sm:pb-[50px]">
        <p
          data-aos="zoom-in-up"
          className="text-[32px] sm:text-[40px] leading-[normal] font-bold ff-recharge text-[#2dcdcf] text-center mb-4"
        >
          NexAi does all this. And more.
        </p>
        <p
          data-aos="zoom-in-up"
          className="max-w-[912px] text-[14px]  sm:text-base font-normal font-pop leading-[25.4px] text-center text-[#ffffff] !opacity-[70%]"
        >
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
      </div>
      <Slider {...settings}>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Turn on light{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, set alarm of 5:00 am{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, measure this table{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Turn on music{" "}
            </p>
          </div>
        </div>
      </Slider>
      <Slider {...settings2}>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, measure this table{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Turn on music{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Turn on light{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, is the front door locked?{" "}
            </p>
          </div>
        </div>
      </Slider>
      <Slider {...settings3}>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Turn on TV{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Turn on music{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Turn of AC.{" "}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="px-3 py-2 sm:py-5">
          <div className="px-[43px] shadow-crd_sh_1 h-[140px] sm:h-[220px] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px] ">
            <p className="text-base sm:text-[24px] font-bold ff-recharge text-white text-center leading-[38px]">
              NexAi, Lock the front door{" "}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Nexaislide;
