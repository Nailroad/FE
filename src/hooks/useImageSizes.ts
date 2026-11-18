"use client";

import { useEffect, useRef, useState } from "react";

export type ImageSize = { width: number; height: number };

/** 크기를 못 알아냈을 때 쓰는 임시 비율 (가로 3 : 세로 4) */
export const DEFAULT_IMAGE_SIZE: ImageSize = { width: 3, height: 4 };

/** 이 시간 안에 안 불러와지면 임시 비율로 처리 (한 장 때문에 목록 전체가 멈추지 않게) */
const TIMEOUT_MS = 5000;

/**
 * 사진을 화면에 그리기 전에 미리 받아서 원본 크기(가로/세로)를 알아냄
 * - API에 사진 크기가 없어서 직접 잼 (백엔드가 width/height를 주면 이 훅은 필요 없음)
 * - 미리 받은 사진은 브라우저에 저장돼서, 카드에 그릴 때는 다시 받지 않고 바로 뜸
 * - 같은 id는 한 번만 잼 (필터를 바꿨다 돌아와도 다시 안 잼)
 */
export function useImageSizes(images: { id: number; url: string }[]) {
  const [sizes, setSizes] = useState<Record<number, ImageSize>>({});
  const requested = useRef(new Set<number>());

  useEffect(() => {
    for (const { id, url } of images) {
      if (requested.current.has(id)) continue;
      requested.current.add(id);

      let done = false;
      const finish = (size: ImageSize) => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        setSizes((prev) => ({ ...prev, [id]: size }));
      };

      const timer = setTimeout(() => finish(DEFAULT_IMAGE_SIZE), TIMEOUT_MS);
      const img = new window.Image();
      img.onload = () =>
        finish(
          img.naturalWidth && img.naturalHeight
            ? { width: img.naturalWidth, height: img.naturalHeight }
            : DEFAULT_IMAGE_SIZE,
        );
      img.onerror = () => finish(DEFAULT_IMAGE_SIZE); // 깨진 사진도 임시 비율로 자리는 잡음
      img.src = url;
    }
  }, [images]);

  return sizes;
}
