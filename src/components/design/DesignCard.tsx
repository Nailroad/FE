"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import BookmarkIcon from "@/components/icons/BookmarkIcon";
import type { Design } from "@/types/design";

type DesignCardProps = {
  design: Design;
  /** 북마크를 눌렀을 때 (바뀔 북마크 상태가 넘어옴). 실제 저장은 부모가 함 */
  onBookmarkChange?: (id: number, bookmarked: boolean) => void;
  /** 사진이 불러와졌을 때 원본 크기 전달 (API에 사진 크기가 없어서 직접 잼) */
  onImageLoad?: (id: number, width: number, height: number) => void;
};

/**
 * 디자인 사진 카드
 * - 가로: 부모(열) 폭을 꽉 채움
 * - 세로: 사진 원본 비율(width / height)로 자동 결정 → 사진이 뜨기 전에도 자리 확보
 * - 사진을 누르면 디자인 상세로 이동, 북마크는 저장만 토글
 */
export default function DesignCard({ design, onBookmarkChange, onImageLoad }: DesignCardProps) {
  const { bookmarked } = design;
  // 사진이 다 받아지면 서서히 나타나게 (회색 → 사진으로 갑자기 바뀌는 깜빡임 방지)
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="rounded-medium2 relative w-full overflow-hidden bg-gray-200"
      style={{ aspectRatio: `${design.width} / ${design.height}` }}
    >
      <Link href={`/design/${design.id}`} className="absolute inset-0">
        <Image
          src={design.imageUrl}
          alt="네일 디자인"
          fill
          sizes="(max-width: 480px) 50vw, 240px"
          className={`object-cover transition-opacity duration-200 ${loaded ? "opacity-100" : "opacity-0"}`}
          // S3 서명 URL은 15분마다 주소가 바뀌어서 Vercel 이미지 최적화를 거치면
          // 매번 새 이미지로 집계됨 → 무료 한도 초과. 최적화 없이 S3에서 바로 받음
          unoptimized
          onLoad={(e) => {
            setLoaded(true);
            onImageLoad?.(design.id, e.currentTarget.naturalWidth, e.currentTarget.naturalHeight);
          }}
        />
      </Link>

      {/* 링크 밖에 둬서 북마크를 눌러도 상세로 이동하지 않음 */}
      <button
        type="button"
        onClick={() => onBookmarkChange?.(design.id, !bookmarked)}
        aria-label={bookmarked ? "북마크 해제" : "북마크"}
        aria-pressed={bookmarked}
        className={`absolute top-[13px] right-2.5 cursor-pointer ${bookmarked ? "text-gray-900" : "text-gray-0"}`}
      >
        {/* 미저장: 테두리 흰색 + 안쪽 #222 24% (아이콘 기본값은 안쪽도 글자색이라 덮어씀) */}
        <BookmarkIcon active={bookmarked} className={bookmarked ? "" : "[&_path]:fill-gray-900"} />
      </button>
    </div>
  );
}
