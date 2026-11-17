import { type SVGProps, useId } from "react";

/** 스퀘어 오벌 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function SquareOvalIcon(props: SVGProps<SVGSVGElement>) {
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
          d="M4.5 19.6364C4.5 13.2098 9.70978 8 16.1364 8H23.8636C30.2902 8 35.5 13.2098 35.5 19.6364V50C35.5 53.3137 32.8137 56 29.5 56H10.5C7.18629 56 4.5 53.3137 4.5 50V19.6364Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M4.5 19.6364C4.5 13.2098 9.70978 8 16.1364 8H23.8636C30.2902 8 35.5 13.2098 35.5 19.6364V50C35.5 53.3137 32.8137 56 29.5 56H10.5C7.18629 56 4.5 53.3137 4.5 50V19.6364Z"
            fill="white"
          />
        </mask>
        <path
          d="M4.5 19.6364C4.5 13.2098 9.70978 8 16.1364 8H23.8636C30.2902 8 35.5 13.2098 35.5 19.6364V50C35.5 53.3137 32.8137 56 29.5 56H10.5C7.18629 56 4.5 53.3137 4.5 50V19.6364Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </>
    </svg>
  );
}
