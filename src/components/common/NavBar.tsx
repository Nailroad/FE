"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import DesignIcon from "@/components/icons/DesignIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import MatchingIcon from "@/components/icons/MatchingIcon";
import MyIcon from "@/components/icons/MyIcon";
import ShopIcon from "@/components/icons/ShopIcon";

const NAV_ITEMS = [
  { href: "/home", label: "홈", Icon: HomeIcon },
  { href: "/design", label: "디자인", Icon: DesignIcon },
  { href: "/shop", label: "샵", Icon: ShopIcon },
  { href: "/matching", label: "매칭", Icon: MatchingIcon },
  { href: "/my", label: "마이", Icon: MyIcon },
] as const;

/*
 * 유리(Glass) 효과
 */
const GLASS_STYLE = [
  "bg-white/70",
  "backdrop-blur-[3px]",
  "shadow-[0_4px_16px_0_rgb(0_0_0/0.05),inset_1px_1px_1px_rgb(255_255_255/0.65),inset_-1px_-1px_1px_rgb(255_255_255/0.25)]",
].join(" ");

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavBar() {
  const pathname = usePathname();

  if (/^\/design\/[^/]+$/.test(pathname)) {
    return null;
  }

  return (
    <nav aria-label="메인 메뉴" className={`${GLASS_STYLE} w-full rounded-full p-1`}>
      <ul className="flex items-center">
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const active = isActivePath(pathname, href);

          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`typo-caption2-medium gap-small flex h-[52px] w-full flex-col items-center justify-center rounded-full whitespace-nowrap transition-colors ${
                  active ? "text-primary-500 bg-[#898989]/[0.23]" : "text-gray-900"
                }`}
              >
                <Icon active={active} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
