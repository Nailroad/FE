import {
  COLOR_SWATCHES,
  FILTER_OPTIONS,
  GLASS_SHADOW,
  LIGHT_COLORS,
} from "@/components/design/filter/filterOptions";

type ColorOptionsProps = {
  /** 선택된 색상들 */
  selected: readonly string[];
  /** 동그라미를 눌렀을 때 (선택 ↔ 해제) */
  onToggle: (value: string) => void;
};

/**
 * 색상 동그라미 + 이름. 선택하면 체크 표시
 * - 5열 그리드: 표 전체는 가운데, 칸은 왼쪽부터 채움 → 마지막 줄도 위 줄과 열이 맞음
 */
export default function ColorOptions({ selected, onToggle }: ColorOptionsProps) {
  return (
    <div className="px-large grid grid-cols-[repeat(5,60px)] justify-center gap-x-2 gap-y-3 self-stretch">
      {FILTER_OPTIONS.color.map((color) => {
        const active = selected.includes(color);
        const light = LIGHT_COLORS.has(color);

        return (
          <button
            key={color}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(color)}
            className="gap-medium flex cursor-pointer flex-col items-center px-1 py-2"
          >
            <span
              className={`flex size-12 items-center justify-center rounded-full ${
                light ? "border border-gray-300" : ""
              }`}
              style={{
                background: COLOR_SWATCHES[color],
                boxShadow: color === "투명" ? GLASS_SHADOW : undefined,
              }}
            >
              {active && (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path
                    d="M16.5 24.75L22.5 30.75L31.5 17.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // 밝은 색은 회색 체크(#736F73), 나머지는 흰색 체크
                    stroke={light ? "#736f73" : "#ffffff"}
                  />
                </svg>
              )}
            </span>
            <span className="typo-caption1-medium text-center text-gray-900">{color}</span>
          </button>
        );
      })}
    </div>
  );
}
