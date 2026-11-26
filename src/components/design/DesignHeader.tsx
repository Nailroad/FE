import Link from "next/link";

import BellIcon from "@/components/icons/BellIcon";
import SettingIcon from "@/components/icons/SettingIcon";

export default function DesignHeader() {
  return (
    <header className="flex h-14 w-full items-center justify-between px-4">
      <h1 className="typo-heading1-bold self-start pt-[18px] text-gray-900">디자인</h1>
      <div className="gap-medium flex items-center text-gray-900">
        <Link href="/notifications" aria-label="알림">
          <BellIcon />
        </Link>
        {/* TODO: 설정 페이지 생기면 경로 확인 */}
        <Link href="/settings" aria-label="설정">
          <SettingIcon />
        </Link>
      </div>
    </header>
  );
}
