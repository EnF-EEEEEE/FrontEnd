"use client";

import LeftArrow from "@/components/Icons/common/LeftArrow";
import { categories } from "@/constants/letterCategoryList";
import { useLetterStore } from "@/store/useLetterStore";
import Image from "next/image";
import { useState } from "react";

export default function Category() {
  const { categoryName, setCategory, setStep } = useLetterStore();
  const [blinkingCategory, setBlinkingCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    setCategory(categoryName); // category.name 저장
    setBlinkingCategory(categoryId); // 여전히 category.id를 사용

    setTimeout(() => {
      setBlinkingCategory(null);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="relative text-black">
      <nav className="pl-4 mt-[58px] w-[343px] justify-between py-4">
        <LeftArrow className="w-6 h-6 cursor-pointer" stroke="#292D32" />
      </nav>
      <div className="pl-4 mt-2">
        <p className="whitespace-break-spaces text-xl font-bold leading-7 tracking-tight">
          {"어떤 이야기를 \n나누고 싶으신가요?"}
        </p>
        <p className="mt-1.5">아래 카테고리 중에서 선택해주세요</p>
      </div>
      <div className="text-center w-[334px] h-[572px] flex justify-center flex-wrap gap-2 mt-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`w-[153px] h-[137px] select-none flex flex-col items-center justify-center 
                        bg-white rounded-2xl shadow-sm cursor-pointer border 
                        ${
                          categoryName === category.name
                            ? blinkingCategory === category.id
                              ? "border-[#84A667] animate-blink" // 깜빡이는 애니메이션 적용
                              : "border-[#84A667]"
                            : "border-transparent"
                        }`}
            onClick={() => handleCategoryClick(category.id, category.name)}
          >
            <Image
              src={category.src}
              alt={category.name}
              width={50}
              height={56}
            />
            <p className="text-[#6B7178] text-base font-medium leading-6 tracking-tight">
              {category.description}
            </p>
            <p className="text-base font-bold leading-6 tracking-tight text-[#292D32]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes blink {
            0% { border-color: #84A667; }
            50% { border-color: transparent; }
            100% { border-color: #84A667; }
          }
          .animate-blink {
            animation: blink 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
