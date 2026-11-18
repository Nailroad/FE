import { useQuery } from "@tanstack/react-query";

import { getDesignDetail } from "@/apis/design";

/** 디자인 상세 조회 */
export function useDesignDetail(designId: number) {
  return useQuery({
    queryKey: ["design", designId],
    queryFn: () => getDesignDetail(designId),
    enabled: Number.isInteger(designId) && designId > 0,
  });
}
