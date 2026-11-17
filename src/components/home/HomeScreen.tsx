"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import Header from "@/components/common/Header";
import bell from "@/mocks/home/bell.svg";
import logo from "@/mocks/home/logo.svg";

export type HomeBanner = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc: StaticImageData;
  imageCrop?: "cover" | "zoomed";
  href: string;
};

export type HomeNailItem = {
  id: string;
  title: string;
  imageSrc: StaticImageData;
  href: string;
};

export type HomeMagazineItem = {
  id: string;
  category: string;
  title: string;
  imageSrc: StaticImageData;
  href: string;
};

type HomeScreenProps = {
  banners: HomeBanner[];
  nailItems: HomeNailItem[];
  magazineItems: HomeMagazineItem[];
  notificationHref?: string;
};

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-center justify-between px-4">
      <h2 className="typo-body1-semibold text-gray-900">{title}</h2>
      <Link href={href} className="typo-caption1-medium text-gray-600">
        더보기
      </Link>
    </div>
  );
}

export default function HomeScreen({
  banners,
  nailItems,
  magazineItems,
  notificationHref = "/notifications",
}: HomeScreenProps) {
  const visibleBanners = banners.length > 1 ? [banners[0], banners[1], banners[0]] : banners;
  const bannerCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerCarouselRef.current) {
      bannerCarouselRef.current.scrollLeft = 351;
    }
  }, []);

  return (
    <main className="mx-auto flex w-full flex-col bg-gray-0">
      <Header
        left={
          <Link href="/home" className="flex h-[38px] w-[104px] items-center">
            <Image src={logo} alt="Nailroad" width={104} height={38} priority unoptimized />
          </Link>
        }
        right={
          <Link
            href={notificationHref}
            aria-label="알림"
            className="flex size-6 items-center justify-center text-gray-900"
          >
            <Image src={bell} alt="" width={24} height={24} priority unoptimized />
          </Link>
        }
      />

      <section className="mt-[12px]" aria-label="프로모션">
        <div
          ref={bannerCarouselRef}
          className="h-[280px] w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none]"
        >
          <div className="flex w-max gap-2 px-4">
            {visibleBanners.map((banner, index) => (
            <Link
              key={`${banner.id}-${index}`}
              href={banner.href}
              className="relative h-[280px] w-[343px] shrink-0 snap-center overflow-hidden rounded-medium2 bg-primary-50"
            >
              {banner.imageCrop === "zoomed" ? (
                <Image
                  src={banner.imageSrc}
                  alt={banner.title}
                  width={343}
                  height={610}
                  priority={index === 1}
                  className="absolute left-0 top-[-15.71%] h-[217.7%] w-full max-w-none"
                />
              ) : (
                <Image src={banner.imageSrc} alt={banner.title} fill priority={index === 1} className="object-cover" />
              )}
            </Link>
          ))}
          </div>
        </div>
      </section>

      <section className="mt-[40px]">
        <SectionHeader title="맞춤형 네일" href="/design" />
        <div className="mt-[12px] flex gap-medium overflow-x-auto px-4 [scrollbar-width:none]">
          {nailItems.map((item) => (
            <Link key={item.id} href={item.href} aria-label={item.title} className="w-[120px] shrink-0">
              <div className="relative aspect-square overflow-hidden rounded-medium bg-gray-100">
                <Image src={item.imageSrc} alt="" fill sizes="120px" className="object-cover" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-[40px]">
        <SectionHeader title="매거진" href="/magazine" />
        <div className="mt-[12px] flex gap-medium overflow-x-auto px-4 [scrollbar-width:none]">
          {magazineItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.title}
              className="relative h-[190px] w-[152px] shrink-0 overflow-hidden rounded-medium bg-gray-100"
            >
              <Image src={item.imageSrc} alt="" fill sizes="152px" className="object-cover" />
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
