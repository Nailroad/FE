"use client";

import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

import ScrapDefaultIcon from "@/components/icons/ScrapDefaultIcon";
import ScrapFilledIcon from "@/components/icons/ScrapFilledIcon";
import StarIcon from "@/components/icons/StarIcon";

type ShopGalleryCardProps = HTMLAttributes<HTMLElement> & {
  name: ReactNode;
  openLabel?: ReactNode;
  rating: ReactNode;
  reviewCount?: ReactNode;
  images: ReactNode[];
  bookmarked?: boolean;
  onBookmarkClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ShopGalleryCard({
  name,
  openLabel,
  rating,
  reviewCount,
  images,
  bookmarked = false,
  onBookmarkClick,
  className = "",
  ...props
}: ShopGalleryCardProps) {
  const BookmarkIcon = bookmarked ? ScrapFilledIcon : ScrapDefaultIcon;

  return (
    <article className={`w-full max-w-[375px] border-b border-gray-300 py-medium ${className}`} {...props}>
      <div className="flex flex-col gap-medium2">
        <div className="flex flex-col gap-medium">
          <div className="flex items-center gap-large">
            <h3 className="typo-heading1-semibold min-w-0 flex-1 truncate text-gray-900">{name}</h3>
            <button
              type="button"
              className="shrink-0 text-gray-900"
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
              aria-pressed={bookmarked}
              onClick={onBookmarkClick}
            >
              <BookmarkIcon size={24} />
            </button>
          </div>
          <div className="flex items-center gap-medium text-gray-900">
            {openLabel ? <span className="typo-body2-medium">{openLabel}</span> : null}
            <span className="flex items-center gap-xsmall">
              <StarIcon size={16} className="text-primary-500" />
              <span className="typo-body2-medium">{rating}</span>
              {reviewCount ? <span className="typo-body2-medium text-gray-600">({reviewCount})</span> : null}
            </span>
          </div>
        </div>
        <div className="flex gap-small overflow-x-auto" aria-label="샵 이미지">
          {images.map((image, index) => (
            <span key={index} className="flex h-[120px] w-[156px] shrink-0 overflow-hidden rounded-medium">
              {image}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
