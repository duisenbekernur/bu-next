import Image from "next/image";
import React from "react";

import bitcoin from "@/assets/backgrounds/bitcoin.png";

const OnlineLearn = () => {
  return (
    <div className="relative mt-[150px]">
      <div className="container">
        <h1 className="text-center  not-italic font-extrabold text-[50px] leading-[61px] text-white">
          Обучение в{" "}
          <span className="font-extrabold text-[50px] leading-[61px] text-[#01B2FF]">
            LIVE - ONLINE
          </span>{" "}
          режиме:
        </h1>

        <ul className=" text-2xl text-white ml-[500px] mt-[100px] w-[700px] list-disc">
          <li className="mb-[15px]">
            3 раза в неделю, где можно во время урока задавать вопросы и
            уточнять моменты
          </li>
          <li className="mb-[15px]">
            Разработка познается в разработке - поэтому даже с нуля ребята у нас
            начинают писать свои первые линии кода на 5-ом уроке
          </li>
          <li className="mb-[15px]">
            Кодинг-задания после каждого урока, которые проверяются кураторами
          </li>
          <li className="mb-[15px]">
            Если вам не понятно что либо вы задаете вопрос в нашем дискорде или
            можете созвонится с кураторами и получить помощь с кодинг-заданиями
          </li>
          <li className="mb-[15px]">
            В итоге это 10 часов прокача вашего навыка в неделю, в течении 9
            месяцев
          </li>
          <li className="mb-[15px]">
            Мы работаем при поддержке самого крупного технопарка в Средней Азии
            - <span className="text-[#01B2FF] font-extrabold">AstanaHub </span>
          </li>
        </ul>
      </div>

      {/* left blob */}
      <svg
        className="absolute z-10 mt-[-350px]"
        width="584"
        height="865"
        viewBox="0 0 584 865"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_13_79)">
          <ellipse
            cx="89"
            cy="432.491"
            rx="208.227"
            ry="109.7"
            transform="rotate(24.6285 89 432.491)"
            fill="url(#paint0_linear_13_79)"
            fill-opacity="0.7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_13_79"
            x="-405.772"
            y="0.299316"
            width="989.543"
            height="864.383"
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
              result="effect1_foregroundBlur_13_79"
            />
          </filter>
          <linearGradient
            id="paint0_linear_13_79"
            x1="-106.237"
            y1="464.282"
            x2="298.241"
            y2="409.363"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6EEFC" />
            <stop offset="1" stop-color="#0080FF" />
          </linearGradient>
        </defs>
      </svg>

      <Image className="absolute top-[150px] -z-10" src={bitcoin} alt="btc" />

      {/* right blob */}
      <svg
        className="absolute right-0 -top-80"
        width="568"
        height="683"
        viewBox="0 0 568 683"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          y="228.322"
          width="816.34"
          height="472.57"
          transform="rotate(-16.1691 0 228.322)"
          fill="url(#pattern0)"
          fill-opacity="0.85"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_13_81"
              transform="scale(0.000555556 0.000959693)"
            />
          </pattern>
          <image id="image0_13_81" width="1800" height="1042" />
        </defs>
      </svg>
    </div>
  );
};

export default OnlineLearn;
