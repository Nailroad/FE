export const MEMBER_TYPES = [
  {
    value: "customer",
    title: "고객으로 시작하기",
    description: "네일 디자인을 찾고 견적과 예약을 받아보세요.",
  },
  {
    value: "owner",
    title: "사장님으로 시작하기",
    description: "내 샵을 등록하고 고객의 견적 요청을 받아보세요.",
  },
] as const;

export type SignupMemberType = (typeof MEMBER_TYPES)[number]["value"];

export const SOCIAL_PROVIDERS = [
  { value: "kakao", label: "카카오" },
  { value: "google", label: "구글" },
] as const;
