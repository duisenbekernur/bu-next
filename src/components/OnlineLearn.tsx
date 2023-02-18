import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import bitcoin from "@/assets/backgrounds/bitcoin.png";

const textAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const imgAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const OnlineLearn = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="relative mt-[150px]"
    >
      <div className="container">
        <motion.h1
          custom={1}
          variants={textAnimation}
          className="text-center  not-italic font-extrabold text-[50px] leading-[61px] text-white"
        >
          Обучение в{" "}
          <span className="font-extrabold text-[50px] leading-[61px] text-[#01B2FF] text-shadow-blue italic">
            LIVE - ONLINE
          </span>{" "}
          режиме:
        </motion.h1>

        <ul className=" text-2xl text-white ml-[500px] mt-[100px] w-[700px] list-disc">
          <motion.li custom={2} variants={textAnimation} className="mb-[15px]">
            3 раза в неделю, где можно во время урока задавать вопросы и
            уточнять моменты
          </motion.li>
          <motion.li custom={3} variants={textAnimation} className="mb-[15px]">
            Разработка познается в разработке - поэтому даже с нуля ребята у нас
            начинают писать свои первые линии кода на 5-ом уроке
          </motion.li>
          <motion.li custom={4} variants={textAnimation} className="mb-[15px]">
            Кодинг-задания после каждого урока, которые проверяются кураторами
          </motion.li>
          <motion.li custom={5} variants={textAnimation} className="mb-[15px]">
            Если вам не понятно что либо вы задаете вопрос в нашем дискорде или
            можете созвонится с кураторами и получить помощь с кодинг-заданиями
          </motion.li>
          <motion.li custom={6} variants={textAnimation} className="mb-[15px]">
            В итоге это 10 часов прокача вашего навыка в неделю, в течении 9
            месяцев
          </motion.li>
          <motion.li custom={7} variants={textAnimation} className="mb-[15px]">
            Мы работаем при поддержке самого крупного технопарка в Средней Азии
            - <span className="text-[#01B2FF] font-extrabold">AstanaHub </span>
          </motion.li>
        </ul>
      </div>

      {/* left blob */}
      <motion.svg
        custom={5}
        variants={imgAnimation}
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
      </motion.svg>

      <motion.div custom={4} variants={imgAnimation}>
        <Image className="absolute top-[150px] -z-10" src={bitcoin} alt="btc" />
      </motion.div>

      {/* right blob */}
      <motion.svg
        custom={4}
        variants={imgAnimation}
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
      </motion.svg>
    </motion.div>
  );
};

export default OnlineLearn;
