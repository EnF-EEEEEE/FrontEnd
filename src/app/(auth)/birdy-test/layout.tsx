"use client";

import { useRouter } from "next/navigation";
import CommonLayout from "@/components/layout/CommonLayout";
import CommonHeader from "@/components/layout/CommonHeader";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <CommonLayout isFullScreen>
      <CommonHeader title="버디테스트" noPadding />

      <div className="py-2">{children}</div>
    </CommonLayout>
  );
}
