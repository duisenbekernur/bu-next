import React from "react";
import Image from "next/image";

import kirill from "@/assets/kirill.png";
import check from "@/assets/icons/check.png";
import community from "@/assets/icons/community.png";
import education from "@/assets/icons/education.png";
import increase from "@/assets/icons/increase.png";

const Kirill = () => {
  return (
    <div className="w-full">
      <section className="container mt-[100px]">
        <div className="flex items-center gap-10">
          <Image src={kirill} alt="kirill" />
          <p className="text-[35px] w-[650px] text-white">
            <span className="italic font-extrabold">Кирилл Зайнутдинов</span> -
            один из лучших преподавателей в СНГ{" "}
          </p>
        </div>

        <div className="m-auto flex gap-12 flex-wrap w-[900px] mt-10">
          <div className="flex gap-4 w-[400px] items-center">
            <div className="h-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={increase} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">8 ЛЕТ</h1>
              <p className="text-[20px]">опыт обучения в разработке</p>
            </div>
          </div>
          <div className="flex gap-4 w-[400px] items-center">
            <div className="h-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={increase} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">ОКОНЧИЛ МИФИ</h1>
              <p className="text-[20px]">по кибернетике и киберзащите</p>
            </div>
          </div>
          <div className="flex gap-4 w-[400px] items-center">
            <div className="h-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={increase} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">1000 разработчиков</h1>
              <p className="text-[20px]">обучил C/C++/JS/Solidity/TS</p>
            </div>
          </div>
          <div className="flex gap-4 w-[400px] items-center">
            <div className="h-[60px] bg-[#8F9297] rounded-[50%] p-3 box-content flex items-center justify-center">
              <Image src={increase} alt="stats" />
            </div>
            <div className="flex flex-col justify-between text-white">
              <h1 className="text-[30px]">80 СТУДЕНТОВ</h1>
              <p className="text-[20px]">
                уже обучает в BU, вместе с нашими 2 кураторами
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kirill;
