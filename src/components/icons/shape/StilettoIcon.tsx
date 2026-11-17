import { type SVGProps, useId } from "react";

/** 스틸레토 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function StilettoIcon(props: SVGProps<SVGSVGElement>) {
  const maskId = useId();

  return (
    <svg
      width={40}
      height={64}
      viewBox="0 0 40 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g transform="translate(7 2)">
        <path
          d="M13 60C-9.66992 60 2.22124 22.9157 11.893 2.30783C12.3376 1.36049 13.6624 1.36049 14.107 2.30783C23.7788 22.9157 35.6699 60 13 60Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M13 60C-9.66992 60 2.22124 22.9157 11.893 2.30783C12.3376 1.36049 13.6624 1.36049 14.107 2.30783C23.7788 22.9157 35.6699 60 13 60Z"
            fill="white"
          />
        </mask>
        <path
          d="M13 60C-9.66992 60 2.22124 22.9157 11.893 2.30783C12.3376 1.36049 13.6624 1.36049 14.107 2.30783C23.7788 22.9157 35.6699 60 13 60Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </g>
    </svg>
  );
}
