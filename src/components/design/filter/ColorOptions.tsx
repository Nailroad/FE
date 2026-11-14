import {
  COLOR_SWATCHES,
  FILTER_OPTIONS,
  GLASS_SHADOW,
  LIGHT_COLORS,
} from "@/components/design/filter/filterOptions";

const PER_ROW = 5;

type ColorOptionsProps = {
  /** 선택된 색상들 */
  selected: readonly string[];
  /** 동그라미를 눌렀을 때 (선택 ↔ 해제) */
  onToggle: (value: string) => void;
};

/** 색상 동그라미 + 이름, 한 줄에 5개씩 가운데 정렬. 선택하면 체크 표시 */
export default function ColorOptions({ selected, onToggle }: ColorOptionsProps) {
  const rows: string[][] = [];
  for (let i = 0; i < FILTER_OPTIONS.color.length; i += PER_ROW) {
    rows.push(FILTER_OPTIONS.color.slice(i, i + PER_ROW));
  }

  return (
    <div className="px-large gap-medium2 flex flex-col self-stretch">
      {rows.map((row, i) => (
        <div key={i} className="gap-medium flex items-center justify-center self-stretch">
          {row.map((color) => {
            const active = selected.includes(color);
            const light = LIGHT_COLORS.has(color);

            return (
              <button
                key={color}
                type="button"
                aria-pressed={active}
                onClick={() => onToggle(color)}
                className="gap-medium flex w-[60px] shrink-0 cursor-pointer flex-col items-center px-1 py-2"
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
      ))}
    </div>
  );
}
