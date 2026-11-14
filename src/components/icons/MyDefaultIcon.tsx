import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function MyDefaultIcon({
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
      <g><g><path d="M11.88 12.78C11.9597 12.7703 12.0403 12.7703 12.12 12.78C12.9789 12.75 13.7917 12.3837 14.383 11.76C14.9743 11.1363 15.2969 10.3053 15.2811 9.44597C15.2654 8.58668 14.9126 7.76798 14.2988 7.16639C13.6851 6.5648 12.8594 6.22849 12 6.22999C10.18 6.22999 8.72001 7.69999 8.72001 9.50999C8.71953 10.3585 9.04891 11.174 9.63856 11.7842C10.2282 12.3944 11.032 12.7514 11.88 12.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C14.4961 22.0048 16.9025 21.0694 18.74 19.38C18.64 18.44 18.04 17.52 16.97 16.8C14.25 14.98 9.77001 14.98 7.03001 16.8C5.96001 17.52 5.36001 18.44 5.26001 19.38C7.04001 21.01 9.40001 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g>
    </svg>
  );
}