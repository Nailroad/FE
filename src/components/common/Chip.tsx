"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  selected?: boolean;
};

export default function Chip({
  children,
  leftIcon,
  rightIcon,
  selected = false,
  className = "",
  type = "button",
  ...props
}: ChipProps) {
  return (
    <button
      type={type}
      className={`px-small2 py-small flex items-center justify-center gap-0.5 rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
        selected
          ? "text-gray-0 bg-gray-900"
          : "bg-gray-0 border border-gray-300 text-gray-900 hover:border-gray-400"
      } ${className}`}
      aria-pressed={selected}
      {...props}
    >
      {leftIcon ? <span className="flex size-4 shrink-0">{leftIcon}</span> : null}
      <span className="typo-body2-medium whitespace-nowrap">{children}</span>
      {rightIcon ? <span className="flex size-5 shrink-0">{rightIcon}</span> : null}
    </button>
  );
}
