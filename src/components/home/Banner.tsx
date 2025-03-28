import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface BannerProps {
  onClick: () => void;
  className?: string;
}

export default function Banner({ onClick, className }: BannerProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative px-global cursor-pointer select-none rounded-[12px] overflow-hidden bg-white01",
        className
      )}
    >
      <div className="absolute inset-0 bg-radial-[at_50%_100%] from-[#fff5d4] to-70%" />

      <div className="relative z-10 flex justify-between items-center">
        <div className="text-left">
          <p className="text-Caption1_R_12 text-[#CAB29A]">
            편지 보내기 전 읽어봐요
          </p>
          <p className="text-Body1_B_16 ">
            답답한 마음을 어떻게
            <br />
            풀어내야 할지 막막할 때는
          </p>
        </div>

        <Image
          src="/images/birds/home/home_birds.png"
          alt="홈 새두마리"
          width={126}
          height={92}
        />
      </div>
    </button>
  );
}
