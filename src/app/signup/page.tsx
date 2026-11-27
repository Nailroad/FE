import Link from "next/link";

import { MEMBER_TYPES } from "@/components/auth/options";
import SignupIntro from "@/components/auth/SignupIntro";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

export default function SignupPage() {
  return (
    <SignupIntro>
      <div className="gap-medium2 flex w-full flex-col">
        {MEMBER_TYPES.map(({ value, title, description }) => (
          <Link
            key={value}
            href={`/signup/${value}`}
            className="rounded-medium2 p-medium flex min-h-[77px] items-center justify-between gap-3 border border-gray-300 hover:bg-gray-50"
          >
            <span className="gap-small flex flex-col">
              <span className="typo-body1-medium">{title}</span>
              <span className="typo-caption1-regular text-gray-600">{description}</span>
            </span>
            <NavArrowBackIcon size={20} className="shrink-0 rotate-180" />
          </Link>
        ))}
      </div>
    </SignupIntro>
  );
}
