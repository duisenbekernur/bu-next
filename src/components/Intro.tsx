import React from "react";
import { BsArrowRight } from "react-icons/bs";
import GlassmorphButton from "./UI/GlassmorphButton";
import Image from "next/image";

import backgroundImage from "@/assets/backgrounds/intro.png";
import blob from "@/assets/glassmorph-button-blob.svg";

const Intro = () => {
  return (
    <div className="">
      <Image
        className="absolute left-1/2 transform -translate-x-1/2 top-0 -z-10"
        src={backgroundImage}
        alt="bg"
      />
      <div className="container">
        <h3 className="w-[755px] mt-[100px] not-italic font-medium text-[35px] leading-[42px] text-white opacity-1">
          это программа обучения блокчейн разработке с нуля до уровня Junior+ за
          9 месяцев{" "}
        </h3>

        <section className="flex flex-col justify-center">
          <div className="flex m-auto flex-row items-center justify-center gap-2 mt-[100px]">
            <div className="rounded-[30px] gradientBlue pt-[7px] pb-4 px-[18px]  w-[290px] cursor-pointer bg-slate-400 h-[125px]  flex flex-col gap-1 items-center">
              <h1 className="italic font-semibold text-[35px] leading-[42px] text-white">
                1 УРОК
              </h1>
              <p className="font-light text-[17px] leading-5 text-center text-white">
                теория и механизм блокчейна, криптографии, консенсусы, узлы
              </p>
            </div>
            <BsArrowRight color="#fff" size="50" width="44px" />
            <div className="rounded-[30px] gradientBlue pt-[7px] pb-4 px-[18px]  w-[290px] cursor-pointer bg-slate-400 h-[125px]  flex flex-col gap-1 items-center">
              <h1 className="italic font-semibold text-[35px] leading-[42px] text-white">
                2 УРОК
              </h1>
              <p className="font-light text-[17px] leading-5 text-center text-white">
                биткоин и вся полезная информация про него
              </p>
            </div>
            <BsArrowRight color="#fff" size="50" width="44px" />
            <div className="rounded-[30px] gradientBlue pt-[7px] pb-4 px-[18px]  w-[290px] cursor-pointer bg-slate-400 h-[125px]  flex flex-col gap-1 items-center">
              <h1 className="italic font-semibold text-[35px] leading-[42px] text-white">
                3 УРОК
              </h1>
              <p className="font-light text-[17px] leading-5 text-center text-white">
                эфириум и вся полезная информация про него
              </p>
            </div>
          </div>

          <p className=" italic font-light text-[17px] leading-5 text-center text-white mt-6 w-[755px] m-auto mb-[100px]">
            9 месяцев - это именно тот отрезок времени, который нужен чтобы
            обучиться высокооплачиваемому навыку
          </p>

          <div className="relative">
            <p className="z-20 text-white font-medium text-[30px] text-center absolute  left-1/2 transform -translate-x-1/2 w-full mt-4">
              Скачать Полный Тематический План Программы BU
            </p>
            <div className="cursor-pointer bg-[#4A9FC7] opacity-50  text-center px-[15px] py-[18px] border-[#00aeff] border-[3px] text-shadow-blue rounded-full relative  border-solid w-max m-auto">
              <p className="opacity-0 z-20 text-white font-medium text-[30px] text-center">
                Скачать Полный Тематический План Программы BU
              </p>
              <Image
                className="absolute bottom-[-80px] right-[150px]"
                src={blob}
                alt="blob"
              />
            </div>
          </div>
        </section>
      </div>

      {/* left blob */}
      <svg
        className="absolute top-0 left-0"
        width="1126"
        height="845"
        viewBox="0 0 1126 845"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_13_36)">
          <ellipse
            cx="509.436"
            cy="317.982"
            rx="335.03"
            ry="196.664"
            transform="rotate(24.5233 509.436 317.982)"
            fill="url(#paint0_linear_13_36)"
            fill-opacity="0.75"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_13_36"
            x="-106.191"
            y="-208.636"
            width="1231.25"
            height="1053.24"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_13_36"
            />
          </filter>
          <linearGradient
            id="paint0_linear_13_36"
            x1="195.307"
            y1="374.976"
            x2="848.396"
            y2="295.392"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6EEFC" />
            <stop offset="1" stop-color="#0080FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* right blob */}
      <svg
        className="absolute right-0 bottom-[550px]"
        width="663"
        height="909"
        viewBox="0 0 663 909"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_13_37)">
          <ellipse
            cx="563.5"
            cy="454.5"
            rx="263.5"
            ry="154.5"
            fill="url(#paint0_linear_13_37)"
            fill-opacity="0.7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_13_37"
            x="-0.000488281"
            y="0"
            width="1127"
            height="909"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_13_37"
            />
          </filter>
          <linearGradient
            id="paint0_linear_13_37"
            x1="316.438"
            y1="499.275"
            x2="830.074"
            y2="436.613"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6EEFC" />
            <stop offset="1" stop-color="#0080FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Intro;
