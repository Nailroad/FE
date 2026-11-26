import Link from "next/link";

import TopBar from "@/components/common/TopBar";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

export default function SettingsPage() {
  return (
    <main className="bg-gray-0 flex flex-1 flex-col pt-[env(safe-area-inset-top)]">
      <TopBar
        title="설정"
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
    </main>
  );
}
