import Image from "next/image";
import React from "react";

import background from "@/assets/backgrounds/why-solidity.svg";
import blackSolidity from "@/assets/icons/black-solidity.svg";
import solidity from "@/assets/icons/solidity.svg";

import icon1 from "@/assets/swiper-icons/1.png";
import icon2 from "@/assets/swiper-icons/2.png";
import icon3 from "@/assets/swiper-icons/3.png";
import icon4 from "@/assets/swiper-icons/4.png";
import icon5 from "@/assets/swiper-icons/5.png";
import icon6 from "@/assets/swiper-icons/6.png";

import Marquee from "react-fast-marquee";
// import SwiperBlock from "./SwiperBlock";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

const WhySolidity = () => {
  return (
    <div className="relative">
      <div className="container ">
        <section className="mt-[200px]">
          <div className="flex gap-16 items-center mb-4 mx-auto">
            <h1 className="italic font-extrabold text-[100px] text-white text-shadow-blue">
              ПОЧЕМУ SOLIDITY
            </h1>
            <Image src={blackSolidity} alt="sol" />
          </div>
          <p className="font-medium text-[28px] text-white">
            Solidity был создан со-основателем Эфириума - Гэвином Вудом в 2014
            году.
          </p>

          <div className="m-auto flex justify-center items-center mt-8 gap-7 ">
            <Image src={solidity} alt="solidity" />

            <div className="border-shadow-blue px-[35px] py-[45px] font-medium text-3xl text-center text-white w-[550px] border-2 border-solid border-[#01B2FF] rounded-[50px]">
              Более 90% всех блокчейн транзакций, проходят на EVM- подобных
              блокчейнах
            </div>

            <Image src={solidity} alt="solidity" />
          </div>

          <p className="font-[250] text-[25px] leading-7 text-white mt-4 mb-12">
            Это относительно молодой, типизированный язык программирования -
            созднанный специально для разработки на EVM-подобных блокчейнах
            <br /> <br />
            Таких как:
          </p>
          <Marquee speed={100} gradient={false} className="mb-12">
            {icons.map((item, index) => (
              <Image
                width={90}
                height={90}
                key={index}
                src={item}
                alt="sol"
                style={{ marginLeft: "35px" }}
              />
            ))}
            {icons.map((item, index) => (
              <Image
                width={90}
                height={90}
                key={index}
                src={item}
                alt="sol"
                style={{ marginLeft: "35px" }}
              />
            ))}
          </Marquee>
          <Marquee
            direction="right"
            speed={100}
            gradient={false}
            className="mb-12"
          >
            {icons.map((item, index) => (
              <Image
                width={90}
                height={90}
                key={index}
                src={item}
                alt="sol"
                style={{ marginLeft: "35px" }}
              />
            ))}
            {icons.map((item, index) => (
              <Image
                width={90}
                height={90}
                key={index}
                src={item}
                alt="sol"
                style={{ marginLeft: "35px" }}
              />
            ))}
          </Marquee>
        </section>
      </div>
      <div className="absolute   w-[600px]  left-1/2 transform -translate-x-1/2 border-2 border-solid border-[#01B2FF] bg-[#1a2a43] p-10 flex justify-center items-center flex-col shadow-[0px_0px_17px_9px_rgba(1,178,255,0.77)] ">
        <h1 className="italic font-extrabold text-[65px] leading-[79px] text-center text-white text-shadow-blue">
          Сложно ли?
        </h1>
        <p className="font-medium text-3xl leading-9 text-center text-white">
          Это не самый простой навык, но и далеко не самый сложный
        </p>
      </div>

      <Image
        className="absolute top-0 -z-10 w-full"
        src={background}
        alt="bg"
      />
    </div>
  );
};

export default WhySolidity;
