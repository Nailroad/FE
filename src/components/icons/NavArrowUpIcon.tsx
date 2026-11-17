import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function NavArrowUpIcon({
  size = 24,
  width = size,
  height = size,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M6 15L12 9L18 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
