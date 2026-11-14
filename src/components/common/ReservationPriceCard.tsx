import type { HTMLAttributes, ReactNode } from "react";

type ReservationPriceCardProps = HTMLAttributes<HTMLElement> & {
  thumbnail: ReactNode;
  name: ReactNode;
  location: ReactNode;
  radius?: ReactNode;
  dates: ReactNode;
  price: ReactNode;
  locationIcon?: ReactNode;
  dateIcon?: ReactNode;
};

export default function ReservationPriceCard({
  thumbnail,
  name,
  location,
  radius,
  dates,
  price,
  locationIcon,
  dateIcon,
  className = "",
  ...props
}: ReservationPriceCardProps) {
  return (
    <article
      className={`flex w-full max-w-[343px] items-end gap-large rounded-medium border border-gray-300 bg-gray-0 p-medium ${className}`}
      {...props}
    >
      <span className="flex size-24 shrink-0 overflow-hidden rounded-medium">{thumbnail}</span>
      <div className="flex min-w-0 flex-1 flex-col gap-medium">
        <div className="flex flex-col gap-small">
          <h3 className="typo-body1-semibold text-gray-900">{name}</h3>
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
        <p className="typo-body2-semibold text-gray-900">{price}</p>
      </div>
    </article>
  );
}
