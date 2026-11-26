"use client";

import { useRouter } from "next/navigation";

import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

export default function MagazineBackButton({
  fallbackHref,
}: {
  fallbackHref: "/home" | "/magazine";
}) {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace(fallbackHref);
    }
  }

  return (
    <button
      type="button"
      aria-label="이전 화면"
      className="flex size-6 cursor-pointer items-center justify-center"
      onClick={goBack}
    >
      <NavArrowBackIcon />
    </button>
  );
}
