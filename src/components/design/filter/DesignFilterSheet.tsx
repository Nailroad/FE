"use client";

import Button from "@/components/common/Button";
import { DESIGN_FILTERS, type DesignFilterKey } from "@/components/design/DesignFilterBar";
import BottomSheet from "@/components/design/filter/BottomSheet";

type DesignFilterSheetProps = {
  open: boolean;
  /** 지금 보고 있는 탭 */
  tab: DesignFilterKey;
  onTabChange: (tab: DesignFilterKey) => void;
  onClose: () => void;
  onReset?: () => void;
  onApply?: () => void;
};

export default function DesignFilterSheet({
  open,
  tab,
  onTabChange,
  onClose,
  onReset,
  onApply,
}: DesignFilterSheetProps) {
  const tabLabel = DESIGN_FILTERS.find((filter) => filter.key === tab)?.label;

  return (
    <BottomSheet open={open} onClose={onClose} label="디자인 필터">
      <div className="gap-medium flex flex-col self-stretch">
        <div role="tablist" className="px-medium gap-medium flex">
          {DESIGN_FILTERS.map(({ key, label }) => {
            const active = key === tab;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onTabChange(key)}
                className={`cursor-pointer transition-colors ${
                  active ? "typo-body1-semibold text-gray-900" : "typo-body1-medium text-gray-500"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <hr className="border-gray-300" />
      </div>

      {/* 탭 제목 + 본문 */}
      <div className="gap-xlarge px-medium flex flex-1 flex-col self-stretch pt-6">
        <h2 className="typo-body1-semibold text-center text-gray-900">{tabLabel}</h2>
        {/* TODO: 탭별 선택지 (카테고리 / 색상 / 쉐입 / 해시태그) */}
      </div>

      {/* 하단 버튼 */}
      <div className="px-medium gap-medium flex self-stretch">
        <button
          type="button"
          onClick={onReset}
          className="typo-body1-medium rounded-medium2 flex h-[52px] w-[89px] shrink-0 cursor-pointer items-center justify-center border border-gray-300 p-2.5 text-gray-900"
        >
          초기화
        </button>
        <Button onClick={onApply} className="flex-1 cursor-pointer">
          적용하기
        </Button>
      </div>
    </BottomSheet>
  );
}
