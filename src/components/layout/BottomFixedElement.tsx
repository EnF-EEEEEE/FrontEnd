import { ReactNode } from "react";

interface BottomFixedElementProps {
  children: ReactNode;
}

export default function BottomFixedElement({
  children,
}: BottomFixedElementProps) {
  return (
    <div className="fixed bottom-0 pb-11 left-1/2 -translate-x-1/2 w-full max-w-global px-global z-50">
      {children}
    </div>
  );
}
