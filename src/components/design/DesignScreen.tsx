"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import DesignFilter, { EMPTY_FILTERS, type FilterValues } from "@/components/design/DesignFilter";
import DesignMasonry from "@/components/design/DesignMasonry";
import DesignTotalNumber from "@/components/design/DesignTotalNumber";
import { FILTER_CODES } from "@/components/design/filter/filterOptions";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useDesigns } from "@/hooks/useDesigns";
import { useImageSizes } from "@/hooks/useImageSizes";
import type { Design } from "@/types/design";

/** 화면 이름 목록 → API 코드 목록 */
const toCodes = (labels: string[], codes: Record<string, string>) =>
  labels.map((label) => codes[label]).filter(Boolean);

/**
 * 디자인 화면 본문: 필터 + 개수/정렬 + 메이슨리 목록 (API 연동)
 * - 적용된 필터가 바뀌면 목록을 처음부터 다시 요청
 * - 맨 아래에 닿으면 다음 페이지 요청 (무한 스크롤)
 * - 사진 크기를 먼저 알아낸 뒤 페이지(20개) 단위로 한 번에 배치 → 카드가 열 사이로 튀지 않음
 */
export default function DesignScreen() {
  const [applied, setApplied] = useState<FilterValues>(EMPTY_FILTERS);

  // 같은 탭 안은 OR, 다른 탭끼리는 AND → 백엔드가 처리
  const filters = useMemo(
    () => ({
      categoryCode: toCodes(applied.category, FILTER_CODES.category),
      colorCode: toCodes(applied.color, FILTER_CODES.color),
      shapeCode: toCodes(applied.shape, FILTER_CODES.shape),
      tagName: toCodes(applied.hashtag, FILTER_CODES.hashtag),
    }),
    [applied],
  );

  const { data, isPending, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useDesigns(filters);

  // API에 사진 크기가 없어서, 화면에 그리기 전에 사진을 미리 받아 크기를 잼
  const images = useMemo(
    () =>
      (data?.pages.flatMap((page) => page.items) ?? []).map((item) => ({
        id: item.designId,
        url: item.designImageUrl,
      })),
    [data],
  );
  const sizes = useImageSizes(images);

  // 찜은 로컬스토리지 기준 (API isLiked는 찜 API 나오기 전까지 사용 안 함)
  const { isBookmarked, setBookmarked } = useBookmarks();

  // 페이지 안 사진 크기를 전부 알아낸 페이지만 순서대로 보여줌
  // (일부만 먼저 그리면 나머지가 들어올 때 배치가 다시 바뀌어서 화면이 튐)
  const { designs, measuring } = useMemo(() => {
    const visible: Design[] = [];
    for (const page of data?.pages ?? []) {
      if (!page.items.every((item) => sizes[item.designId])) {
        return { designs: visible, measuring: true };
      }
      visible.push(
        ...page.items.map((item) => ({
          id: item.designId,
          imageUrl: item.designImageUrl,
          ...sizes[item.designId],
          bookmarked: isBookmarked(item.designId),
        })),
      );
    }
    return { designs: visible, measuring: false };
  }, [data, sizes, isBookmarked]);

  // 맨 아래 표시용 요소가 화면에 들어오면 다음 페이지 요청
  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = sentinelRef.current;
    // 앞 페이지 크기를 재는 중에는 다음 페이지를 요청하지 않음 (한꺼번에 여러 페이지 요청 방지)
    if (!el || !hasNextPage || measuring) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) fetchNextPage();
      },
      { rootMargin: "300px" }, // 바닥 300px 전에 미리 요청
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, measuring]);

  return (
    <>
      <DesignFilter applied={applied} onApply={setApplied} />
      {/* 전체 개수는 모든 페이지에 똑같이 오므로 첫 페이지 값 사용 */}
      <DesignTotalNumber total={data?.pages[0]?.totalCount} />

      {isPending || (measuring && designs.length === 0) ? (
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
        <DesignMasonry designs={designs} onBookmarkChange={setBookmarked} />
      )}

      <div ref={sentinelRef} aria-hidden="true" />
      {(isFetchingNextPage || (measuring && designs.length > 0)) && (
        <p className="typo-caption1-medium text-center text-gray-500">더 불러오는 중...</p>
      )}
    </>
  );
}
