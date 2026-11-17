import { type SVGProps, useId } from "react";

/** 스퀘어 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function SquareIcon(props: SVGProps<SVGSVGElement>) {
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
      <g transform="translate(4 7.5)">
        <path
          d="M0 6.38832C0 2.86015 2.86015 0 6.38832 0H25.6117C29.1399 0 32 2.86015 32 6.38832V43C32 46.3137 29.3137 49 26 49H6C2.68629 49 0 46.3137 0 43V6.38832Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M0 6.38832C0 2.86015 2.86015 0 6.38832 0H25.6117C29.1399 0 32 2.86015 32 6.38832V43C32 46.3137 29.3137 49 26 49H6C2.68629 49 0 46.3137 0 43V6.38832Z"
            fill="white"
          />
        </mask>
        <path
          d="M0 6.38832C0 2.86015 2.86015 0 6.38832 0H25.6117C29.1399 0 32 2.86015 32 6.38832V43C32 46.3137 29.3137 49 26 49H6C2.68629 49 0 46.3137 0 43V6.38832Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </g>
    </svg>
  );
}
