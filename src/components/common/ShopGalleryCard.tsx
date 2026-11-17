"use client";

import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

import BookmarkIcon from "@/components/icons/BookmarkIcon";
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
  return (
    <article className={`py-medium w-full border-b border-gray-300 ${className}`} {...props}>
      <div className="gap-medium2 flex flex-col">
        <div className="gap-medium flex flex-col">
          <div className="gap-large flex items-center">
            <h3 className="typo-heading1-semibold min-w-0 flex-1 truncate text-gray-900">{name}</h3>
            <button
              type="button"
              className="shrink-0 text-gray-900"
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
              aria-pressed={bookmarked}
              onClick={onBookmarkClick}
            >
              <BookmarkIcon size={24} active={bookmarked} />
            </button>
          </div>
          <div className="gap-medium flex items-center text-gray-900">
            {openLabel ? <span className="typo-body2-medium">{openLabel}</span> : null}
            <span className="gap-xsmall flex items-center">
              <StarIcon size={16} className="text-primary-500" />
              <span className="typo-body2-medium">{rating}</span>
              {reviewCount ? (
                <span className="typo-body2-medium text-gray-600">({reviewCount})</span>
              ) : null}
            </span>
          </div>
        </div>
        <div className="gap-small flex overflow-x-auto" aria-label="샵 이미지">
          {images.map((image, index) => (
            <span
              key={index}
              className="rounded-medium flex h-[120px] w-[156px] shrink-0 overflow-hidden"
            >
              {image}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
