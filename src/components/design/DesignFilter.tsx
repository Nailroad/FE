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
 * 버튼 위 칩 줄 순서
 * - 같은 탭끼리 묶고, 나중에 생긴 묶음이 앞 (order: 묶음이 생긴 순서, 최신이 앞)
 * - 묶음 안에서는 나중에 누른 게 앞 (값 배열은 누른 순서대로 쌓여 있으므로 뒤집음)
 * - order에 없는 탭(새로고침 등으로 기록이 없을 때)은 탭 순서대로 뒤에 붙임
 */
function toOrderedTags(values: FilterValues, order: DesignFilterKey[]) {
  const keys = [
    ...order,
    ...DESIGN_FILTERS.map(({ key }) => key).filter((key) => !order.includes(key)),
  ].filter((key) => values[key].length > 0);

  return keys.flatMap((key) => [...values[key]].reverse().map((value) => ({ key, value })));
}

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
  // 칩 줄 묶음 순서 (고르는 중 / 적용된 것). 적용할 때 기억해뒀다가 다시 열면 이어서 사용
  const [order, setOrder] = useState<DesignFilterKey[]>([]);
  const [appliedOrder, setAppliedOrder] = useState<DesignFilterKey[]>([]);

  // 필터별 적용된 개수 (1개 이상인 칩만 검정 + 개수 표시)
  const counts = Object.fromEntries(
    DESIGN_FILTERS.map(({ key }) => [key, applied[key].length]),
  ) as Record<DesignFilterKey, number>;

  // 칩 클릭: 지금 적용된 값으로 임시 선택을 시작하고, 누른 칩의 탭으로 시트 열기
  const handleFilterClick = (key: DesignFilterKey) => {
    setDraft(applied);
    setOrder(appliedOrder);
    setTab(key);
    setOpen(true);
  };

  const handleToggle = (key: DesignFilterKey, value: string) => {
    const removing = draft[key].includes(value);
    const next = removing ? draft[key].filter((v) => v !== value) : [...draft[key], value];
    setDraft({ ...draft, [key]: next });

    // 묶음 순서: 이 탭의 첫 선택이면 맨 앞에 새 묶음, 다 지워지면 묶음 제거
    if (!removing && draft[key].length === 0) {
      setOrder((prev) => [key, ...prev.filter((k) => k !== key)]);
    } else if (next.length === 0) {
      setOrder((prev) => prev.filter((k) => k !== key));
    }
  };

  // 초기화: 4개 탭의 임시 선택을 전부 비움 (적용하기를 눌러야 목록에 반영)
  const handleReset = () => {
    setDraft(EMPTY_FILTERS);
    setOrder([]);
  };

  // 적용하기: 임시 선택을 확정하고 닫기
  const handleApply = () => {
    onApply(draft);
    setAppliedOrder(order);
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
        tags={toOrderedTags(draft, order)}
        onClose={handleClose}
        onReset={handleReset}
        onApply={handleApply}
      />
    </>
  );
}
