import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function ShopDefaultIcon({
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
      <g><path d="M20.2899 3H16.2979L16.7979 8C16.7979 8 17.7979 9 19.2979 9C20.0853 9.00104 20.846 8.71441 21.4369 8.194C21.4996 8.1358 21.5463 8.06248 21.5726 7.98107C21.5988 7.89966 21.6038 7.81287 21.5869 7.729L20.8809 3.5C20.8573 3.36029 20.785 3.23345 20.6768 3.14194C20.5687 3.05042 20.4316 3.00014 20.2899 3Z" stroke="currentColor" strokeWidth="1.5" /><path d="M16.2979 3L16.7979 8C16.7979 8 15.7979 9 14.2979 9C12.7979 9 11.7979 8 11.7979 8V3H16.2979Z" stroke="currentColor" strokeWidth="1.5" /><path d="M11.7979 3V8C11.7979 8 10.7979 9 9.29791 9C7.79791 9 6.79791 8 6.79791 8L7.29791 3H11.7979Z" stroke="currentColor" strokeWidth="1.5" /><path d="M7.29793 3H3.30693C3.16493 2.99995 3.02751 3.05026 2.91911 3.142C2.81071 3.23373 2.73837 3.36094 2.71493 3.501L2.00993 7.73C1.99307 7.81387 1.99801 7.90066 2.02427 7.98207C2.05053 8.06348 2.09724 8.1368 2.15993 8.195C2.48793 8.485 3.22093 9.001 4.29793 9.001C5.79793 9.001 6.79793 8.001 6.79793 8.001L7.29793 3Z" stroke="currentColor" strokeWidth="1.5" /><path d="M2.80493 9V19C2.80493 19.5304 3.01565 20.0391 3.39072 20.4142C3.76579 20.7893 4.2745 21 4.80493 21H18.8049C19.3354 21 19.8441 20.7893 20.2191 20.4142C20.5942 20.0391 20.8049 19.5304 20.8049 19V9" stroke="currentColor" strokeWidth="1.5" /><path d="M14.6379 21V15C14.6379 14.4696 14.4272 13.9609 14.0522 13.5858C13.6771 13.2107 13.1684 13 12.6379 13H10.6379C10.1075 13 9.5988 13.2107 9.22373 13.5858C8.84865 13.9609 8.63794 14.4696 8.63794 15V21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="16" /></g>
    </svg>
  );
}