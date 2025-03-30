"use client";

import clsx from "clsx";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}

export default function Modal({ children, onClose, className }: ModalProps) {
  return (
    <div className="fixed inset-0 z-999 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-70" onClick={onClose} />
      <div
        className={clsx(
          "relative w-full max-w-global max-h-[90svh] mx-global px-global py-6 bg-white01 rounded-[18px] flex flex-col overflow-y-auto",
          className
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
