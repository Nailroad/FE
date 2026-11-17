import { type SVGProps, useId } from "react";

/** 라운드 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function RoundIcon(props: SVGProps<SVGSVGElement>) {
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
        <path
          d="M20 8C28.2843 8 35 15.2543 35 24.203C35 24.6082 34.9862 25.0099 34.9591 25.4077H35V50C35 53.3137 32.3137 56 29 56H11C7.68629 56 5 53.3137 5 50V25.4077H5.04086C5.0138 25.0099 5 24.6082 5 24.203C5 15.2543 11.7157 8 20 8Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M20 8C28.2843 8 35 15.2543 35 24.203C35 24.6082 34.9862 25.0099 34.9591 25.4077H35V50C35 53.3137 32.3137 56 29 56H11C7.68629 56 5 53.3137 5 50V25.4077H5.04086C5.0138 25.0099 5 24.6082 5 24.203C5 15.2543 11.7157 8 20 8Z"
            fill="white"
          />
        </mask>
        <path
          d="M20 8C28.2843 8 35 15.2543 35 24.203C35 24.6082 34.9862 25.0099 34.9591 25.4077H35V50C35 53.3137 32.3137 56 29 56H11C7.68629 56 5 53.3137 5 50V25.4077H5.04086C5.0138 25.0099 5 24.6082 5 24.203C5 15.2543 11.7157 8 20 8Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </>
    </svg>
  );
}
