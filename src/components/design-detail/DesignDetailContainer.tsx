"use client";

import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

import TopBar from "@/components/common/TopBar";
import { COLOR_SWATCHES, FILTER_CODES } from "@/components/design/filter/filterOptions";
import HeartIcon from "@/components/icons/HeartIcon";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useDesignDetail } from "@/hooks/useDesignDetail";
import shopProfileImage from "@/mocks/design-detail/shop-profile.png";

import DesignDetailScreen, { BOOKMARK_TOAST_DURATION_MS } from "./DesignDetailScreen";
import { TAG_LABELS } from "./tagLabels";

const FALLBACK_SHOP_ADDRESS = "서대문구 · 반경 5km";

type DesignDetailContainerProps = {
  designId: number;
};

function getLabel(code: string, filter: keyof typeof FILTER_CODES) {
  return Object.entries(FILTER_CODES[filter]).find(([, value]) => value === code)?.[0] ?? code;
}

export default function DesignDetailContainer({ designId }: DesignDetailContainerProps) {
  const router = useRouter();
  const { data, isPending, isError, refetch } = useDesignDetail(designId);
  const { isBookmarked, setBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(designId);
  const [toastDesignId, setToastDesignId] = useState<number | null>(null);
  const toastTimeout = useRef<number | undefined>(undefined);
  const detail = isPending || isError ? undefined : data;

  useEffect(() => {
    return () => window.clearTimeout(toastTimeout.current);
  }, []);

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/design");
    }
  }

  function handleBookmarkClick() {
    const nextBookmarked = !bookmarked;
    setBookmarked(designId, nextBookmarked);

    window.clearTimeout(toastTimeout.current);
    setToastDesignId(nextBookmarked ? designId : null);
    if (nextBookmarked) {
      toastTimeout.current = window.setTimeout(
        () => setToastDesignId(null),
        BOOKMARK_TOAST_DURATION_MS,
      );
    }
  }

  let content: ReactNode;
  if (isPending) {
    content = (
      <StatusMessage>
        <p role="status">디자인 정보를 불러오는 중이에요.</p>
      </StatusMessage>
    );
  } else if (!detail) {
    content = (
      <StatusMessage>
        <p>디자인 정보를 불러오지 못했어요.</p>
        <button
          type="button"
          onClick={() => refetch()}
          className="typo-body2-semibold text-gray-900 underline"
        >
          다시 시도
        </button>
      </StatusMessage>
    );
  } else {
    const colors = detail.colorCodes.map((code) => {
      const name = getLabel(code, "color");

      return { name, hex: COLOR_SWATCHES[name] ?? "#d7d9de" };
    });

    content = (
      <DesignDetailScreen
        designImageUrl={detail.designImageUrl}
        categories={detail.categoryCodes.map((code) => getLabel(code, "category"))}
        shapes={detail.shapeCodes.map((code) => getLabel(code, "shape"))}
        colors={colors}
        hashtags={detail.tagNames.map((tag) => TAG_LABELS[tag] ?? `#${tag}`)}
        showBookmarkToast={bookmarked && toastDesignId === designId}
        shop={{
          name: detail.shopName,
          address: FALLBACK_SHOP_ADDRESS,
          profileImage: shopProfileImage,
        }}
      />
    );
  }

  return (
    <main className="bg-gray-0 flex min-h-dvh flex-col pt-[env(safe-area-inset-top)]">
      <TopBar
        className="shrink-0"
        left={
          <button
            type="button"
            aria-label="이전 페이지"
            onClick={handleBack}
            className="cursor-pointer text-gray-900"
          >
            <NavArrowBackIcon />
          </button>
        }
        right={
          detail ? (
            <button
              type="button"
              aria-label={bookmarked ? "찜 해제" : "찜하기"}
              aria-pressed={bookmarked}
              onClick={handleBookmarkClick}
              className="cursor-pointer"
            >
              {/* 상세 헤더에서는 두 상태에 같은 도형을 쓰고 채우기 색만 바꿉니다. */}
              <HeartIcon active className={bookmarked ? undefined : "[&>path]:fill-gray-900/24"} />
            </button>
          ) : undefined
        }
      />
      {content}
    </main>
  );
}

function StatusMessage({ children }: { children: ReactNode }) {
  return (
    <div className="px-medium typo-body2-medium flex flex-1 flex-col items-center justify-center gap-3 text-gray-600">
      {children}
    </div>
  );
}
