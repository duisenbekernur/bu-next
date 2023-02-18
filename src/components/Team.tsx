import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import background from "@/assets/backgrounds/team.svg";
import eth from "@/assets/icons/eth-white.svg";

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

const textToTopAnimation = {
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

const Team = () => {
  return (
    <div className="relative">
      <section className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center"
        >
          <motion.h1
            custom={2}
            variants={textAnimation}
            className="font-extrabold text-[65px] leading-[79px] text-right text-white text-shadow-blue mb-8"
          >
            Команда BU
          </motion.h1>
          <motion.p
            custom={3}
            variants={textAnimation}
            className="w-[95%] font-normal text-[35px] leading-[49px] text-center text-white"
          >
            Мы верим что децентраллизация, прозрачность и доступность блокчейн
            технологии приведет нас к более справедливому интернету - и мы
            придем к этому руками блокчейн разработчиков
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex justify-around mt-16"
        >
          <motion.div
            custom={3}
            variants={textToTopAnimation}
            className="flex flex-col gap-10 items-center w-[550px]"
          >
            <div className="w-40 h-40 rounded-full bg-cyan-600 flex items-center justify-center">
              <Image src={eth} alt="eth" />
            </div>
            <p className="font-medium text-[40px] leading-[48px] text-center text-white">
              Мы также веб3 стартапперы
            </p>
          </motion.div>

          <motion.div
            custom={4}
            variants={textToTopAnimation}
            className="flex flex-col gap-10 items-center w-[550px]"
          >
            <div className="w-40 h-40 rounded-full bg-cyan-600 flex items-center justify-center">
              <Image src={eth} alt="eth" />
            </div>
            <p className="font-medium text-[40px] leading-[48px] text-center text-white">
              Разрабатываем youtube для web3.0 - “Nimbl”
              <br />
              <a
                href="https://nimbl.tv"
                // target="_blank"
                // rel="noopener"
                className="text-[25px] "
              >
                https://nimbl.tv/
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Image
        className="absolute left-1/2 transform -translate-x-1/2 top-0 -z-10"
        src={background}
        alt="bg"
      />
    </div>
  );
};

export default Team;
