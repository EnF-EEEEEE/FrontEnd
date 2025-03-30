import { birdNameMap } from "@/constants/birdNameMap";
import { LetterType } from "@/constants/letter";
import { CategoryNameType } from "@/constants/letterCategoryList";
import { formatLetterDate } from "@/util/letterUtils";
import clsx from "clsx";
import Image from "next/image";

interface LetterDisplayProps {
  type: LetterType;
  categoryName: CategoryNameType;
  authorName: string;
  authorBirdType: string;
  recipientName: string;
  recipientBirdType: string;
  title: string;
  content: string;
  letterDate: string;
}

export default function LetterDisplay({
  type,
  categoryName,
  authorName,
  authorBirdType,
  recipientName,
  recipientBirdType,
  title,
  content,
  letterDate,
}: LetterDisplayProps) {
  const formattedLetterDate = formatLetterDate(letterDate);

  return (
    <div className="bg-white01 rounded-[20px] border border-line02 px-global py-5">
      <div className="flex items-center gap-2 mb-global">
        <Image
          src={`/images/icons/direct_${
            type === "OUTGOING" ? "send" : "inbox"
          }_icon.svg`}
          alt="받은편지 아이콘"
          width={16}
          height={16}
        />

        <p
          className={clsx(
            "text-Caption1_R_12",
            type === "OUTGOING" ? "text-gray05" : "text-blue01"
          )}
        >
          {type === "OUTGOING" ? "보낸" : "받은"} 편지
        </p>
      </div>

      <div className="flex items-end justify-start gap-2">
        <Image
          src={`/images/birds/${birdNameMap[authorBirdType]}_50.svg`}
          alt="프로필 새 50"
          width={50}
          height={50}
        />

        <p className="text-[23px] font-bold leading-[27.6px] iceJaram-Rg">
          Dear. {authorName}
        </p>

        <p className="p-[1px_6px] rounded-[6px] bg-gray01 text-[#6B7178] text-Body2_M_14">
          {categoryName}
        </p>
      </div>

      <div className="py-6 whitespace-pre-wrap break-words">
        <h2 className="text-Body1_M_16 mb-2">{title}</h2>
        <p className="text-Body1_R_16">{content}</p>
      </div>

      <div>
        <p className="text-[#8E8E93] text-Caption1_R_12 mb-2">
          {formattedLetterDate}
        </p>

        <div className="flex items-center gap-2">
          <Image
            src={`/images/birds/${birdNameMap[recipientBirdType]}_24.svg`}
            alt="프로필 새 24"
            width={24}
            height={24}
          />
          <p className="font-[Sandoll BaikzongyulPil] text-[18px] font-bold leading-[21.6px] iceJaram-Rg">
            from. {recipientName}
          </p>
        </div>
      </div>
    </div>
  );
}
