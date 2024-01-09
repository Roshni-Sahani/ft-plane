import React from 'react'
import img1 from '../assets/images/png/img1.png'
import img2 from '../assets/images/png/img2.png'
import img3 from '../assets/images/png/img3.png'
import img4 from '../assets/images/png/img4.png'
const Section6 = () => {
  return (
    <>
      <div className="max-w-[1140px] px-3 mx-auto pt-20 pb-28">
        <p className="text-[#011736] text-center mx-auto font-montserrat sm:text-[40px] text-3xl sm:leading-[150%] font-bold mb-8">
          Make Memories With Us
        </p>
        <div className="flex flex-row flex-wrap">
          <div className=" xl:w-1/4 md:w-1/2 w-full flex justify-center mb-5">
            <img
              src={img1}
              alt="1"
              className="w-fu ll rounded-full"
              data-aos="fade-down"
              data-aos-duration="3000"
            />
          </div>
          <div className="xl:w-1/4 md:w-1/2 w-full flex justify-center mb-5">
            <img
              src={img2}
              alt="1"
              className="w-fu ll rounded-full lg:translate-y-16"
            />
          </div>
          <div className="xl:w-1/4 md:w-1/2 w-full flex justify-center mb-5">
            <img
              src={img3}
              alt="1"
              className="w-fu ll rounded-full"
              data-aos="fade-down"
              data-aos-duration="3000"
            />
          </div>
          <div className="xl:w-1/4 md:w-1/2 w-full flex justify-center mb-5">
            <img
              src={img4}
              alt="1"
              className="w-100 rounded-full lg:translate-y-16"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6
