import { type SVGProps, useId } from "react";

/** 플레어 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function FlareIcon(props: SVGProps<SVGSVGElement>) {
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
      <g transform="translate(2 7)">
        <path
          d="M0.121596 7.19178C-0.631713 3.47479 2.20949 0 6.00204 0H29.3261C33.1186 0 35.9598 3.47478 35.2065 7.19177L27.5052 45.1918C26.9383 47.9892 24.4791 50 21.6248 50H13.7034C10.8491 50 8.38988 47.9892 7.82293 45.1918L0.121596 7.19178Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M0.121596 7.19178C-0.631713 3.47479 2.20949 0 6.00204 0H29.3261C33.1186 0 35.9598 3.47478 35.2065 7.19177L27.5052 45.1918C26.9383 47.9892 24.4791 50 21.6248 50H13.7034C10.8491 50 8.38988 47.9892 7.82293 45.1918L0.121596 7.19178Z"
            fill="white"
          />
        </mask>
        <path
          d="M0.121596 7.19178C-0.631713 3.47479 2.20949 0 6.00204 0H29.3261C33.1186 0 35.9598 3.47478 35.2065 7.19177L27.5052 45.1918C26.9383 47.9892 24.4791 50 21.6248 50H13.7034C10.8491 50 8.38988 47.9892 7.82293 45.1918L0.121596 7.19178Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </g>
    </svg>
  );
}
