import type { DesignFilterKey } from "@/components/design/DesignFilterBar";

/** 필터 바텀시트 탭별 선택지 */
export const FILTER_OPTIONS: Record<DesignFilterKey, readonly string[]> = {
  category: ["웜톤", "자석", "프렌치", "시럽", "그라데이션", "글리터", "파츠", "도트", "캐릭터"],
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
  ],
  // TODO: 쉐입 / 해시태그 선택지는 각 탭 만들 때 추가
  shape: [],
  hashtag: [],
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
};

/** 밝은 색: 회색 테두리 + 회색 체크 (피그마 "흰색 / 투명 / 베이지 기준") */
export const LIGHT_COLORS = new Set(["화이트", "투명", "베이지"]);

/** 투명 칩 유리 효과: 왼쪽 위 안쪽 그늘 + 오른쪽 아래 하이라이트  */
export const GLASS_SHADOW =
  "inset 3px 3px 6px rgba(0, 0, 0, 0.06), inset -1px -1px 2px rgba(255, 255, 255, 0.9)";
