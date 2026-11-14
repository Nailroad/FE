import DesignCard from "@/components/design/DesignCard";
import type { Design } from "@/types/design";

type DesignMasonryProps = {
  designs: Design[];
};

/**
 * 카드 사이를 카드 폭 기준 비율로 환산한 값.
 * 열 높이를 비교할 때 카드 개수만큼 간격도 더해서 좀 더 정확하게 맞춤
 */
const GAP_RATIO = 12 / 166;

/**
 * 2열 배치: 카드를 순서대로 보면서, 지금 더 짧은 열에 하나씩 추가
 * - 두 열의 폭이 같으므로 높이는 "세로 / 가로" 비율만 더해서 비교
 */
function splitIntoColumns(designs: Design[]) {
  const columns: [Design[], Design[]] = [[], []];
  const heights = [0, 0];

  for (const design of designs) {
    const target = heights[0] <= heights[1] ? 0 : 1;
    columns[target].push(design);
    heights[target] += design.height / design.width + GAP_RATIO;
  }

  return columns;
}

export default function DesignMasonry({ designs }: DesignMasonryProps) {
  const columns = splitIntoColumns(designs);

  return (
    <div className="px-medium gap-medium2 flex items-start">
      {columns.map((column, i) => (
        <ul key={i} className="gap-medium2 flex flex-1 flex-col">
          {column.map((design) => (
            <li key={design.id}>
              <DesignCard design={design} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
