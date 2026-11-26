"use client";

import Image from "next/image";

import Button from "@/components/common/Button";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

export const BOOKMARK_TOAST_DURATION_MS = 2000;

type DesignColor = {
  name: string;
  hex: string;
};

type DesignDetailScreenProps = {
  designImageUrl: string;
  categories: string[];
  shapes: string[];
  colors: DesignColor[];
  hashtags: string[];
  showBookmarkToast: boolean;
  shop: {
    name: string;
    address: string;
    profileImage: Parameters<typeof Image>[0]["src"];
  };
};

export default function DesignDetailScreen({
  designImageUrl,
  categories,
  shapes,
  colors,
  hashtags,
  showBookmarkToast,
  shop,
}: DesignDetailScreenProps) {
  return (
    <div className="pt-2 pb-[110px]">
      <div className="gap-xlarge flex flex-col">
        <section className="px-medium gap-medium2 flex flex-col">
          <div className="rounded-medium2 relative h-[246px] overflow-hidden bg-gray-200">
            <Image
              src={designImageUrl}
              alt="선택한 네일 디자인"
              fill
              sizes="343px"
              className="object-cover"
              priority
              // S3 서명 URL은 주소가 계속 바뀌어 Vercel 이미지 최적화 한도를 소모함 → S3에서 바로 받음
              unoptimized
            />
          </div>

          <article className="rounded-medium2 p-medium flex items-center justify-between bg-gray-100">
            <div className="gap-medium flex items-center">
              <Image
                src={shop.profileImage}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <div className="flex flex-col gap-0.5">
                <strong className="typo-body2-semibold text-gray-900">{shop.name}</strong>
                <span className="typo-caption1-medium text-gray-600">{shop.address}</span>
              </div>
            </div>
            <NavArrowBackIcon className="rotate-180" />
          </article>
        </section>

        <section className="gap-large flex flex-col">
          <h1 className="px-medium typo-heading1-semibold text-gray-900">디자인 정보</h1>
          <div className="px-medium gap-medium2 flex flex-col">
            <DetailRow title="카테고리" values={categories} />
            <DetailRow title="쉐입" values={shapes} />
            <ColorRow colors={colors} />
            <DetailRow title="해시태그" values={hashtags} />
          </div>
        </section>
      </div>

      <div className="px-medium fixed inset-x-0 bottom-[max(34px,env(safe-area-inset-bottom))] z-40 mx-auto w-full max-w-[480px]">
        <div
          role="status"
          className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2"
        >
          {showBookmarkToast && (
            <p
              className="rounded-medium typo-body2-medium flex h-10 items-center bg-gray-800 px-4 whitespace-nowrap text-white motion-safe:animate-[toast-fade-out_ease-out_forwards]"
              style={{ animationDuration: `${BOOKMARK_TOAST_DURATION_MS}ms` }}
            >
              찜에 추가되었습니다.
            </p>
          )}
        </div>
        {/* API 연동 전에는 요청을 보내지 않고, 화면 상태만 제공합니다. */}
        <Button aria-label="견적 요청하기">견적 요청하기</Button>
      </div>
    </div>
  );
}

function DetailRow({ title, values }: { title: string; values: string[] }) {
  return (
    <div className="gap-medium flex flex-col">
      <h2 className="typo-body1-semibold text-gray-900">{title}</h2>
      <div className="gap-medium flex flex-wrap">
        {values.map((value) => (
          <span
            key={value}
            className="rounded-medium typo-body2-medium border border-gray-300 px-3 py-2 text-gray-900"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

function ColorRow({ colors }: { colors: DesignColor[] }) {
  return (
    <div className="gap-medium flex flex-col">
      <h2 className="typo-body1-semibold text-gray-900">컬러</h2>
      <div className="gap-medium flex flex-wrap">
        {colors.map((color) => (
          <span
            key={color.name}
            className="rounded-medium gap-medium typo-body2-medium flex items-center border border-gray-300 px-3 py-2 text-gray-900"
          >
            <i
              aria-hidden="true"
              className="size-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color.hex }}
            />
            {color.name}
          </span>
        ))}
      </div>
    </div>
  );
}
