"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type SelectableCardProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "title"> & {
  thumbnail: ReactNode;
  thumbnailClassName?: string;
  title: ReactNode;
  description?: ReactNode;
  selected?: boolean;
};

export default function SelectableCard({
  thumbnail,
  thumbnailClassName = "",
  title,
  description,
  selected = false,
  className = "",
  type = "button",
  ...props
}: SelectableCardProps) {
  return (
    <button
      type={type}
      className={`gap-large rounded-medium2 p-medium flex w-full items-center border text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
        selected
          ? "border-primary-500 bg-primary-50"
          : "bg-gray-0 hover:border-primary-300 border-gray-300"
      } ${className}`}
      aria-pressed={selected}
      {...props}
    >
      <span
        className={`flex size-14 shrink-0 items-center justify-center overflow-hidden bg-[#d9d9d9] ${thumbnailClassName}`}
      >
        {thumbnail}
      </span>
      <span className="gap-small flex min-w-0 flex-col items-start">
        <span
          className={
            selected ? "typo-body1-semibold text-gray-900" : "typo-body1-medium text-gray-900"
          }
        >
          {title}
        </span>
        {description ? (
          <span className="typo-caption1-regular whitespace-pre-line text-gray-600">
            {description}
          </span>
        ) : null}
      </span>
    </button>
  );
}
