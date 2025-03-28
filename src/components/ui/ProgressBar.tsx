import React from "react";

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
}

export default function ProgressBar({
  value,
  max,
  color = "#84A667",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      <div className="w-full bg-gray03 rounded-[10px] h-[5px]">
        <div
          className={`rounded-[10px] transition-all, bg-[${color}]`}
          style={{ width: `${percentage}%`, height: "100%" }}
        />
      </div>
    </div>
  );
}
