import type { ComponentType, SVGProps } from "react";

import type { DesignFilterKey } from "@/components/design/DesignFilterBar";
import AlmondIcon from "@/components/icons/shape/AlmondIcon";
import ArrowHeadIcon from "@/components/icons/shape/ArrowHeadIcon";
import BallerinaIcon from "@/components/icons/shape/BallerinaIcon";
import EdgeIcon from "@/components/icons/shape/EdgeIcon";
import FlareIcon from "@/components/icons/shape/FlareIcon";
import MountainPeakIcon from "@/components/icons/shape/MountainPeakIcon";
import OvalIcon from "@/components/icons/shape/OvalIcon";
import RoundIcon from "@/components/icons/shape/RoundIcon";
import SquareIcon from "@/components/icons/shape/SquareIcon";
import SquareOvalIcon from "@/components/icons/shape/SquareOvalIcon";
import StilettoIcon from "@/components/icons/shape/StilettoIcon";

/** 필터 바텀시트 탭별 선택지 */
export const FILTER_OPTIONS: Record<DesignFilterKey, readonly string[]> = {
  category: ["원톤", "자석", "프렌치", "시럽", "그라데이션", "글리터", "파츠", "도트", "캐릭터"],
  color: [
    "레드",
    "오렌지",
    "옐로우",
    "그린",
    "블루",
    "퍼플",
    "핑크",
    "화이트",
    "블랙",
    "브라운",
    "베이지",
    "그레이",
    "실버",
    "골드",
    "투명",
    "누드",
    "카키",
  ],
  shape: [
    "라운드",
    "오벌",
    "스퀘어",
    "스퀘어 오벌",
    "발레리나",
    "스틸레토",
    "아몬드",
    "애로우 헤드",
    "마운틴 피크",
    "엣지",
    "플레어",
  ],
  hashtag: [
    "#오로라네일",
    "#가을네일",
    "#발레코어네일",
    "#보헤미안네일",
    "#여리여리",
    "#웨딩네일",
    "#심플네일",
    "#키치네일",
    "#청순네일",
    "#수채화네일",
    "#페스티벌네일",
    "#벚꽃네일",
    "#과즙네일",
    "#뮤트네일",
    "#니트네일",
    "#겨울네일",
    "#연말네일",
    "#파티네일",
    "#낙서네일",
    "#졸업네일",
    "#여행네일",
    "#여쿨네일",
    "#겨쿨네일",
    "#봄웜네일",
    "#가을웜네일",
    "#비비드네일",
    "#3D네일",
    "#갸루네일",
    "#쇠맛네일",
    "#레오파드",
    "#오리엔탈네일",
    "#치크네일",
    "#뉘앙스네일",
    "#마블네일",
    "#체크네일",
  ],
};

/** 색상 동그라미 색 (피그마 값) */
export const COLOR_SWATCHES: Record<string, string> = {
  레드: "#e44e5d",
  오렌지: "#f28a52",
  옐로우: "#f4d35e",
  그린: "#48b981",
  블루: "#5488db",
  퍼플: "#9874cf",
  핑크: "#ee89b0",
  화이트: "#ffffff",
  블랙: "#26232a",
  브라운: "#956b55",
  베이지: "#f4e7d8",
  그레이: "#929094",
  실버: "#d7d9de",
  골드: "#d7b86d",
  // 피그마: 채우기 0% + 유리 효과 (빛 -45° / 90%) → 왼쪽 위 살짝 그늘, 오른쪽 아래 밝게 근사
  투명: "linear-gradient(135deg, rgba(0, 0, 0, 0.06) 0%, rgba(255, 255, 255, 0) 55%)",
  누드: "#ddb6ac",
  카키: "#92966a",
};

/** 밝은 색: 회색 테두리 + 회색 체크 (피그마 "흰색 / 투명 / 베이지 기준") */
export const LIGHT_COLORS = new Set(["화이트", "투명", "베이지"]);

/** 투명 칩 유리 효과: 왼쪽 위 안쪽 그늘 + 오른쪽 아래 하이라이트  */
export const GLASS_SHADOW =
  "inset 3px 3px 6px rgba(0, 0, 0, 0.06), inset -1px -1px 2px rgba(255, 255, 255, 0.9)";

