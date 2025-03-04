import Image from "next/image";
import React from "react";
import BellIcon from "../Icons/Header_bell_icon";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center w-full h-[56px] mt-[59px]">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/images/logo/logo_black_M.svg"
          alt="홈 로고"
          width={98}
          height={24}
        />
        <BellIcon check={true} />
      </div>
    </header>
  );
};

export default Header;
