import Image from "next/image";
import React from "react";

import background from "@/assets/backgrounds/team.svg";
import eth from "@/assets/icons/eth-white.svg";

const Team = () => {
  return (
    <div className="relative">
      <section className="container">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-[65px] leading-[79px] text-right text-white text-shadow-blue mb-8">
            Команда BU
          </h1>
          <p className="w-[95%] font-normal text-[35px] leading-[49px] text-center text-white">
            Мы верим что децентраллизация, прозрачность и доступность блокчейн
            технологии приведет нас к более справедливому интернету - и мы
            придем к этому руками блокчейн разработчиков
          </p>
        </div>

        <div className="flex justify-around mt-16">
          <div className="flex flex-col gap-10 items-center w-[550px]">
            <div className="w-40 h-40 rounded-full bg-cyan-600 flex items-center justify-center">
              <Image src={eth} alt="eth" />
            </div>
            <p className="font-medium text-[40px] leading-[48px] text-center text-white">
              Мы также веб3 стартапперы
            </p>
          </div>

          <div className="flex flex-col gap-10 items-center w-[550px]">
            <div className="w-40 h-40 rounded-full bg-cyan-600 flex items-center justify-center">
              <Image src={eth} alt="eth" />
            </div>
            <p className="font-medium text-[40px] leading-[48px] text-center text-white">
              Разрабатываем youtube для web3.0 - “Nimbl”
              <br />
              <a
                href="https://nimbl.tv"
                target="_blank"
                className="text-[25px] "
              >
                https://nimbl.tv/
              </a>
            </p>
          </div>
        </div>
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
