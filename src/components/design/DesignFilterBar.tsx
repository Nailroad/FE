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
  /** 필터별 적용된 선택 개수. 1개 이상이면 칩이 검정 + 이름 옆에 개수 표시 */
  counts?: Partial<Record<DesignFilterKey, number>>;
  /** 칩을 눌렀을 때 (필터 바텀시트 열기) */
  onFilterClick?: (key: DesignFilterKey) => void;
};

export default function DesignFilterBar({ counts = {}, onFilterClick }: DesignFilterBarProps) {
  return (
    // 가로 스크롤 (스크롤바는 숨김)
    <div className="pl-medium gap-medium flex h-[38px] [scrollbar-width:none] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {DESIGN_FILTERS.map(({ key, label }) => {
        const count = counts[key] ?? 0;
        return (
          <Chip
            key={key}
            selected={count > 0}
            rightIcon={<NavArrowDownIcon size={20} />}
            onClick={() => onFilterClick?.(key)}
            aria-label={count > 0 ? `${label} ${count}개 선택됨` : label}
            className="shrink-0 cursor-pointer"
          >
            {label}
            {count > 0 && <span className="ml-0.5 text-gray-400">{count}</span>}
          </Chip>
        );
      })}
    </div>
  );
}
