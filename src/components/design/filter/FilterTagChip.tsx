import type { ButtonHTMLAttributes } from "react";

import CloseIcon from "@/components/icons/CloseIcon";

type FilterTagChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  /** 칩에 보일 글자 (예: "자석", "레드", "#심플네일") */
  label: string;
};

/**
 * 고른 필터를 보여주는 칩: 글자 + ✕
 * - 높이 28px 고정, 넓이는 글자 길이에 따라 늘어남
 * - 칩 전체가 버튼 (✕가 작아서 칩 어디를 눌러도 해제되게) → onClick으로 해제 처리
 */
export default function FilterTagChip({
  label,
  className = "",
  type = "button",
  ...props
}: FilterTagChipProps) {
  return (
    <button
      type={type}
      aria-label={`${label} 선택 해제`}
      className={`rounded-small typo-body2-semibold px-small flex h-7 shrink-0 cursor-pointer items-center justify-center gap-[7px] bg-gray-100 py-1 whitespace-nowrap text-gray-900 ${className}`}
      {...props}
    >
      {label}
      <CloseIcon className="text-gray-600" />
    </button>
  );
}
