import React, { FC } from "react";

import blob from "@/assets/glassmorph-button-blob.svg";
import Image from "next/image";

type GlassmorphButtonProps = {
  text: string;
  width: number;
};

const GlassmorphButton: FC<GlassmorphButtonProps> = ({ text, width }) => {
  return (
    <>
      <div className="cursor-pointer bg-[#4A9FC7] opacity-50  text-center px-[15px] py-[18px] border-[#00aeff] border-[3px] rounded-full relative  border-solid w-max m-auto">
        <p className="z-20 text-[#fff] font-medium text-[30px] text-center ">
          {text}
        </p>

        <Image
          className="absolute bottom-[-80px] right-[150px]"
          src={blob}
          alt="blob"
        />
      </div>
    </>
  );
};

export default GlassmorphButton;
