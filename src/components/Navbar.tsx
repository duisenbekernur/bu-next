import Image from "next/image";
import React, { useState } from "react";

import logo from "@/assets/logo.png";
import Link from "next/link";

const navbarItems = ["Home", "About", "Products", "Contacts"];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="flex justify-between items-center w-[1400px] m-auto py-4 bg-none z-0">
      <Link href="/">
        <Image src={logo} width={500} height={65} alt="logo" />
      </Link>

      <ul className="flex gap-8">
        {navbarItems.map((item, index) => (
          <Link href={`/`}>
            <li
              className={[
                "text-xl p-2 text-white",
                activeItem === index ? "activeNavItem" : "",
              ].join(" ")}
              onClick={(e) => {
                setActiveItem(index);
                // e.preventDefault();
              }}
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
