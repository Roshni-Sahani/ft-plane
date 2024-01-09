import React from "react";
import svg1 from "../assets/images/svg/svg1.svg";
import svg2 from "../assets/images/svg/svg2.svg";
import svg3 from "../assets/images/svg/svg3.svg";
import svg4 from "../assets/images/svg/svg4.svg";
import arrowimg from "../assets/images/svg/arrowimg.svg";
const featurescard = [
  {
    svg: svg1,
    heading: "Best Guide",
    para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    circle: arrowimg,
    aos: "fade-up",
  },
  {
    svg: svg2,
    heading: "More Discount",
    para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    circle: arrowimg,
    botm: "lg:-translate-y-[30px]",
  },
  {
    svg: svg3,
    heading: "Private",
    para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    circle: arrowimg,
    aos: "fade-up",
  },
  {
    svg: svg4,
    heading: "Online Support",
    para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
    circle: arrowimg,
    botm: "lg:-translate-y-[30px]",
    // aos: "fade-down",
  },
];

const Section1 = () => {
  const list = featurescard.map((featurescard) => (
    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full flex justify-center px-4 mb-5">
      <div
        className={`rounded-[185px] max-w-[281.63px] bg-white py-[42px] px-[21px] ${featurescard.botm} shadow-[0px_100px_200px_0px_#0117361A] flex justify-center flex-col items-center `}
        data-aos={`${featurescard.aos}`}
        data-aos-duration="3000"
      >
        <div className="w-[70px] h-[70px] rounded-full bg-[#313EF70D] flex justify-center items-center">
          <img src={featurescard.svg} alt="img-1" />
        </div>
        <div>
          <p className=" text-center font-montserrat text-2xl font-extrabold leading-[150%] pb-2.5 pt-4">
            {featurescard.heading}
          </p>
          <div className="font-montserrat text-[#030522A6] text-base leading-[150%] fw-normal text-center max-w-[239.63px] pb-8">
            {featurescard.para}
          </div>
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-[#000] flex justify-center items-center">
          <img src={featurescard.circle} alt="img-2" />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="max-w-[1140px] mx-auto px-3">
        <h2 className=" font-montserrat sm:text-[40px] text-3xl font-bold text-center  lg:pb-[70px] pb-5">
          Our Features
        </h2>
        <div className="flex flex-wrap flex-row py-5 justify-center">
          {list}
        </div>
      </div>
    </div>
  );
};

export default Section1;
