"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBirdyTestStore } from "@/store/useBirdyTestStore";

export default function BirdyTestEntryPage() {
  const router = useRouter();
  const { testStep } = useBirdyTestStore();

  useEffect(() => {
    if (testStep === 0) {
      router.replace("/birdy-test/intro");
    } else if (testStep >= 1 && testStep <= 12) {
      router.replace(`/birdy-test/${testStep}`);
    } else {
      router.replace("/birdy-test/result");
    }
  }, [testStep, router]);

  return null;
}
