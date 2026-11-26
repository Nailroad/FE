import Link from "next/link";
import type { ReactNode } from "react";

import TopBar from "@/components/common/TopBar";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

export default function CustomNailLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-gray-0 flex flex-1 flex-col pt-[env(safe-area-inset-top)]">
      <TopBar
        left={
          <Link
            href="/home"
            aria-label="홈으로 돌아가기"
            className="flex size-6 items-center justify-center"
          >
            <NavArrowBackIcon />
          </Link>
        }
      />
      <h1 className="typo-heading1-semibold px-4 text-gray-900">맞춤형 네일</h1>
      {children}
    </main>
  );
}
