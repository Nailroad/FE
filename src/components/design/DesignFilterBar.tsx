"use client";

import Chip from "@/components/common/Chip";
import NavArrowDownIcon from "@/components/icons/NavArrowDownIcon";

export const DESIGN_FILTERS = [
  { key: "category", label: "카테고리" },
  { key: "color", label: "색상" },
  { key: "shape", label: "쉐입" },
  { key: "hashtag", label: "해시태그" },
] as const;

export type DesignFilterKey = (typeof DESIGN_FILTERS)[number]["key"];

type DesignFilterBarProps = {
  /** 검정으로 보일 필터 (적용된 값이 있는 필터) */
  activeKeys?: readonly DesignFilterKey[];
  /** 칩을 눌렀을 때 (필터 바텀시트 열기) */
  onFilterClick?: (key: DesignFilterKey) => void;
};

export default function DesignFilterBar({ activeKeys = [], onFilterClick }: DesignFilterBarProps) {
  return (
    // 가로 스크롤 (스크롤바는 숨김)
    <div className="pl-medium gap-medium flex h-[38px] [scrollbar-width:none] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {DESIGN_FILTERS.map(({ key, label }) => (
        <Chip
          key={key}
          selected={activeKeys.includes(key)}
          rightIcon={<NavArrowDownIcon size={20} />}
          onClick={() => onFilterClick?.(key)}
          className="shrink-0 cursor-pointer"
        >
          {label}
        </Chip>
      ))}
    </div>
  );
}
