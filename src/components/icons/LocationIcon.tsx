import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function LocationIcon({
  size = 24,
  width = size,
  height = size,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g>
        <path
          d="M21.5 12H19.389M19.389 12C19.389 13.9598 18.611 15.8389 17.2252 17.2247C15.8394 18.6105 13.9598 19.389 12 19.389M19.389 12C19.389 10.0402 18.611 8.16013 17.2252 6.77433C15.8394 5.38853 13.9598 4.611 12 4.611M12 2.5V4.611M12 4.611C10.0403 4.611 8.16089 5.38848 6.77519 6.77419C5.38948 8.15989 4.611 10.0393 4.611 11.999C4.611 13.9587 5.38948 15.8381 6.77519 17.2238C8.16089 18.6095 10.0403 19.389 12 19.389M2.5 12H4.611M12 21.5V19.389"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M12 16.2221C13.1198 16.2221 14.1936 15.7773 14.9854 14.9855C15.7772 14.1937 16.222 13.1198 16.222 12.0001C16.222 10.8803 15.7772 9.80645 14.9854 9.01467C14.1936 8.22289 13.1198 7.77808 12 7.77808C10.8803 7.77808 9.80639 8.22289 9.01461 9.01467C8.22283 9.80645 7.77802 10.8803 7.77802 12.0001C7.77802 13.1198 8.22283 14.1937 9.01461 14.9855C9.80639 15.7773 10.8803 16.2221 12 16.2221Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
