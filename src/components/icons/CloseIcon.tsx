import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

/** ✕ 닫기 아이콘 (12 × 12). 색은 currentColor */
export default function CloseIcon({ size = 12, width = size, height = size, ...props }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M0.625 10.625L5.625 5.625M5.625 5.625L10.625 0.625M5.625 5.625L0.625 0.625M5.625 5.625L10.625 10.625"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
