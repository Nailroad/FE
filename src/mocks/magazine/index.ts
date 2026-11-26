import type { StaticImageData } from "next/image";

import magazine4 from "@/mocks/home/magazine-4.png";
import magazine5 from "@/mocks/home/magazine-5.png";
import magazine8 from "@/mocks/home/magazine-8.png";
import magazine9 from "@/mocks/home/magazine-9.png";

import cover1 from "./cover-1.png";
import cover2 from "./cover-2.png";
import cover3 from "./cover-3.png";
import cover4 from "./cover-4.png";
import cover5 from "./cover-5.png";
import cover6 from "./cover-6.png";

type Magazine = {
  title: string;
  image: StaticImageData;
  body: string;
  showGalleryPreview?: boolean;
};

const MOCK_MAGAZINES = {
  "1": {
    title: "어른여자 가을 네일.zip",
    image: cover2,
    body: "가을의 따뜻한 색을 손끝에 담아보세요. 차분한 브라운부터 가을빛 포인트까지 둘러볼 수 있어요.",
  },
  "2": {
    title: "말랑말랑 피치코어",
    image: cover1,
    body: "게시글 내용입니다 게시글 내용입니다게시글 내용입니다게시글 내용입니다게시글 내용입니다게시글 내용입니다 게시글 내용입니다",
    showGalleryPreview: true,
  },
  "3": {
    title: "심플한 네일, 근데 심심한 건 싫어!",
    image: cover3,
    body: "부드러운 베이스 위에 작은 포인트를 더한 데일리 네일을 모았어요.",
  },
  "4": {
    title: "네일 매거진 4",
    image: magazine4,
    body: "일상에서 부담 없이 즐길 수 있는 네일 디자인을 소개해요.",
  },
  "5": {
    title: "네일 매거진 5",
    image: magazine5,
    body: "손끝에 색다른 분위기를 더해줄 네일 디자인을 둘러보세요.",
  },
  "6": {
    title: "빛나는 게 좋아 ✨",
    image: cover5,
    body: "빛에 따라 다르게 반짝이는 글리터와 메탈릭 네일을 모았어요.",
  },
  "7": {
    title: "잘 익은 컬러가 좋아 🍇",
    image: cover6,
    body: "포도처럼 깊고 짙은 컬러로 손끝에 계절감을 더해보세요.",
  },
  "8": {
    title: "네일 매거진 8",
    image: magazine8,
    body: "평소 고르던 컬러에 작은 변화를 더할 수 있는 디자인을 소개해요.",
  },
  "9": {
    title: "네일 매거진 9",
    image: magazine9,
    body: "취향에 맞는 색과 질감을 찾을 수 있도록 여러 디자인을 모았어요.",
  },
  "10": {
    title: "귀여운 게 다야.. 🤍",
    image: cover4,
    body: "손끝에 귀여운 포인트를 담은 네일 디자인을 소개해요.",
  },
} satisfies Record<string, Magazine>;

type MagazineId = keyof typeof MOCK_MAGAZINES;

const LIST_LAYOUT = [
  { id: "2", crop: 100 },
  { id: "1", crop: 127.73 },
  { id: "3", crop: 105.47 },
  { id: "10", crop: 106.69 },
  { id: "6", crop: 106.49 },
  { id: "7", crop: 107.95 },
  { id: "6", crop: 106.49 },
  { id: "7", crop: 107.95 },
] satisfies { id: MagazineId; crop: number }[];

export const MOCK_MAGAZINE_CARDS = LIST_LAYOUT.map(({ id, crop }) => ({
  id,
  crop,
  title: MOCK_MAGAZINES[id].title,
  image: MOCK_MAGAZINES[id].image,
}));

export const getMockMagazineIds = () => Object.keys(MOCK_MAGAZINES);

export function getMockMagazine(id: string): Magazine | undefined {
  if (Object.hasOwn(MOCK_MAGAZINES, id)) {
    return MOCK_MAGAZINES[id as MagazineId];
  }
}
