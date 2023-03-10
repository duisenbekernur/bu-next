import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import background from "@/assets/backgrounds/discord-block.svg";
import discord from "@/assets/icons/discord.svg";
import info from "@/assets/discord-block-info.svg";
import wifi from "@/assets/icons/discord-menu-wifi.svg";
import community from "@/assets/icons/discord-menu-community.svg";
import chat from "@/assets/icons/discord-menu-chat.svg";
import chain from "@/assets/icons/discord-menu-chain.svg";
import news from "@/assets/icons/discord-menu-news.svg";
import tasks from "@/assets/icons/discord-menu-tasks.svg";

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


const DiscordBlock = () => {
  return (
    <motion.div className="relative ">
      <div className="mt-[300px] h-[1200px]">
        <section className="container relative ">
          <div className="flex items-center gap-4 ">
            <Image src={discord} alt="discord" />
            <h1 className=" italic font-extrabold text-[65px] leading-[79px] text-white text-shadow-blue">
              BU - DISCORD
            </h1>
          </div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            className=" text-right  font-medium text-[40px] leading-[54px] text-white flex flex-col items-end gap-12 overflow-hidden"
          >
            <motion.li
              custom={3}
              variants={textAnimation}
              className="flex items-center gap-14"
            >
              <p>Записи, и PDF презентации уроков</p>{" "}
              <Image
                className="p-4 bg-white rounded-[50%] w-[90px] h-[90px]"
                src={wifi}
                alt="wifi"
              />
            </motion.li>
            <motion.li
              custom={4}
              variants={textAnimation}
              className="flex items-center gap-14"
            >
              <p>Голосовые каналы со студентами и кураторами</p>{" "}
              <Image
                className="p-4 bg-white rounded-[50%] w-[90px] h-[90px]"
                src={community}
                alt="wifi"
              />
            </motion.li>
            <motion.li
              custom={5}
              variants={textAnimation}
              className="flex items-center gap-14"
            >
              <p>Чат для вопросов</p>{" "}
              <Image
                className="p-4 bg-white rounded-[50%] w-[90px] h-[90px]"
                src={chat}
                alt="wifi"
              />
            </motion.li>
            <motion.li
              custom={6}
              variants={textAnimation}
              className="flex items-center gap-14"
            >
              <p>Канал для сдачи конинг(кодинг ?) заданий</p>{" "}
              <Image
                className="p-4 bg-white rounded-[50%] w-[90px] h-[90px]"
                src={tasks}
                alt="wifi"
              />
            </motion.li>
            <motion.li
              custom={7}
              variants={textAnimation}
              className="flex items-center gap-14"
            >
              <p>Веб3 новости</p>{" "}
              <Image
                className="p-4 bg-white rounded-[50%] w-[90px] h-[90px]"
                src={news}
                alt="wifi"
              />
            </motion.li>
            <motion.li
              custom={2}
              variants={textAnimation}
              className="flex items-center gap-14"
            >
              <p>Nimbl Токен и NFT Aridrop</p>{" "}
              <Image
                className="p-4 bg-white rounded-[50%] w-[90px] h-[90px]"
                src={chain}
                alt="wifi"
              />
            </motion.li>
            <div className="-z-10 absolute  right-10 h-[700px] bottom-4 border-l-[6px] border-l-[#01B2FF] border-solid"></div>
          </motion.ul>

          {/* <Image className="absolute right-0" src={info} alt="info" /> */}
        </section>
      </div>

      <Image className="absolute bottom-0 -z-10" src={background} alt="bg" />
    </motion.div>
  );
};

export default DiscordBlock;
