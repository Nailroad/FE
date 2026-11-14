import type { StaticImageData } from "next/image";

import card1 from "@/mocks/MockDesign/design card1.png";
import card2 from "@/mocks/MockDesign/design card2.png";
import card3 from "@/mocks/MockDesign/design card3.png";
import card4 from "@/mocks/MockDesign/design card4.png";
import card5 from "@/mocks/MockDesign/design card5.png";
import card6 from "@/mocks/MockDesign/design card6.png";
import card7 from "@/mocks/MockDesign/design card7.png";
import card8 from "@/mocks/MockDesign/design card8.png";
import card9 from "@/mocks/MockDesign/design card9.jpg";
import card10 from "@/mocks/MockDesign/design card10.jpg";
import card11 from "@/mocks/MockDesign/design card11.jpg";
import card12 from "@/mocks/MockDesign/design card12.jpg";
import type { Design } from "@/types/design";

// import한 사진은 Next.js가 width / height를 자동으로 알려줌 → 비율 계산에 그대로 사용
const toDesign = (id: number, image: StaticImageData, bookmarked = false): Design => ({
  id,
  imageUrl: image.src,
  width: image.width,
  height: image.height,
  bookmarked,
});

export const MOCK_DESIGNS: Design[] = [
  toDesign(1, card1, true),
  toDesign(2, card2),
  toDesign(3, card3),
  toDesign(4, card4),
  toDesign(5, card5),
  toDesign(6, card6),
  toDesign(7, card7),
  toDesign(8, card8),
  toDesign(9, card9),
  toDesign(10, card10),
  toDesign(11, card11),
  toDesign(12, card12),
];
