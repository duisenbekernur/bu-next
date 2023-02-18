import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import background from "@/assets/backgrounds/kirill-block.png";
import kirill from "@/assets/kirill.png";
import check from "@/assets/icons/check.png";
import community from "@/assets/icons/community.png";
import education from "@/assets/icons/education.png";
import increase from "@/assets/icons/increase.png";

const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Kirill = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="w-full relative"
    >
      <section className="container mt-[100px]">
        <div className="flex items-center gap-10">
          <Image src={kirill} alt="kirill" />
          <p className="text-[35px] w-[650px] text-white">
            <span className="italic font-extrabold">Кирилл Зайнутдинов</span> -
            один из лучших преподавателей в СНГ{" "}
          </p>
        </div>

        <div className="m-auto flex gap-12 flex-wrap w-[900px] mt-10">
          <motion.div
            custom={2}
            variants={textAnimation}
            className="flex gap-4 w-[400px] items-center"
          >
            <div className="h-[60px] w-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={increase} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">8 ЛЕТ</h1>
              <p className="text-[20px]">опыт обучения в разработке</p>
            </div>
          </motion.div>
          <motion.div
            custom={4}
            variants={textAnimation}
            className="flex gap-4 w-[400px] items-center"
          >
            <div className="h-[60px] w-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={education} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">ОКОНЧИЛ МИФИ</h1>
              <p className="text-[20px]">по кибернетике и киберзащите</p>
            </div>
          </motion.div>
          <motion.div
            custom={6}
            variants={textAnimation}
            className="flex gap-4 w-[400px] items-center"
          >
            <div className="h-[60px] w-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={community} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">1000 разработчиков</h1>
              <p className="text-[20px]">обучил C/C++/JS/Solidity/TS</p>
            </div>
          </motion.div>
          <motion.div
            custom={8}
            variants={textAnimation}
            className="flex gap-4 w-[400px] items-center"
          >
            <div className="h-[60px] w-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={check} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">80 СТУДЕНТОВ</h1>
              <p className="text-[20px]">
                уже обучает в BU, вместе с
                <br /> нашими 2 кураторами
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Image
        className="absolute right-0 -bottom-52 -z-10"
        src={background}
        alt="bg"
      />

      {/* blob */}
      <svg
        className="absolute top-[-300px] left-[200px]"
        width="1005"
        height="842"
        viewBox="0 0 1005 842"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_13_92)">
          <ellipse
            cx="502.462"
            cy="421.071"
            rx="208.227"
            ry="109.7"
            transform="rotate(-16.0763 502.462 421.071)"
            fill="url(#paint0_linear_13_92)"
            fill-opacity="0.7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_13_92"
            x="0.0568848"
            y="0.898682"
            width="1004.81"
            height="840.345"
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
              result="effect1_foregroundBlur_13_92"
            />
          </filter>
          <linearGradient
            id="paint0_linear_13_92"
            x1="307.225"
            y1="452.863"
            x2="711.703"
            y2="397.944"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6EEFC" />
            <stop offset="1" stop-color="#0080FF" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Kirill;
