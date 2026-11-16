import { FILTER_OPTIONS, SHAPE_ICONS } from "@/components/design/filter/filterOptions";

/** 한 줄에 4개 */
const PER_ROW = 4;

type ShapeOptionsProps = {
  /** 선택된 쉐입들 */
  selected: readonly string[];
  /** 카드를 눌렀을 때 (선택 ↔ 해제) */
  onToggle: (value: string) => void;
};

/** 손톱 모양 카드 + 이름, 한 줄에 4개씩 (마지막 줄은 왼쪽 정렬) */
export default function ShapeOptions({ selected, onToggle }: ShapeOptionsProps) {
  const rows: string[][] = [];
  for (let i = 0; i < FILTER_OPTIONS.shape.length; i += PER_ROW) {
    rows.push(FILTER_OPTIONS.shape.slice(i, i + PER_ROW));
  }

  return (
    <div className="px-medium gap-medium2 flex flex-col self-stretch">
      {rows.map((row, i) => (
        <div key={i} className="gap-medium2 flex items-center self-stretch">
          {row.map((shape) => {
            const active = selected.includes(shape);
            const Icon = SHAPE_ICONS[shape];

            return (
              <button
                key={shape}
                type="button"
                aria-pressed={active}
                onClick={() => onToggle(shape)}
                className="gap-medium flex w-[77px] shrink cursor-pointer flex-col items-center"
              >
                <span
                  className={`rounded-medium flex h-[88px] w-full items-center justify-center border text-gray-900 transition-colors ${
                    active ? "border-[#ed5564] bg-[#fff3f5]" : "bg-gray-0 border-gray-300"
                  }`}
                >
                  <Icon />
                </span>
                <span className="typo-caption1-medium text-center text-gray-900">{shape}</span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
