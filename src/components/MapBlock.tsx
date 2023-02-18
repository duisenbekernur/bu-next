import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import mapBackground from "@/assets/backgrounds/map-block.svg";

const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
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
    transition: { delay: custom },
  }),
};

const MapBlock = () => {
  return (
    <motion.div >
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" custom={1} variants={imgAnimation}>
          <Image className="mx-auto mt-52 mb-6 " src={mapBackground} alt="bg" />
        </motion.div>

        <motion.section initial="hidden" whileInView="visible">
          <motion.div
            custom={3}
            variants={textAnimation}
            className="flex gap-20 items-center mb-10"
          >
            <div className="w-[120px] shadow-[0px_0px_17px_9px_rgba(1,178,255,0.77)] bg-[#A6E4FF] px-7 rounded-full flex items-center justify-center">
              <h1 className="text-[#01B2FF] text-[65px] italic font-black">
                1
              </h1>
            </div>
            <p className="text-white text-[29px]">
              Следующий бычий рынок - откроется огромное окно возможностей для
              блокчейн разработчика
            </p>
          </motion.div>
          <motion.div
            custom={4}
            variants={textAnimation}
            className="flex gap-20 items-center mb-10"
          >
            <div className="shadow-[0px_0px_17px_9px_rgba(1,178,255,0.77)] bg-[#A6E4FF] px-7 rounded-full flex items-center justify-center">
              <h1 className="text-[#01B2FF] text-[65px] italic font-black">
                2
              </h1>
            </div>
            <p className="text-white text-[29px]">
              Компании будут поднимать инвестиции в больших размерах, писать
              план разработки, и собирать команду на 2-3 года вперед
            </p>
          </motion.div>
          <motion.div
            custom={5}
            variants={textAnimation}
            className="flex gap-20 items-center"
          >
            <div className="shadow-[0px_0px_17px_9px_rgba(1,178,255,0.77)] bg-[#A6E4FF] px-7 rounded-full flex items-center justify-center">
              <h1 className="text-[#01B2FF] text-[65px] italic font-black">
                3
              </h1>
            </div>
            <p className="text-white text-[29px]">
              К этому моменту, получить навык, получить сертификат, коммерческий
              опыт работы
            </p>
          </motion.div>
        </motion.section>
      </div>

      {/* blob */}
      <motion.svg
        className="absolute bottom-12"
        width="567"
        height="878"
        viewBox="0 0 567 878"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_13_169)">
          <ellipse
            cx="76.326"
            cy="439.219"
            rx="208.227"
            ry="109.7"
            transform="rotate(28.7004 76.326 439.219)"
            fill="url(#paint0_linear_13_169)"
            fill-opacity="0.85"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_13_169"
            x="-413.814"
            y="0.445435"
            width="980.28"
            height="877.547"
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
              result="effect1_foregroundBlur_13_169"
            />
          </filter>
          <linearGradient
            id="paint0_linear_13_169"
            x1="-118.911"
            y1="471.011"
            x2="285.567"
            y2="416.092"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6EEFC" />
            <stop offset="1" stop-color="#0080FF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
};

export default MapBlock;
