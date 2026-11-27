"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import Header from "@/components/common/Header";
import CustomNailEmptyState from "@/components/custom-nail/CustomNailEmptyState";
import BellIcon from "@/components/icons/BellIcon";
import NailroadLogo from "@/components/icons/nailroadlogo";
import SettingIcon from "@/components/icons/SettingIcon";
import { useBookmarks } from "@/hooks/useBookmarks";

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
  isLoggedIn: boolean;
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
  isLoggedIn,
  notificationHref = "/notifications",
}: HomeScreenProps) {
  const { ids: bookmarkedDesignIds } = useBookmarks();
  const showPersonalizedNails = isLoggedIn && bookmarkedDesignIds.length > 0 && nailItems.length > 0;
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
            <NailroadLogo />
          </Link>
        }
        right={
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={notificationHref}
              aria-label="알림"
              className="flex size-6 items-center justify-center text-gray-900"
            >
              <BellIcon />
            </Link>
            <Link
              href="/settings"
              aria-label="설정"
              className="flex size-6 items-center justify-center text-gray-900"
            >
              <SettingIcon />
            </Link>
          </div>
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
                  className="absolute left-0 top-[-48.8%] h-[217.7%] w-full max-w-none"
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
        <SectionHeader
          title="맞춤형 네일"
          href={showPersonalizedNails ? "/custom-nail/recommendations" : "/custom-nail"}
        />
        {showPersonalizedNails ? (
          <div className="mt-[12px] flex gap-medium overflow-x-auto px-4 [scrollbar-width:none]">
            {nailItems.map((item) => (
              <Link key={item.id} href={item.href} aria-label={item.title} className="w-[120px] shrink-0">
                <div className="relative aspect-square overflow-hidden rounded-medium bg-gray-100">
                  <Image src={item.imageSrc} alt="" fill sizes="120px" className="object-cover" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <CustomNailEmptyState className="mt-3" />
        )}
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
