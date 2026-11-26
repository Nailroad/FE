"use client";

import { useCallback, useState } from "react";

import DesignFilterBar, {
  DESIGN_FILTERS,
  type DesignFilterKey,
} from "@/components/design/DesignFilterBar";
import DesignFilterSheet from "@/components/design/filter/DesignFilterSheet";

export type FilterValues = Record<DesignFilterKey, string[]>;

export const EMPTY_FILTERS: FilterValues = { category: [], color: [], shape: [], hashtag: [] };

/**
 * 필터 칩 줄 + 필터 바텀시트
 * - applied: 적용된 필터 (부모가 관리, 적용하기를 눌렀을 때만 바뀜). 값이 있는 칩만 검정
 * - draft: 시트 안에서 고르는 중인 임시 값. 적용하기 없이 닫으면 버려짐
 */
type DesignFilterProps = {
  /** 적용된 필터 */
  applied: FilterValues;
  /** 적용하기를 눌렀을 때 (확정된 필터가 넘어옴) */
  onApply: (values: FilterValues) => void;
};

export default function DesignFilter({ applied, onApply }: DesignFilterProps) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<DesignFilterKey>("category");
  const [draft, setDraft] = useState<FilterValues>(EMPTY_FILTERS);

  // 필터별 적용된 개수 (1개 이상인 칩만 검정 + 개수 표시)
  const counts = Object.fromEntries(
    DESIGN_FILTERS.map(({ key }) => [key, applied[key].length]),
  ) as Record<DesignFilterKey, number>;

  // 칩 클릭: 지금 적용된 값으로 임시 선택을 시작하고, 누른 칩의 탭으로 시트 열기
  const handleFilterClick = (key: DesignFilterKey) => {
    setDraft(applied);
    setTab(key);
    setOpen(true);
  };

  const handleToggle = (key: DesignFilterKey, value: string) => {
    setDraft((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  // 초기화: 4개 탭의 임시 선택을 전부 비움 (적용하기를 눌러야 목록에 반영)
  const handleReset = () => setDraft(EMPTY_FILTERS);

  // 적용하기: 임시 선택을 확정하고 닫기
  const handleApply = () => {
    onApply(draft);
    setOpen(false);
  };

  // 그냥 닫기: 임시 선택은 다음에 열 때 applied로 덮어써지므로 버려짐
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <DesignFilterBar counts={counts} onFilterClick={handleFilterClick} />
      <DesignFilterSheet
        open={open}
        tab={tab}
        onTabChange={setTab}
        selected={draft}
        onToggle={handleToggle}
        onClose={handleClose}
        onReset={handleReset}
        onApply={handleApply}
      />
    </>
  );
}
