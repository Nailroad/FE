import Link from "next/link";

import TopBar from "@/components/common/TopBar";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

type SignupBackBarProps = { href: string; onBack?: never } | { href?: never; onBack: () => void };

export default function SignupBackBar({ href, onBack }: SignupBackBarProps) {
  const buttonClass = "flex size-6 items-center justify-center text-gray-900";

  return (
    <TopBar
      className="shrink-0"
      left={
        href ? (
          <Link href={href} aria-label="이전 화면" className={buttonClass}>
            <NavArrowBackIcon />
          </Link>
        ) : (
          <button
            type="button"
            aria-label="이전 화면"
            className={`${buttonClass} cursor-pointer`}
            onClick={onBack}
          >
            <NavArrowBackIcon />
          </button>
        )
      }
    />
  );
}
