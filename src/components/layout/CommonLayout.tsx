import clsx from "clsx";
import { ReactNode } from "react";

interface CommonLayoutProps {
  children: ReactNode;
  noPadding?: boolean;
  isFullScreen?: boolean;
  className?: string;
}

export default function CommonLayout({
  children,
  noPadding = false,
  isFullScreen = false,
  className = "",
}: CommonLayoutProps) {
  return (
    <div
      className={clsx(
        "flex flex-col w-full",
        isFullScreen ? "relative h-full overflow-hidden" : "min-h-full",
        !noPadding && "px-global",
        className
      )}
    >
      {children}
    </div>
  );
}
