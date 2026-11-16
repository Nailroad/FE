import { type SVGProps, useId } from "react";

/** 애로우 헤드 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function ArrowHeadIcon(props: SVGProps<SVGSVGElement>) {
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
          d="M35 54.4911C35 56.9813 32.9813 59 30.4911 59H10.5089C8.0187 59 6 56.9813 6 54.4911V30.7711L18.9937 7.67726C19.6545 6.50276 21.3455 6.50276 22.0063 7.67726L35 30.7711V54.4911Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M35 54.4911C35 56.9813 32.9813 59 30.4911 59H10.5089C8.0187 59 6 56.9813 6 54.4911V30.7711L18.9937 7.67726C19.6545 6.50276 21.3455 6.50276 22.0063 7.67726L35 30.7711V54.4911Z"
            fill="white"
          />
        </mask>
        <path
          d="M35 54.4911C35 56.9813 32.9813 59 30.4911 59H10.5089C8.0187 59 6 56.9813 6 54.4911V30.7711L18.9937 7.67726C19.6545 6.50276 21.3455 6.50276 22.0063 7.67726L35 30.7711V54.4911Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </>
    </svg>
  );
}
