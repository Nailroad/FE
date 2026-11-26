"use client";

import { useRouter } from "next/navigation";

import TopBar from "@/components/common/TopBar";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

export default function SettingsPage() {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/home");
    }
  }

  return (
    <main className="bg-gray-0 flex flex-1 flex-col pt-[env(safe-area-inset-top)]">
      <TopBar
        title="설정"
        left={
          <button
            type="button"
            aria-label="이전 화면"
            className="flex size-6 cursor-pointer items-center justify-center"
            onClick={handleBack}
          >
            <NavArrowBackIcon />
          </button>
        }
      />
    </main>
  );
}
