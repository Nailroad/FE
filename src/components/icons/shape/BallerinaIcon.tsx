import { type SVGProps, useId } from "react";

/** 발레리나 쉐입 (40 × 64). 선은 안쪽 2px (마스크로 바깥 절반을 잘라냄), 색은 currentColor */
export default function BallerinaIcon(props: SVGProps<SVGSVGElement>) {
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
          d="M27.5996 6L30.8214 18.4041C33.5959 29.0861 35 40.0777 35 51.1142C35 55.4694 31.4694 59 27.1142 59H13.6167C9.41011 59 6 55.5899 6 51.3833C6 40.173 7.49992 29.0131 10.4598 18.2006L13.7997 6H27.5996Z"
          fill="white"
        />
        <mask id={maskId} fill="white">
          <path
            d="M27.5996 6L30.8214 18.4041C33.5959 29.0861 35 40.0777 35 51.1142C35 55.4694 31.4694 59 27.1142 59H13.6167C9.41011 59 6 55.5899 6 51.3833C6 40.173 7.49992 29.0131 10.4598 18.2006L13.7997 6H27.5996Z"
            fill="white"
          />
        </mask>
        <path
          d="M27.5996 6L30.8214 18.4041C33.5959 29.0861 35 40.0777 35 51.1142C35 55.4694 31.4694 59 27.1142 59H13.6167C9.41011 59 6 55.5899 6 51.3833C6 40.173 7.49992 29.0131 10.4598 18.2006L13.7997 6H27.5996Z"
          strokeWidth="4"
          stroke="currentColor"
          mask={`url(#${maskId})`}
        />
      </>
    </svg>
  );
}
