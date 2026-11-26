"use client";

import Image, { type StaticImageData } from "next/image";
import { type KeyboardEvent, type UIEvent, useState } from "react";

import GalleryDotsIcon from "@/components/icons/GalleryDotsIcon";

type MagazineGalleryProps = {
  images: readonly (StaticImageData | string)[];
  title: string;
};

export default function MagazineGallery({ images, title }: MagazineGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  function handleScroll({ currentTarget }: UIEvent<HTMLDivElement>) {
    const { clientWidth, scrollLeft } = currentTarget;
    if (!clientWidth) return;

    const nextIndex = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.max(0, Math.min(nextIndex, images.length - 1)));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = activeIndex + step;
    if (nextIndex < 0 || nextIndex >= images.length) return;

    event.currentTarget.scrollTo({ left: nextIndex * event.currentTarget.clientWidth });
  }

  return (
    <div className="relative w-full">
      <div
        className="flex w-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto"
        role={hasMultipleImages ? "region" : undefined}
        aria-label={hasMultipleImages ? "매거진 사진" : undefined}
        tabIndex={hasMultipleImages ? 0 : undefined}
        onScroll={hasMultipleImages ? handleScroll : undefined}
        onKeyDown={hasMultipleImages ? handleKeyDown : undefined}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[375/467] w-full shrink-0 snap-start bg-gray-100"
          >
            <Image
              src={image}
              alt={hasMultipleImages ? `${title} 사진 ${index + 1}` : title}
              fill
              unoptimized
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {hasMultipleImages && (
        <>
          <GalleryDotsIcon
            count={images.length}
            activeIndex={activeIndex}
            className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2"
          />
          <span className="sr-only" aria-live="polite">
            사진 {images.length}장 중 {activeIndex + 1}번째
          </span>
        </>
      )}
    </div>
  );
}
