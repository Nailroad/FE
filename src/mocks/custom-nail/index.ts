import type { CustomNailDesign } from "@/components/custom-nail/CustomNailGrid";

import design1 from "./design-1.png";
import design2 from "./design-2.png";
import design3 from "./design-3.png";
import design4 from "./design-4.png";
import design5 from "./design-5.png";
import design6 from "./design-6.png";

export const MOCK_CUSTOM_NAIL_DESIGNS: readonly CustomNailDesign[] = [
  { id: "mock-1", title: "네이비 별과 도트 네일", imageSrc: design1, liked: false },
  { id: "mock-2", title: "레드와 하늘색 별 네일", imageSrc: design2, liked: true },
  { id: "mock-3", title: "브라운 별 포인트 네일", imageSrc: design3, liked: false },
  { id: "mock-4", title: "은은한 핑크 펄 네일", imageSrc: design4, liked: false },
  { id: "mock-5", title: "옐로우 도트 네일", imageSrc: design5, liked: true },
  { id: "mock-6", title: "핑크 파츠 포인트 네일", imageSrc: design6, liked: false },
  { id: "mock-7", title: "네이비 별 네일 추천 1", imageSrc: design1, liked: true },
  { id: "mock-8", title: "네이비 별 네일 추천 2", imageSrc: design1, liked: true },
];
