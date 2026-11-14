"use client";

import { useCallback, useState } from "react";

import DesignFilterBar, { type DesignFilterKey } from "@/components/design/DesignFilterBar";
import DesignFilterSheet from "@/components/design/filter/DesignFilterSheet";

/** 필터 칩 줄 + 필터 바텀시트. 칩을 누르면 해당 탭으로 시트가 열림 */
export default function DesignFilter() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<DesignFilterKey>("category");

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
        onClose={handleClose}
        onApply={handleClose}
      />
    </>
  );
}
