import { type SVGProps, useId } from "react";

type HeartIconProps = SVGProps<SVGSVGElement> & {
  active?: boolean;
  size?: number | string;
};

const OUTLINE =
  "M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z";
const FILLED =
  "M11.645 20.91L11.638 20.907L11.616 20.895C11.4873 20.8242 11.3596 20.7515 11.233 20.677C9.71081 19.7725 8.28828 18.7099 6.989 17.507C4.688 15.36 2.25 12.174 2.25 8.25C2.25 5.322 4.714 3 7.688 3C8.51475 2.99595 9.33178 3.17834 10.0783 3.53361C10.8249 3.88887 11.4817 4.40787 12 5.052C12.5184 4.40774 13.1754 3.88866 13.9221 3.53339C14.6689 3.17812 15.4861 2.9958 16.313 3C19.286 3 21.75 5.322 21.75 8.25C21.75 12.175 19.312 15.361 17.011 17.506C15.7117 18.709 14.2892 19.7715 12.767 20.676C12.6404 20.7508 12.5127 20.8239 12.384 20.895L12.362 20.907L12.355 20.911L12.352 20.912C12.2436 20.9694 12.1227 20.9995 12 20.9995C11.8773 20.9995 11.7564 20.9694 11.648 20.912L11.645 20.91Z";

export default function HeartIcon({
  active = false,
  size = 24,
  width = size,
  height = size,
  ...props
}: HeartIconProps) {
  const maskId = useId();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {active ? (
        <path d={FILLED} fill="currentColor" />
      ) : (
        <>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="1" y="1.75" width="22" height="21">
            <rect x="1" y="1.75" width="22" height="21" fill="white" />
            <path d={OUTLINE} fill="black" />
          </mask>
          <path d={OUTLINE} fill="#222222" fillOpacity={0.24} />
          <path
            d={OUTLINE}
            stroke="currentColor"
            strokeWidth={3.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            mask={`url(#${maskId})`}
          />
        </>
      )}
    </svg>
  );
}
