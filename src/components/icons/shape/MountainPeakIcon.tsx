import { type SVGProps, useId } from "react";

/** 마운틴 피크 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function MountainPeakIcon(props: SVGProps<SVGSVGElement>) {
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
      <g transform="translate(5 5.5)">
        <path
          d="M30 35.4126C30 18.55 15.0023 0 15.0023 0C15.0023 0 0 19.4333 0 35.4127C0 51.1235 9.05688 52.9916 14.9849 53C14.9815 53 14.9781 53 14.9747 53L14.9952 53C14.9918 53 14.9883 53 14.9849 53C20.9124 52.9978 30 51.1502 30 35.4126Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M30 35.4126C30 18.55 15.0023 0 15.0023 0C15.0023 0 0 19.4333 0 35.4127C0 51.1235 9.05688 52.9916 14.9849 53C14.9815 53 14.9781 53 14.9747 53L14.9952 53C14.9918 53 14.9883 53 14.9849 53C20.9124 52.9978 30 51.1502 30 35.4126Z"
            fill="white"
          />
        </mask>
        <path
          d="M30 35.4126C30 18.55 15.0023 0 15.0023 0C15.0023 0 0 19.4333 0 35.4127C0 51.1235 9.05688 52.9916 14.9849 53C14.9815 53 14.9781 53 14.9747 53L14.9952 53C14.9918 53 14.9883 53 14.9849 53C20.9124 52.9978 30 51.1502 30 35.4126Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </g>
    </svg>
  );
}
