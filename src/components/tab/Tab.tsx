"use client";

export type TabItem<T extends string> = {
  value: T;
  label: string;
};

type TabProps<T extends string> = {
  /** 탭 목록. 순서대로 왼쪽부터 표시되고, 부모 폭을 개수만큼 똑같이 나눔 */
  items: readonly TabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

/**
 * @example
 * const TABS = [
 *   { value: "design", label: "디자인" },
 *   { value: "shop", label: "샵" },
 * ] as const;
 *
 * const [tab, setTab] = useState<"design" | "shop">("design");
 *
 * <Tab items={TABS} value={tab} onChange={setTab} />
 * {tab === "design" ? <DesignList /> : <ShopList />}
 */

export default function Tab<T extends string>({
  items,
  value,
  onChange,
  className = "",
}: TabProps<T>) {
  return (
    <div role="tablist" className={`flex w-full ${className}`}>
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.value)}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <span
              className={`transition-colors ${
                active ? "typo-body1-semibold text-gray-900" : "typo-body1-medium text-gray-500"
              }`}
            >
              {item.label}
            </span>
            <span
              aria-hidden="true"
              className={`h-[2px] w-full transition-colors ${active ? "bg-gray-900" : "bg-transparent"}`}
            />
          </button>
        );
      })}
    </div>
  );
}
