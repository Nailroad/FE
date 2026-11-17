import { apiGet } from "@/apis/client";
import type { DesignDetailResponse, DesignListResponse } from "@/types/design";

/** 디자인 목록 요청 값. 같은 이름 안에서는 OR, 서로 다른 이름끼리는 AND (백엔드 규칙) */
export type DesignListParams = {
  keyword?: string;
  categoryCode?: string[];
  shapeCode?: string[];
  colorCode?: string[];
  tagName?: string[];
  cursor?: number;
  size?: number;
};

/** 디자인 목록 조회 */
export function getDesigns(params: DesignListParams) {
  return apiGet<DesignListResponse>("/api/v1/designs", params);
}

/** 디자인 상세 조회 */
export function getDesignDetail(designId: number) {
  return apiGet<DesignDetailResponse>(`/api/v1/designs/${designId}`);
}
