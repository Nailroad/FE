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

/** 한 번에 받아오는 개수. 이 묶음 안에서만 긴/짧은 사진을 섞어서 정렬 순서를 최대한 유지 */
const BATCH_SIZE = 20;

const ratioOf = (design: Design) => design.height / design.width;

/** 이 비율(세로 / 가로)보다 크면 "긴 사진" (1 = 정사각형) */
const TALL_RATIO = 1.2;

/**
 * 묶음 하나를 "긴 것 → 짧은 것 → 긴 것 → ..." 순서로 섞기
 * 1. 비율이 TALL_RATIO보다 크면 긴 그룹, 아니면 짧은 그룹
 * 2. 각 그룹 안에서는 원래 순서 유지
 * 3. 긴 것부터 하나씩 번갈아 꺼내고, 한쪽이 먼저 떨어지면 남은 쪽을 이어서 넣음
 */
function interleaveByHeight(batch: Design[]) {
  const tall = batch.filter((design) => ratioOf(design) > TALL_RATIO);
  const short = batch.filter((design) => ratioOf(design) <= TALL_RATIO);

  const result: Design[] = [];
  for (let i = 0; i < Math.max(tall.length, short.length); i++) {
    if (tall[i]) result.push(tall[i]);
    if (short[i]) result.push(short[i]);
  }
  return result;
}

/** 전체 목록을 BATCH_SIZE씩 잘라서 묶음마다 섞은 뒤 다시 이어 붙임 */
function arrangeByBatch(designs: Design[]) {
  const result: Design[] = [];
  for (let i = 0; i < designs.length; i += BATCH_SIZE) {
    result.push(...interleaveByHeight(designs.slice(i, i + BATCH_SIZE)));
  }
  return result;
}

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
    heights[target] += ratioOf(design) + GAP_RATIO;
  }

  return columns;
}

export default function DesignMasonry({ designs }: DesignMasonryProps) {
  const columns = splitIntoColumns(arrangeByBatch(designs));

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
