import { type SVGProps, useId } from "react";

/** 오벌 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function OvalIcon(props: SVGProps<SVGSVGElement>) {
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
      <>
        <ellipse cx="20" cy="32" rx="16.5" ry="25.5" fill="white" />
        <mask id={maskId} fill="white">
          <ellipse cx="20" cy="32" rx="16.5" ry="25.5" fill="white" />
        </mask>
        <ellipse
          cx="20"
          cy="32"
          rx="16.5"
          ry="25.5"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </>
    </svg>
  );
}
