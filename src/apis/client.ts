/**
 * API 주소
 * - NEXT_PUBLIC_API_BASE_URL이 비어 있으면 우리 사이트 주소로 요청 → next.config.ts 프록시가 API 서버로 전달
 * - 값이 있으면 그 주소로 직접 요청 (백엔드 CORS 허용 필요)
 */
function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_BASE_URL) return process.env.NEXT_PUBLIC_API_BASE_URL;
  // 브라우저에서는 지금 사이트 주소, 서버에서는 실제 API 서버 (.env.local의 API_PROXY_TARGET)
  if (typeof window !== "undefined") return window.location.origin;
  if (!process.env.API_PROXY_TARGET) throw new Error("API_PROXY_TARGET 환경변수가 없습니다.");
  return process.env.API_PROXY_TARGET;
}

/** 모든 API 응답의 공통 형태 */
type ApiResponse<T> = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
};

/** API가 실패(isSuccess: false)를 돌려줬을 때 던지는 에러 */
export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
  ) {
    super(message);
  }
}

type QueryValue = string | number | readonly string[] | null | undefined;

/**
 * GET 요청 공통 함수
 * - 쿼리 값이 배열이면 같은 이름으로 여러 번 붙임 (colorCode=RED&colorCode=BLUE)
 * - 비어 있는 값은 빼고 보냄
 * - 응답에서 result만 꺼내서 돌려줌
 */
export async function apiGet<T>(path: string, query?: Record<string, QueryValue>): Promise<T> {
  const url = new URL(path, getBaseUrl());

  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === null || value === undefined || value === "") continue;
    if (Array.isArray(value)) {
      value.forEach((v: string) => url.searchParams.append(key, v));
    } else {
      url.searchParams.set(key, String(value));
    }
  }

  const res = await fetch(url);
  const json = (await res.json()) as ApiResponse<T>;

  if (!res.ok || !json.isSuccess) {
    throw new ApiError(json.code, json.message);
  }
  return json.result;
}
