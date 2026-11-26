import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function CheckCircleIcon({ size = 24, width = size, height = size, ...props }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-1.25 -1.25 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M5.75 11.25L8.75 14.25L15.75 7.25" />
      <path d="M10.75 20.75C16.273 20.75 20.75 16.273 20.75 10.75C20.75 5.227 16.273 0.75 10.75 0.75C5.227 0.75 0.75 5.227 0.75 10.75C0.75 16.273 5.227 20.75 10.75 20.75Z" />
    </svg>
  );
}
