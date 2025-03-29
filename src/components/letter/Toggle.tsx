"use client";

import { useLetterStore } from "@/store/useLetterStore";
import clsx from "clsx";

export default function Toggle() {
  const { isNotificationOn, toggleNotification } = useLetterStore();

  return (
    <div
      className={clsx(
        "w-[60px] h-[30px] rounded-[40px] flex items-center px-1 cursor-pointer transition-all duration-300",
        isNotificationOn ? "bg-black01" : "bg-gray03"
      )}
      onClick={toggleNotification}
    >
      <div
        className={clsx(
          "w-[22px] h-[22px] bg-white02 rounded-full shadow-md transition-transform duration-300",
          isNotificationOn ? "translate-x-[30px]" : "translate-x-0"
        )}
      ></div>
    </div>
  );
}
