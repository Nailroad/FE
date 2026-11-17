"use client";

import Image from "next/image";
import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

import BookmarkIcon from "@/components/icons/BookmarkIcon";
import StarIcon from "@/components/icons/StarIcon";

type ShopCardProps = HTMLAttributes<HTMLElement> & {
  imageSrc: string;
  imageAlt: string;
  name: ReactNode;
  address: ReactNode;
  openLabel?: ReactNode;
  rating: ReactNode;
  reviewCount?: ReactNode;
  bookmarked?: boolean;
  onBookmarkClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ShopCard({
  imageSrc,
  imageAlt,
  name,
  address,
  openLabel,
  rating,
  reviewCount,
  bookmarked = false,
  onBookmarkClick,
  className = "",
  ...props
}: ShopCardProps) {
  return (
    <article
      className={`gap-medium2 rounded-medium bg-gray-0 p-medium flex h-[114px] w-full items-start border border-gray-300 ${className}`}
      {...props}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={80}
        height={80}
        className="rounded-medium size-20 shrink-0 object-cover"
      />
      <div className="gap-medium flex min-w-0 flex-1 flex-col">
        <div className="flex flex-col">
          <h3 className="typo-heading2-semibold truncate text-gray-900">{name}</h3>
          <p className="typo-body1-medium truncate text-gray-600">{address}</p>
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
      <button
        type="button"
        className="shrink-0 text-gray-900"
        aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        aria-pressed={bookmarked}
        onClick={onBookmarkClick}
      >
        <BookmarkIcon size={24} active={bookmarked} />
      </button>
    </article>
  );
}
