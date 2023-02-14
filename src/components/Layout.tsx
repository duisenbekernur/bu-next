import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center m-auto py-4 w-[1400px]">
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
