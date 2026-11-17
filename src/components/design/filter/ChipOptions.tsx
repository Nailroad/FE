type ChipOptionsProps = {
  /** 보여줄 선택지 목록 */
  options: readonly string[];
  /** 선택된 값들 */
  selected: readonly string[];
  /** 칩을 눌렀을 때 (선택 ↔ 해제) */
  onToggle: (value: string) => void;
};

/** 네모 선택 칩 (줄이 차면 다음 줄로). 카테고리 / 해시태그 탭에서 사용 */
export default function ChipOptions({ options, selected, onToggle }: ChipOptionsProps) {
  return (
    <div className="px-medium flex flex-wrap content-center items-center gap-2">
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(option)}
            className={`typo-body2-medium rounded-medium flex cursor-pointer items-center justify-center border px-3 py-2 text-gray-900 transition-colors ${
              active ? "border-[#ed5564] bg-[#fff3f5]" : "bg-gray-0 border-gray-300"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
