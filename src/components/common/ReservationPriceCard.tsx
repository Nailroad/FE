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
      className={`gap-large rounded-medium bg-gray-0 p-medium flex w-full max-w-[343px] items-end border border-gray-300 ${className}`}
      {...props}
    >
      <span className="rounded-medium flex size-24 shrink-0 overflow-hidden">{thumbnail}</span>
      <div className="gap-medium flex min-w-0 flex-1 flex-col">
        <div className="gap-small flex flex-col">
          <h3 className="typo-body1-semibold text-gray-900">{name}</h3>
          <div className="gap-xsmall flex flex-col text-gray-600">
            <span className="gap-small flex items-center">
              {locationIcon ? <span className="flex size-4 shrink-0">{locationIcon}</span> : null}
              <span className="typo-body2-medium truncate">{location}</span>
              {radius ? (
                <>
                  <span aria-hidden="true" className="size-0.5 shrink-0 rounded-full bg-gray-600" />
                  <span className="typo-body2-medium shrink-0">{radius}</span>
                </>
              ) : null}
            </span>
            <span className="gap-small flex items-center">
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
