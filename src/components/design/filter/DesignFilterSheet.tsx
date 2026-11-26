"use client";

import { Fragment } from "react";

import Button from "@/components/common/Button";
import { DESIGN_FILTERS, type DesignFilterKey } from "@/components/design/DesignFilterBar";
import BottomSheet from "@/components/design/filter/BottomSheet";
import ChipOptions from "@/components/design/filter/ChipOptions";
import ColorOptions from "@/components/design/filter/ColorOptions";
import { FILTER_OPTIONS } from "@/components/design/filter/filterOptions";
import FilterTagChip from "@/components/design/filter/FilterTagChip";
import ShapeOptions from "@/components/design/filter/ShapeOptions";

type DesignFilterSheetProps = {
  open: boolean;
  /** 지금 보고 있는 탭 */
  tab: DesignFilterKey;
  onTabChange: (tab: DesignFilterKey) => void;
  /** 탭별 선택값 (적용하기 전 임시 선택) */
  selected: Record<DesignFilterKey, string[]>;
  /** 선택지를 눌렀을 때 (선택 ↔ 해제) */
  onToggle: (tab: DesignFilterKey, value: string) => void;
  /** 버튼 위에 보여줄 고른 항목들 (보여줄 순서대로) */
  tags?: { key: DesignFilterKey; value: string }[];
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
  tags = [],
  onClose,
  onReset,
  onApply,
}: DesignFilterSheetProps) {
  const tabLabel = DESIGN_FILTERS.find((filter) => filter.key === tab)?.label;

  return (
    <BottomSheet open={open} onClose={onClose} label="디자인 필터">
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

        {/* 탭 제목 + 선택지 . 넘치면 이 영역만 스크롤 (탭 줄 / 버튼은 고정) */}
        <div className="gap-large flex min-h-0 flex-1 flex-col self-stretch overflow-y-auto pb-4">
          <h2 className="typo-body1-semibold text-center text-gray-900">{tabLabel}</h2>
          {tab === "category" && (
            <ChipOptions
              options={FILTER_OPTIONS.category}
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
          {tab === "hashtag" && (
            <ChipOptions
              options={FILTER_OPTIONS.hashtag}
              selected={selected.hashtag}
              onToggle={(value) => onToggle("hashtag", value)}
              centered
            />
          )}
          {tab === "shape" && (
            <ShapeOptions
              selected={selected.shape}
              onToggle={(value) => onToggle("shape", value)}
            />
          )}
        </div>
      </div>

      <div className="gap-medium2 flex flex-col self-stretch">
        {/* 고른 항목 칩 줄: 없으면 숨김, 많으면 가로 스크롤. ✕(칩)를 누르면 해제 */}
        {tags.length > 0 && (
          <div className="px-medium gap-medium2 flex [scrollbar-width:none] overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {tags.map(({ key, value }, i) => (
              <Fragment key={`${key}-${value}`}>
                {/* 탭(묶음)이 바뀌는 자리에 세로 구분선 */}
                {i > 0 && tags[i - 1].key !== key && (
                  <span aria-hidden="true" className="h-4 w-px shrink-0 self-center bg-gray-300" />
                )}
                <FilterTagChip label={value} onClick={() => onToggle(key, value)} />
              </Fragment>
            ))}
          </div>
        )}

        {/* 하단 버튼 */}
        <div className="px-medium gap-medium flex">
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
      </div>
    </BottomSheet>
  );
}
