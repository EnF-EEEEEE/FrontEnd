import { useEffect, useState } from "react";

export default function useKeyboardTransformOffset({
  offsetFromKeyboard = -35, // bottom 44 - margin 9
}: {
  offsetFromKeyboard?: number;
} = {}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const viewport = window.visualViewport;
    if (!viewport) return;

    let animationFrame: number;

    const updateOffset = () => {
      const heightDiff = window.innerHeight - viewport.height;

      if (heightDiff > 100) {
        // 키보드 열림
        setOffset(heightDiff + offsetFromKeyboard);
      } else {
        setOffset(0);
      }
    };

    const rafUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateOffset);
    };

    // 첫 실행
    updateOffset();

    viewport.addEventListener("resize", rafUpdate);
    viewport.addEventListener("scroll", rafUpdate);

    return () => {
      viewport.removeEventListener("resize", rafUpdate);
      viewport.removeEventListener("scroll", rafUpdate);
      cancelAnimationFrame(animationFrame);
    };
  }, [offsetFromKeyboard]);

  return offset;
}
