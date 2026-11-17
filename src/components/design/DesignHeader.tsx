import Link from "next/link";

import BellIcon from "@/components/icons/BellIcon";

export default function DesignHeader() {
  return (
    <header className="flex h-14 w-full items-center justify-between px-4">
      <h1 className="typo-heading1-bold self-start pt-[18px] text-gray-900">디자인</h1>
      <Link href="/notifications" aria-label="알림" className="text-gray-900">
        <BellIcon />
      </Link>
    </header>
  );
}
