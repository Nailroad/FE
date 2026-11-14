"use client";

import { useState } from "react";

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
  /** 칩을 눌렀을 때 (추후 필터 바텀시트 열기) */
  onFilterClick?: (key: DesignFilterKey) => void;
};

export default function DesignFilterBar({ onFilterClick }: DesignFilterBarProps) {
  // 선택하는 필터들 (현재는 다시 누르면 해제되는 토글 방식-> 추후 기능 협의 필요)
  const [selectedKeys, setSelectedKeys] = useState<DesignFilterKey[]>([]);

  const handleClick = (key: DesignFilterKey) => {
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
    onFilterClick?.(key);
  };

  return (
    // 가로 스크롤 (스크롤바는 숨김)
    <div className="pl-medium gap-medium flex h-[38px] [scrollbar-width:none] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {DESIGN_FILTERS.map(({ key, label }) => (
        <Chip
          key={key}
          selected={selectedKeys.includes(key)}
          rightIcon={<NavArrowDownIcon size={20} />}
          onClick={() => handleClick(key)}
          className="shrink-0 cursor-pointer"
        >
          {label}
        </Chip>
      ))}
    </div>
  );
}
