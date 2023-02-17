import React from "react";

import background from "@/assets/backgrounds/pricing.svg";
import Image from "next/image";
import GlassmorphButton from "./UI/GlassmorphButton";
import { BsArrowRight } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="relative mt-8">
      <section className="container">
        <h1 className="italic font-black text-6xl leading-[73px] text-[#01B2FF]">
          Все что входит:
        </h1>

        <div className="flex items-center justify-center mt-80">
          <h3 className="font-black text-6xl leading-[73px] text-white ">
            <span className=" italic  text-[#01B2FF]">
              Стоимость программы:{" "}
            </span>{" "}
            <br />
            640.000тг
          </h3>
        </div>

        <div className="relative mt-20">
          <p className="z-20 text-white font-medium text-[30px] text-center absolute  left-1/2 transform -translate-x-1/2 w-full mt-4">
            Записаться на консультацию
          </p>
          <div className="cursor-pointer bg-[#4A9FC7] opacity-50  text-center px-[15px] py-[18px] border-[#00aeff] border-[3px] text-shadow-blue rounded-full relative  border-solid w-max m-auto">
            <p className="opacity-0 z-20 text-white font-medium text-[30px] text-center">
              Записаться на консультацию
            </p>
          </div>
        </div>
      </section>

      <Image
        className="-z-30 absolute right-0 top-0"
        src={background}
        alt="bg"
      />
    </div>
  );
};

export default Pricing;
