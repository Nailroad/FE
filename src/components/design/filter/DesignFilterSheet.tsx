"use client";

import Button from "@/components/common/Button";
import { DESIGN_FILTERS, type DesignFilterKey } from "@/components/design/DesignFilterBar";
import BottomSheet from "@/components/design/filter/BottomSheet";
import CategoryOptions from "@/components/design/filter/CategoryOptions";
import ColorOptions from "@/components/design/filter/ColorOptions";

type DesignFilterSheetProps = {
  open: boolean;
  /** 지금 보고 있는 탭 */
  tab: DesignFilterKey;
  onTabChange: (tab: DesignFilterKey) => void;
  /** 탭별 선택값 (적용하기 전 임시 선택) */
  selected: Record<DesignFilterKey, string[]>;
  /** 선택지를 눌렀을 때 (선택 ↔ 해제) */
  onToggle: (tab: DesignFilterKey, value: string) => void;
  onClose: () => void;
  onReset?: () => void;
  onApply?: () => void;
};

export default function DesignFilterSheet({
  open,
  tab,
  onTabChange,
  selected,
  onToggle,
  onClose,
  onReset,
  onApply,
}: DesignFilterSheetProps) {
  const tabLabel = DESIGN_FILTERS.find((filter) => filter.key === tab)?.label;

  return (
    <BottomSheet open={open} onClose={onClose} label="디자인 필터">
      {/* 탭 줄 묶음 ↔ 제목 묶음 사이 24px */}
      <div className="gap-xlarge flex min-h-0 flex-1 flex-col self-stretch">
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

        {/* 탭 제목 + 선택지 (16px). 넘치면 이 영역만 스크롤 (탭 줄 / 버튼은 고정) */}
        <div className="gap-large flex min-h-0 flex-1 flex-col self-stretch overflow-y-auto pb-4">
          <h2 className="typo-body1-semibold text-center text-gray-900">{tabLabel}</h2>
          {tab === "category" && (
            <CategoryOptions
              selected={selected.category}
              onToggle={(value) => onToggle("category", value)}
            />
          )}
          {tab === "color" && (
            <ColorOptions
              selected={selected.color}
              onToggle={(value) => onToggle("color", value)}
            />
          )}
          {/* TODO: 쉐입 / 해시태그 선택지 */}
        </div>
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
