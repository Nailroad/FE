import HomeScreen, {
  type HomeBanner,
  type HomeMagazineItem,
  type HomeNailItem,
} from "@/components/home/HomeScreen";
import banner1 from "@/mocks/home/banner-1.png";
import banner from "@/mocks/home/banner-2.png";
import magazine1 from "@/mocks/home/magazine-1.png";
import magazine2 from "@/mocks/home/magazine-2.png";
import magazine3 from "@/mocks/home/magazine-3.png";
import magazine4 from "@/mocks/home/magazine-4.png";
import magazine5 from "@/mocks/home/magazine-5.png";
import magazine6 from "@/mocks/home/magazine-6.png";
import magazine7 from "@/mocks/home/magazine-7.png";
import magazine8 from "@/mocks/home/magazine-8.png";
import magazine9 from "@/mocks/home/magazine-9.png";
import magazine10 from "@/mocks/home/magazine-10.png";
import nail1 from "@/mocks/home/nail-1.png";
import nail3 from "@/mocks/home/nail-3.png";
import nail4 from "@/mocks/home/nail-4.png";

const banners: HomeBanner[] = [
  {
    id: "pink-holiday-preview",
    title: "핑크 홀리데이",
    imageSrc: banner1,
    imageCrop: "cover",
    href: "/banner/pink-holiday-preview",
  },
  {
    id: "pink-holiday",
    eyebrow: "PINK HOLIDAY",
    title: "올겨울 가장 사랑스러운\n핑크 네일",
    description: "나만의 핑크를 찾아보세요.",
    imageSrc: banner,
    imageCrop: "zoomed",
    href: "/banner/pink-holiday",
  },
];

const nailItems: HomeNailItem[] = [
  { id: "nail-1", title: "시럽 네일", imageSrc: nail1, href: "/design/nail-1" },
  { id: "nail-2", title: "시럽 네일", imageSrc: nail1, href: "/design/nail-2" },
  { id: "nail-3", title: "글리터 네일", imageSrc: nail3, href: "/design/nail-3" },
  { id: "nail-4", title: "데일리 네일", imageSrc: nail4, href: "/design/nail-4" },
];

const magazineItems: HomeMagazineItem[] = [
  { id: "magazine-1", category: "NAIL TREND", title: "이번 시즌, 주목할 네일 컬러", imageSrc: magazine1, href: "/magazine/1" },
  { id: "magazine-2", category: "NAIL CARE", title: "손끝까지 건강하게 관리하는 법", imageSrc: magazine2, href: "/magazine/2" },
  { id: "magazine-3", category: "NAIL STYLE", title: "취향을 담은 이달의 네일 디자인", imageSrc: magazine3, href: "/magazine/3" },
  { id: "magazine-4", category: "NAIL MAGAZINE", title: "네일 매거진 4", imageSrc: magazine4, href: "/magazine/4" },
  { id: "magazine-5", category: "NAIL MAGAZINE", title: "네일 매거진 5", imageSrc: magazine5, href: "/magazine/5" },
  { id: "magazine-6", category: "NAIL MAGAZINE", title: "네일 매거진 6", imageSrc: magazine6, href: "/magazine/6" },
  { id: "magazine-7", category: "NAIL MAGAZINE", title: "네일 매거진 7", imageSrc: magazine7, href: "/magazine/7" },
  { id: "magazine-8", category: "NAIL MAGAZINE", title: "네일 매거진 8", imageSrc: magazine8, href: "/magazine/8" },
  { id: "magazine-9", category: "NAIL MAGAZINE", title: "네일 매거진 9", imageSrc: magazine9, href: "/magazine/9" },
  { id: "magazine-10", category: "NAIL MAGAZINE", title: "네일 매거진 10", imageSrc: magazine10, href: "/magazine/10" },
];

export default function HomePage() {
  // 인증 연동 전에는 비로그인 상태로 표시합니다.
  return (
    <HomeScreen
      banners={banners}
      nailItems={nailItems}
      magazineItems={magazineItems}
      isLoggedIn={false}
    />
  );
}
