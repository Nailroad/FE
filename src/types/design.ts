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
