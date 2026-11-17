import design1Image from "@/mocks/design-detail/design-1.png";
import shopProfileImage from "@/mocks/design-detail/shop-profile.png";

export type DesignColor = {
  name: string;
  hex: string;
};

export type DesignDetail = {
  detailImage?: typeof design1Image;
  categories: string[];
  shapes: string[];
  colors: DesignColor[];
  hashtags: string[];
  shop: {
    name: string;
    address: string;
    profileImage: typeof shopProfileImage;
  };
};

// API 연동 전 상세 화면을 확인하기 위한 임시 데이터입니다.
// 실제 연동 시에는 디자인 id를 기준으로 상세 API 응답으로 교체합니다.
const DEFAULT_DESIGN_DETAIL: DesignDetail = {
  categories: ["시럽", "파츠", "그라데이션"],
  shapes: ["자석젤", "파츠", "원컬러"],
  colors: [
    { name: "핑크", hex: "#EE89B0" },
    { name: "화이트", hex: "#FFFFFF" },
    { name: "베이지", hex: "#F7E8D8" },
  ],
  hashtags: ["#여리여리", "#청순네일", "#연말네일"],
  shop: {
    name: "뷰티네일",
    address: "서대문구 이화로 12",
    profileImage: shopProfileImage,
  },
};

export const MOCK_DESIGN_DETAILS: Record<number, DesignDetail> = Object.fromEntries(
  Array.from({ length: 12 }, (_, index) => [
    index + 1,
    {
      ...DEFAULT_DESIGN_DETAIL,
      ...(index === 0 ? { detailImage: design1Image } : {}),
    },
  ]),
);
