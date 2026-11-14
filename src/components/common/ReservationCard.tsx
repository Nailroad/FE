import type { HTMLAttributes, ReactNode } from "react";

type ReservationCardProps = HTMLAttributes<HTMLElement> & {
  thumbnail: ReactNode;
  status: ReactNode;
  location: ReactNode;
  radius?: ReactNode;
  dates: ReactNode;
  locationIcon?: ReactNode;
  dateIcon?: ReactNode;
  showDivider?: boolean;
};

export default function ReservationCard({
  thumbnail,
  status,
  location,
  radius,
  dates,
  locationIcon,
  dateIcon,
  showDivider = false,
  className = "",
  ...props
}: ReservationCardProps) {
  return (
    <article
      className={`flex w-full max-w-[343px] items-center gap-large py-medium ${
        showDivider ? "border-b border-gray-300" : ""
      } ${className}`}
      {...props}
    >
      <span className="flex size-24 shrink-0 overflow-hidden rounded-medium">{thumbnail}</span>
      <div className="flex min-w-0 flex-col gap-medium">
        <h3 className="typo-body1-semibold text-gray-900">{status}</h3>
        <div className="flex flex-col gap-xsmall text-gray-600">
          <span className="flex items-center gap-small">
            {locationIcon ? <span className="flex size-4 shrink-0">{locationIcon}</span> : null}
            <span className="typo-body2-medium truncate">{location}</span>
            {radius ? (
              <>
                <span aria-hidden="true" className="size-0.5 shrink-0 rounded-full bg-gray-600" />
                <span className="typo-body2-medium shrink-0">{radius}</span>
              </>
            ) : null}
          </span>
          <span className="flex items-center gap-small">
            {dateIcon ? <span className="flex size-4 shrink-0">{dateIcon}</span> : null}
            <span className="typo-body2-medium truncate">{dates}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
