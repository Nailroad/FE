"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/common/Button";
import TopBar from "@/components/common/TopBar";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";
import type { DesignDetail } from "@/mocks/design-detail";
import type { Design } from "@/types/design";

type DesignDetailScreenProps = {
  design: Design;
  detail: DesignDetail;
};

export default function DesignDetailScreen({ design, detail }: DesignDetailScreenProps) {
  const router = useRouter();

  return (
    <main className="min-h-dvh bg-gray-0 pb-[110px]">
      <TopBar
        left={
          <button type="button" aria-label="이전 페이지" onClick={() => router.back()} className="cursor-pointer">
            <NavArrowBackIcon />
          </button>
        }
      />

      <div className="gap-xlarge flex flex-col">
        <section className="px-medium gap-medium2 flex flex-col">
          <div className="relative h-[246px] overflow-hidden rounded-medium2 bg-gray-200">
            <Image
              src={detail.detailImage ?? design.imageUrl}
              alt="선택한 네일 디자인"
              fill
              sizes="343px"
              className="object-cover"
              priority
            />
          </div>

          <article className="rounded-medium2 bg-gray-100 p-medium flex items-center justify-between">
            <div className="gap-medium flex items-center">
              <Image
                src={detail.shop.profileImage}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <div className="flex flex-col gap-0.5">
                <strong className="typo-body2-semibold text-gray-900">{detail.shop.name}</strong>
                <span className="typo-caption1-medium text-gray-600">{detail.shop.address}</span>
              </div>
            </div>
            <NavArrowBackIcon className="rotate-180" />
          </article>
        </section>

        <section className="gap-large flex flex-col">
          <h1 className="px-medium typo-heading1-semibold text-gray-900">디자인 정보</h1>
          <div className="px-medium gap-medium2 flex flex-col">
            <DetailRow title="카테고리" values={detail.categories} />
            <DetailRow title="쉐입" values={detail.shapes} />
            <ColorRow colors={detail.colors} />
            <DetailRow title="해시태그" values={detail.hashtags} />
          </div>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-[max(34px,env(safe-area-inset-bottom))] z-40 mx-auto w-full max-w-[375px] px-medium">
        {/* API 연동 전에는 요청을 보내지 않고, 화면 상태만 제공합니다. */}
        <Button aria-label="견적 요청하기">견적 요청하기</Button>
      </div>
    </main>
  );
}

function DetailRow({ title, values }: { title: string; values: string[] }) {
  return (
    <div className="gap-medium flex flex-col">
      <h2 className="typo-body1-semibold text-gray-900">{title}</h2>
      <div className="gap-medium flex flex-wrap">
        {values.map((value) => (
          <span key={value} className="rounded-medium border border-gray-300 px-3 py-2 typo-body2-medium text-gray-900">
            {value}
          </span>
        ))}
      </div>
    </div>
  );
}

function ColorRow({ colors }: { colors: DesignDetail["colors"] }) {
  return (
    <div className="gap-medium flex flex-col">
      <h2 className="typo-body1-semibold text-gray-900">컬러</h2>
      <div className="gap-medium flex flex-wrap">
        {colors.map((color) => (
          <span key={color.name} className="rounded-medium gap-medium flex items-center border border-gray-300 px-3 py-2 typo-body2-medium text-gray-900">
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
