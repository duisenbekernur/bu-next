import React from "react";
import Image from "next/image";

import background from "@/assets/backgrounds/footer.svg";
import inst from "@/assets/social/inst.svg";
import telegram from "@/assets/social/telegram.svg";
import tiktok from "@/assets/social/tiktok.svg";
import discord from "@/assets/social/discord.svg";
import youtube from "@/assets/social/youtube.svg";

const Footer = () => {
  return (
    <div className="relative mt-[500px]">
      <section className="container flex justify-between">
        <div className="flex flex-col items-center gap-16 mt-[200px]">
          <p className="italic font-bold text-[40px] leading-[48px] text-white">
            Социальные сети
          </p>

          <div className="flex h-44 gap-[35px]  [&>*:nth-child(odd)]:self-start [&>*:nth-child(even)]:self-end">
            <div className="p-4 flex justify-center items-center bg-gradient-blue rounded-full w-[75px] h-[75px] cursor-pointer">
              <Image src={inst} alt="inst" />
            </div>
            <div className="p-4 flex justify-center items-center bg-gradient-blue rounded-full w-[75px] h-[75px] cursor-pointer">
              <Image src={discord} alt="inst" />
            </div>
            <div className="p-4 flex justify-center items-center bg-gradient-blue rounded-full w-[75px] h-[75px] cursor-pointer">
              <Image src={youtube} alt="inst" />
            </div>
            <div className="p-4 flex justify-center items-center bg-gradient-blue rounded-full w-[75px] h-[75px] cursor-pointer">
              <Image src={telegram} alt="inst" />
            </div>
            <div className="p-4 flex justify-center items-center bg-gradient-blue rounded-full w-[75px] h-[75px] cursor-pointer">
              <Image src={tiktok} alt="inst" />
            </div>
          </div>
        </div>

        <div className="mt-[200px] flex flex-col gap-16">
          <h1 className=" italic font-bold text-[40px] leading-[48px] text-white">
            Resources
          </h1>
          <ul className=" font-[265] text-[25px] leading-[29px] text-white flex flex-col gap-2 cursor-pointer">
            <li>Blog</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Transaction Log</li>
            <li>Advertise</li>
          </ul>
        </div>
      </section>

      <Image
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-20"
        src={background}
        alt="bg"
      />
    </div>
  );
};

export default Footer;