/** 쉐입 이름 → 손톱 모양 아이콘 */
export const SHAPE_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  라운드: RoundIcon,
  오벌: OvalIcon,
  스퀘어: SquareIcon,
  "스퀘어 오벌": SquareOvalIcon,
  발레리나: BallerinaIcon,
  스틸레토: StilettoIcon,
  아몬드: AlmondIcon,
  "애로우 헤드": ArrowHeadIcon,
  "마운틴 피크": MountainPeakIcon,
  엣지: EdgeIcon,
  플레어: FlareIcon,
};

/**
 * 화면 이름 → API 코드 (Swagger 기준)
 * - 해시태그는 백엔드 화이트리스트 기준. 목록에 없는 코드를 보내면 400 에러
 */
export const FILTER_CODES: Record<
  "category" | "color" | "shape" | "hashtag",
  Record<string, string>
> = {
  category: {
    원톤: "ONE_TONE",
    자석: "MAGNET",
    프렌치: "FRENCH",
    시럽: "SYRUP",
    그라데이션: "GRADATION",
    글리터: "GLITTER",
    파츠: "PARTS",
    도트: "DOT",
    캐릭터: "CHARACTER",
  },
  color: {
    레드: "RED",
    오렌지: "ORANGE",
    옐로우: "YELLOW",
    그린: "GREEN",
    블루: "BLUE",
    퍼플: "PURPLE",
    핑크: "PINK",
    화이트: "WHITE",
    블랙: "BLACK",
    브라운: "BROWN",
    베이지: "BEIGE",
    그레이: "GRAY",
    실버: "SILVER",
    골드: "GOLD",
    투명: "TRANSPARENT",
    누드: "NUDE",
    카키: "KHAKI",
  },
  shape: {
    라운드: "ROUND",
    오벌: "OVAL",
    스퀘어: "SQUARE",
    "스퀘어 오벌": "SQUOVAL",
    발레리나: "BALLERINA",
    스틸레토: "STILETTO",
    아몬드: "ALMOND",
    "애로우 헤드": "ARROWHEAD",
    "마운틴 피크": "MOUNTAIN_PEAK",
    엣지: "EDGE",
    플레어: "FLARE",
  },
  hashtag: {
    "#가을네일": "AUTUMN_NAIL",
    "#여리여리": "SOFT_NAIL",
    "#웨딩네일": "WEDDING_NAIL",
    "#심플네일": "SIMPLE_NAIL",
    "#키치네일": "KITSCH_NAIL",
    "#청순네일": "PURE_NAIL",
    "#수채화네일": "WATERCOLOR_NAIL",
    "#오로라네일": "AURORA_NAIL",
    "#벚꽃네일": "CHERRY_BLOSSOM_NAIL",
    "#과즙네일": "JUICY_NAIL",
    "#뮤트네일": "MUTED_NAIL",
    "#니트네일": "KNIT_NAIL",
    "#겨울네일": "WINTER_NAIL",
    "#연말네일": "YEAR_END_NAIL",
    "#파티네일": "PARTY_NAIL",
    "#발레코어네일": "BALLETCORE_NAIL",
    "#보헤미안네일": "BOHEMIAN_NAIL",
    "#낙서네일": "DOODLE_NAIL",
    "#졸업네일": "GRADUATION_NAIL",
    "#여행네일": "TRAVEL_NAIL",
    "#페스티벌네일": "FESTIVAL_NAIL",
    "#여쿨네일": "SUMMER_COOL_NAIL",
    "#겨쿨네일": "WINTER_COOL_NAIL",
    "#봄웜네일": "SPRING_WARM_NAIL",
    "#가을웜네일": "AUTUMN_WARM_NAIL",
    "#비비드네일": "VIVID_NAIL",
    "#3D네일": "THREE_D_NAIL",
    "#갸루네일": "GYARU_NAIL",
    "#쇠맛네일": "METALLIC_NAIL",
    "#레오파드": "LEOPARD_NAIL",
    "#오리엔탈네일": "ORIENTAL_NAIL",
    "#치크네일": "CHEEK_NAIL",
    "#뉘앙스네일": "NUANCE_NAIL",
    "#마블네일": "MARBLE_NAIL",
    "#체크네일": "CHECK_NAIL",
  },
};
