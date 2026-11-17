"use client";

import { type ReactNode, useEffect } from "react";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
};

/**
 * 바텀시트
 * - 배경을 누르거나 ESC를 누르면 닫힘
 * - 열려 있는 동안 뒤 화면 스크롤 막음
 */
export default function BottomSheet({ open, onClose, label, children }: BottomSheetProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* 배경: 누르면 닫힘 */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`bg-gray-0 rounded-t-xlarge pb-large gap-medium absolute inset-x-0 bottom-0 mx-auto flex h-[512px] w-full max-w-[480px] flex-col transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex h-7 shrink-0 items-center justify-center self-stretch">
          <span className="h-1 w-[60px] rounded-full bg-[#ddd]" />
        </div>

        {children}
      </div>
    </div>
  );
}
