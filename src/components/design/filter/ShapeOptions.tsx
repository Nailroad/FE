import { FILTER_OPTIONS, SHAPE_ICONS } from "@/components/design/filter/filterOptions";

type ShapeOptionsProps = {
  /** 선택된 쉐입들 */
  selected: readonly string[];
  /** 카드를 눌렀을 때 (선택 ↔ 해제) */
  onToggle: (value: string) => void;
};

/**
 * 손톱 모양 카드 + 이름
 * - 4열 그리드: 표 전체는 가운데, 칸은 왼쪽부터 채움 → 마지막 줄도 위 줄과 열이 맞음
 */
export default function ShapeOptions({ selected, onToggle }: ShapeOptionsProps) {
  return (
    <div className="px-medium grid grid-cols-[repeat(4,minmax(0,77px))] justify-center gap-3 self-stretch">
      {FILTER_OPTIONS.shape.map((shape) => {
        const active = selected.includes(shape);
        const Icon = SHAPE_ICONS[shape];

        return (
          <button
            key={shape}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(shape)}
            className="gap-medium flex cursor-pointer flex-col items-center"
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
  );
}
