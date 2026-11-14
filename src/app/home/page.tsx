import HomeScreen, {
  type HomeBanner,
  type HomeMagazineItem,
  type HomeNailItem,
} from "@/components/home/HomeScreen";

// TODO: Replace these temporary design fixtures with the Home API response.
// The UI receives every display value through props, so it does not need to
// change when the backend is connected.
const banners: HomeBanner[] = [
  {
    id: "pink-holiday",
    eyebrow: "PINK HOLIDAY",
    title: "올겨울 가장 사랑스러운\n핑크 네일",
    description: "나만의 핑크를 찾아보세요.",
    imageSrc: "/images/home/banner-2.png",
    href: "/design",
  },
];

const nailItems: HomeNailItem[] = [
  { id: "nail-1", title: "시럽 네일", imageSrc: "/images/home/nail-1.png", href: "/design/nail-1" },
  { id: "nail-2", title: "시럽 네일", imageSrc: "/images/home/nail-1.png", href: "/design/nail-2" },
  { id: "nail-3", title: "글리터 네일", imageSrc: "/images/home/nail-3.png", href: "/design/nail-3" },
  { id: "nail-4", title: "데일리 네일", imageSrc: "/images/home/nail-4.png", href: "/design/nail-4" },
];

const magazineItems: HomeMagazineItem[] = [
  {
    id: "magazine-1",
    category: "NAIL TREND",
    title: "이번 시즌, 주목할 네일 컬러",
    imageSrc: "/images/home/magazine-1.png",
    href: "/magazine/1",
  },
  {
    id: "magazine-2",
    category: "NAIL CARE",
    title: "손끝까지 건강하게 관리하는 법",
    imageSrc: "/images/home/magazine-2.png",
    href: "/magazine/2",
  },
  {
    id: "magazine-3",
    category: "NAIL STYLE",
    title: "취향을 담은 이달의 네일 디자인",
    imageSrc: "/images/home/magazine-3.png",
    href: "/magazine/3",
  },
];

export default function HomePage() {
  return <HomeScreen banners={banners} nailItems={nailItems} magazineItems={magazineItems} />;
}
