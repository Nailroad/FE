import { type SVGProps, useId } from "react";

/** 아몬드 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function AlmondIcon(props: SVGProps<SVGSVGElement>) {
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
      <g transform="translate(5 7.5)">
        <path
          d="M30 32.74C29.9998 21.3702 20.2129 0 15.0023 0C9.79176 0 0.000198364 21.3702 -1.90735e-06 32.74C-0.000255585 47.2661 9.05799 48.9924 14.986 49C14.9823 49 14.9785 49 14.9747 49L14.9974 49C14.9936 49 14.9898 49 14.986 49C20.9135 48.9978 30.0003 47.2889 30 32.74Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M30 32.74C29.9998 21.3702 20.2129 0 15.0023 0C9.79176 0 0.000198364 21.3702 -1.90735e-06 32.74C-0.000255585 47.2661 9.05799 48.9924 14.986 49C14.9823 49 14.9785 49 14.9747 49L14.9974 49C14.9936 49 14.9898 49 14.986 49C20.9135 48.9978 30.0003 47.2889 30 32.74Z"
            fill="white"
          />
        </mask>
        <path
          d="M30 32.74C29.9998 21.3702 20.2129 0 15.0023 0C9.79176 0 0.000198364 21.3702 -1.90735e-06 32.74C-0.000255585 47.2661 9.05799 48.9924 14.986 49C14.9823 49 14.9785 49 14.9747 49L14.9974 49C14.9936 49 14.9898 49 14.986 49C20.9135 48.9978 30.0003 47.2889 30 32.74Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </g>
    </svg>
  );
}
