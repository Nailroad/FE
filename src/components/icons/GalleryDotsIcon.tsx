import type { SVGProps } from "react";

type GalleryDotsIconProps = SVGProps<SVGSVGElement> & {
  count: number;
  activeIndex: number;
};

const DOT_SIZE = 6;
const DOT_GAP = 8;

export default function GalleryDotsIcon({ count, activeIndex, ...props }: GalleryDotsIconProps) {
  if (count < 2) return null;

  const width = count * DOT_SIZE + (count - 1) * DOT_GAP;
  const radius = DOT_SIZE / 2;

  return (
    <svg
      width={width}
      height={DOT_SIZE}
      viewBox={`0 0 ${width} ${DOT_SIZE}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {Array.from({ length: count }, (_, index) => (
        <circle
          key={index}
          cx={index * (DOT_SIZE + DOT_GAP) + radius}
          cy={radius}
          r={radius}
          fill={index === activeIndex ? "#ED5564" : "white"}
          fillOpacity={index === activeIndex ? 1 : 0.59}
        />
      ))}
    </svg>
  );
}
