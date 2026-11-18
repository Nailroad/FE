"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * 찜(북마크) 목록 — 로컬스토리지 저장 (찜 API 나오기 전 임시)
 * - 저장 형태: localStorage["nailroad:bookmarks"] = "[409, 300, ...]" (디자인 id 목록)
 * - 같은 훅을 쓰는 모든 화면(목록 카드, 상세)이 같은 값을 보고, 하나가 바꾸면 전부 바로 바뀜
 * - 다른 탭에서 바꿔도 반영됨 (storage 이벤트)
 * - 나중에 찜 API가 생기면 이 파일 안만 바꾸면 됨
 */

const STORAGE_KEY = "nailroad:bookmarks";
const EMPTY: number[] = [];

/** 이 탭에서 찜이 바뀌었을 때 알려줄 화면들 */
const listeners = new Set<() => void>();

/** 같은 문자열이면 같은 배열을 돌려줘야 화면이 불필요하게 다시 그려지지 않음 */
let cache: { raw: string | null; ids: number[] } = { raw: null, ids: EMPTY };

function readIds(): number[] {
  let raw: string | null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    return EMPTY; // 시크릿 모드 등 저장소를 못 쓰는 경우
  }
  if (raw === cache.raw) return cache.ids;

  let ids = EMPTY;
  try {
    const parsed: unknown = JSON.parse(raw ?? "[]");
    if (Array.isArray(parsed)) ids = parsed.filter((v): v is number => typeof v === "number");
  } catch {
    // 값이 깨져 있으면 빈 목록으로 취급
  }
  cache = { raw, ids };
  return ids;
}

function writeIds(ids: number[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // 저장 실패해도 화면은 그대로 동작
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

/** 서버에서는 로컬스토리지를 못 읽으므로 빈 목록 → 화면이 뜬 직후 실제 값으로 채워짐 */
const getServerSnapshot = () => EMPTY;

export function useBookmarks() {
  const ids = useSyncExternalStore(subscribe, readIds, getServerSnapshot);

  const isBookmarked = useCallback((id: number) => ids.includes(id), [ids]);

  /** 찜 상태를 정해서 저장 (true = 찜, false = 해제) */
  const setBookmarked = useCallback((id: number, bookmarked: boolean) => {
    const current = readIds();
    if (bookmarked === current.includes(id)) return;
    writeIds(bookmarked ? [...current, id] : current.filter((v) => v !== id));
  }, []);

  /** 찜 ↔ 해제 */
  const toggle = useCallback(
    (id: number) => setBookmarked(id, !readIds().includes(id)),
    [setBookmarked],
  );

  return { ids, isBookmarked, setBookmarked, toggle };
}
