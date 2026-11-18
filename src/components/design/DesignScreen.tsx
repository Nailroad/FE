"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import DesignFilter, { EMPTY_FILTERS, type FilterValues } from "@/components/design/DesignFilter";
import DesignMasonry from "@/components/design/DesignMasonry";
import DesignTotalNumber from "@/components/design/DesignTotalNumber";
import { FILTER_CODES } from "@/components/design/filter/filterOptions";
import { useDesigns } from "@/hooks/useDesigns";
import type { Design } from "@/types/design";

/** 사진 크기를 아직 모를 때 쓰는 임시 비율 (가로 3 : 세로 4) */
const DEFAULT_SIZE = { width: 3, height: 4 };

/** 화면 이름 목록 → API 코드 목록 */
const toCodes = (labels: string[], codes: Record<string, string>) =>
  labels.map((label) => codes[label]).filter(Boolean);

/**
 * 디자인 화면 본문: 필터 + 개수/정렬 + 메이슨리 목록 (API 연동)
 * - 적용된 필터가 바뀌면 목록을 처음부터 다시 요청
 * - 맨 아래에 닿으면 다음 페이지 요청 (무한 스크롤)
 */
export default function DesignScreen() {
  const [applied, setApplied] = useState<FilterValues>(EMPTY_FILTERS);

  // 같은 탭 안은 OR, 다른 탭끼리는 AND → 백엔드가 처리
  const filters = useMemo(
    () => ({
      categoryCode: toCodes(applied.category, FILTER_CODES.category),
      colorCode: toCodes(applied.color, FILTER_CODES.color),
      shapeCode: toCodes(applied.shape, FILTER_CODES.shape),
      // TODO: 해시태그(tagName)는 코드 목록 받으면 추가
    }),
    [applied],
  );

  const { data, isPending, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useDesigns(filters);

  // API에 사진 크기가 없어서, 사진이 불러와지면 원본 크기를 기억해뒀다가 배치에 사용
  const [sizes, setSizes] = useState<Record<number, { width: number; height: number }>>({});
  const handleImageLoad = useCallback((id: number, width: number, height: number) => {
    setSizes((prev) => (prev[id] ? prev : { ...prev, [id]: { width, height } }));
  }, []);

  const designs: Design[] = useMemo(
    () =>
      (data?.pages.flatMap((page) => page.items) ?? []).map((item) => ({
        id: item.designId,
        imageUrl: item.designImageUrl,
        ...(sizes[item.designId] ?? DEFAULT_SIZE),
        bookmarked: item.isLiked,
      })),
    [data, sizes],
  );

  // 맨 아래 표시용 요소가 화면에 들어오면 다음 페이지 요청
  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) fetchNextPage();
      },
      { rootMargin: "300px" }, // 바닥 300px 전에 미리 요청
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      <DesignFilter applied={applied} onApply={setApplied} />
      {/* 전체 개수는 모든 페이지에 똑같이 오므로 첫 페이지 값 사용 */}
      <DesignTotalNumber total={data?.pages[0]?.totalCount} />

      {isPending ? (
        <p className="typo-body2-medium py-large text-center text-gray-500">불러오는 중...</p>
      ) : isError ? (
        <p className="typo-body2-medium py-large text-center text-gray-500">
          디자인을 불러오지 못했어요
        </p>
      ) : designs.length === 0 ? (
        <p className="typo-body2-medium py-large text-center text-gray-500">
          조건에 맞는 디자인이 없어요
        </p>
      ) : (
        <DesignMasonry designs={designs} onImageLoad={handleImageLoad} />
      )}

      <div ref={sentinelRef} aria-hidden="true" />
      {isFetchingNextPage && (
        <p className="typo-caption1-medium text-center text-gray-500">더 불러오는 중...</p>
      )}
    </>
  );
}
