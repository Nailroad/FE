"use client";

import NavArrowDownIcon from "@/components/icons/NavArrowDownIcon";

type DesignTotalNumberProps = {
  total: number;
  sortLabel?: string;
  /** 정렬 버튼을 눌렀을 때 (추후 정렬 선택 열기) */
  onSortClick?: () => void;
};

export default function DesignTotalNumber({
  total,
  sortLabel = "최신순",
  onSortClick,
}: DesignTotalNumberProps) {
  return (
    <div className="px-medium flex items-center justify-between">
      <p className="typo-body2-medium text-gray-900">{total.toLocaleString("ko-KR")}개</p>
      <button
        type="button"
        onClick={onSortClick}
        className="typo-body2-medium flex cursor-pointer items-center text-gray-900"
      >
        {sortLabel}
        <NavArrowDownIcon size={16} />
      </button>
    </div>
  );
}
