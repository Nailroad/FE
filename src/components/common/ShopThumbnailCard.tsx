"use client";

import type { MouseEventHandler, ReactNode } from "react";

import ScrapDefaultIcon from "@/components/icons/ScrapDefaultIcon";
import ScrapFilledIcon from "@/components/icons/ScrapFilledIcon";

type ShopThumbnailCardProps = {
  thumbnail: ReactNode;
  name: ReactNode;
  region: ReactNode;
  bookmarked?: boolean;
  onBookmarkClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function ShopThumbnailCard({
  thumbnail,
  name,
  region,
  bookmarked = false,
  onBookmarkClick,
  className = "",
}: ShopThumbnailCardProps) {
  const BookmarkIcon = bookmarked ? ScrapFilledIcon : ScrapDefaultIcon;

  return (
    <article className={`flex w-[166px] flex-col gap-medium ${className}`}>
      <div className="relative flex h-[104px] w-full overflow-hidden rounded-medium">
        {thumbnail}
        <button
          type="button"
          className="absolute top-1.5 right-1.5 text-gray-900"
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          aria-pressed={bookmarked}
          onClick={onBookmarkClick}
        >
          <BookmarkIcon size={24} />
        </button>
      </div>
      <div className="flex flex-col pl-xsmall">
        <h3 className="typo-body2-semibold truncate text-gray-900">{name}</h3>
        <p className="typo-caption1-medium truncate text-gray-600">{region}</p>
      </div>
    </article>
  );
}
