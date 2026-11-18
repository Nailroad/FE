/** 디자인(네일 사진) 한 개 */
export type Design = {
  id: number;
  imageUrl: string;
  /** 원본 사진 가로 크기 (비율 계산용) */
  width: number;
  /** 원본 사진 세로 크기 (비율 계산용) */
  height: number;
  bookmarked: boolean;
};

/* ───────────── API (GET /api/v1/designs) ───────────── */

/** 디자인 목록 아이템 */
export type DesignListItem = {
  designId: number;
  shopId: number;
  name: string;
  designImageUrl: string;
  categoryCodes: string[];
  shapeCodes: string[];
  colorCodes: string[];
  isLiked: boolean;
};

/** 디자인 목록 응답 (커서 방식) */
export type DesignListResponse = {
  items: DesignListItem[];
  size: number;
  hasNext: boolean;
  nextCursor: number | null;
  /** 필터가 적용된 전체 개수 (필터 없으면 전체 디자인 수) */
  totalCount: number;
};

/** 디자인 상세 응답 (GET /api/v1/designs/{designId}) */
export type DesignDetailResponse = DesignListItem & {
  shopName: string;
  shopAddress: string;
  tagNames: string[];
};
