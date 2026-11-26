"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import HeartIcon from "@/components/icons/HeartIcon";

export type CustomNailDesign = {
  id: string;
  title: string;
  imageSrc: StaticImageData | string;
  liked: boolean;
};

export default function CustomNailGrid({ designs }: { designs: readonly CustomNailDesign[] }) {
  const [likedOverrides, setLikedOverrides] = useState<Record<string, boolean>>({});

  function toggleLike({ id, liked }: CustomNailDesign) {
    setLikedOverrides((current) => ({ ...current, [id]: !(current[id] ?? liked) }));
  }

  return (
    <ul aria-label="맞춤형 네일 추천" className="mt-3 grid grid-cols-2 gap-3 px-4">
      {designs.map((design) => {
        const liked = likedOverrides[design.id] ?? design.liked;

        return (
          <li
            key={design.id}
            className="rounded-medium2 relative aspect-square overflow-hidden bg-gray-200"
          >
            <Image
              src={design.imageSrc}
              alt={design.title}
              fill
              unoptimized
              className="object-cover"
            />
            <button
              type="button"
              aria-label={`${design.title} 찜`}
              aria-pressed={liked}
              onClick={() => toggleLike(design)}
              className={`absolute top-3 right-[9px] flex size-6 cursor-pointer items-center justify-center ${liked ? "text-[#ed5564]" : "text-white"}`}
            >
              <HeartIcon active={liked} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
