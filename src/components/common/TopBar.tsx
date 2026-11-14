import type { HTMLAttributes, ReactNode } from "react";

type TopBarProps = HTMLAttributes<HTMLElement> & {
  left?: ReactNode;
  title?: ReactNode;
  right?: ReactNode;
};

export default function TopBar({ left, title, right, className = "", ...props }: TopBarProps) {
  return (
    <header
      className={`grid h-14 w-full max-w-[375px] grid-cols-[24px_minmax(0,1fr)_24px] items-center px-medium ${className}`}
      {...props}
    >
      <span className="flex size-6 items-center justify-center">{left}</span>
      {title ? (
        <h1 className="typo-heading2-semibold truncate text-center text-gray-900">{title}</h1>
      ) : (
        <span />
      )}
      <span className="flex size-6 items-center justify-center">{right}</span>
    </header>
  );
}
