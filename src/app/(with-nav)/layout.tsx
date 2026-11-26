import type { ReactNode } from "react";

import NavBar from "@/components/common/NavBar";

export default function WithNavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* 고정 네브바가 본문을 가리지 않도록 메뉴 높이와 하단 safe area만큼 여백을 둡니다. */}
      <div className="flex flex-1 flex-col pb-[calc(76px+max(34px,env(safe-area-inset-bottom)))]">
        {children}
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[480px] px-4 pb-[max(34px,env(safe-area-inset-bottom))]">
        <NavBar />
      </div>
    </>
  );
}
