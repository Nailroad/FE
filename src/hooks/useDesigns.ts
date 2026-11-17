import { useInfiniteQuery } from "@tanstack/react-query";

import { type DesignListParams, getDesigns } from "@/apis/design";

/** 한 번에 받아오는 개수 (메이슨리 BATCH_SIZE와 맞춤) */
const PAGE_SIZE = 20;

/**
 * 디자인 목록 무한 스크롤
 * - 필터가 바뀌면 queryKey가 바뀌어서 처음부터 다시 요청
 * - 다음 페이지는 응답의 nextCursor로 요청 (hasNext가 false면 끝)
 */
export function useDesigns(filters: Omit<DesignListParams, "cursor" | "size">) {
  return useInfiniteQuery({
    queryKey: ["designs", filters],
    queryFn: ({ pageParam }) => getDesigns({ ...filters, cursor: pageParam, size: PAGE_SIZE }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? (lastPage.nextCursor ?? undefined) : undefined,
  });
}
