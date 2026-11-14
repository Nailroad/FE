"use client";

import { useCallback, useState } from "react";

import DesignFilterBar, { type DesignFilterKey } from "@/components/design/DesignFilterBar";
import DesignFilterSheet from "@/components/design/filter/DesignFilterSheet";

/** 필터 칩 줄 + 필터 바텀시트. 칩을 누르면 해당 탭으로 시트가 열림 */
export default function DesignFilter() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<DesignFilterKey>("category");
  // 탭별 선택값 (TODO: 적용하기 / 초기화 연결)
  const [selected, setSelected] = useState<Record<DesignFilterKey, string[]>>({
    category: [],
    color: [],
    shape: [],
    hashtag: [],
  });

  const handleToggle = (key: DesignFilterKey, value: string) => {
    setSelected((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const handleFilterClick = (key: DesignFilterKey) => {
    setTab(key);
    setOpen(true);
  };

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <DesignFilterBar onFilterClick={handleFilterClick} />
      <DesignFilterSheet
        open={open}
        tab={tab}
        onTabChange={setTab}
        selected={selected}
        onToggle={handleToggle}
        onClose={handleClose}
        onApply={handleClose}
      />
    </>
  );
}
