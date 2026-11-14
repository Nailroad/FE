import type { HTMLAttributes, ReactNode } from "react";

type HeaderProps = Omit<HTMLAttributes<HTMLElement>, "title"> & {
  left?: ReactNode;
  title?: ReactNode;
  right?: ReactNode;
};

export default function Header({ left, title, right, className = "", ...props }: HeaderProps) {
  return (
    <header
      className={`grid h-14 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-4 ${className}`}
      {...props}
    >
      <div className="flex items-center justify-start">{left}</div>
      <div className="min-w-0 text-center">{title}</div>
      <div className="flex items-center justify-end">{right}</div>
    </header>
  );
}
