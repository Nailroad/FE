import Image from "next/image";
import Link from "next/link";

import TopBar from "@/components/common/TopBar";
import MagazineBackButton from "@/components/magazine/MagazineBackButton";
import { MOCK_MAGAZINE_CARDS } from "@/mocks/magazine";

export default function MagazinePage() {
  return (
    <main className="bg-gray-0 flex flex-1 flex-col pt-[env(safe-area-inset-top)]">
      <TopBar left={<MagazineBackButton fallbackHref="/home" />} />
      <section className="flex flex-col gap-3 px-4">
        <h1 className="typo-heading1-semibold text-gray-900">매거진</h1>
        <ul className="grid grid-cols-2 gap-3">
          {MOCK_MAGAZINE_CARDS.map(({ id, title, image, crop }, index) => (
            <li key={id + "-" + index} className="min-w-0">
              <Link
                href={"/magazine/" + id}
                className={
                  "rounded-medium relative block overflow-hidden bg-gray-100 " +
                  (index < 2 ? "aspect-[166/207]" : "aspect-[166/218]")
                }
                aria-label={title}
              >
                <Image
                  src={image}
                  alt=""
                  className="absolute inset-y-0 left-0 h-full max-w-none object-cover object-left"
                  style={{ width: crop + "%" }}
                  unoptimized
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
