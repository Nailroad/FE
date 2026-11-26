import Image from "next/image";
import { notFound } from "next/navigation";

import TopBar from "@/components/common/TopBar";
import MagazineBackButton from "@/components/magazine/MagazineBackButton";
import { getMockMagazine, getMockMagazineIds } from "@/mocks/magazine";
import galleryDots from "@/mocks/magazine/gallery-dots.svg";

export function generateStaticParams() {
  return getMockMagazineIds().map((id) => ({ id }));
}

export default async function MagazineDetailPage({ params }: PageProps<"/magazine/[id]">) {
  const { id } = await params;
  const magazine = getMockMagazine(id);

  if (!magazine) notFound();

  return (
    <main className="bg-gray-0 flex flex-1 flex-col pt-[env(safe-area-inset-top)]">
      <TopBar title="매거진" left={<MagazineBackButton fallbackHref="/magazine" />} />
      <article className="mt-0.5">
        <div className="relative aspect-[375/467] w-full bg-gray-100">
          <Image
            src={magazine.image}
            alt={magazine.title}
            fill
            unoptimized
            loading="eager"
            className="object-cover"
          />
          {magazine.showGalleryPreview && (
            <Image
              src={galleryDots}
              alt=""
              width={48}
              height={6}
              unoptimized
              className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 px-4 pt-4 pb-8">
          <h2 className="typo-heading2-semibold text-gray-900">{magazine.title}</h2>
          <p className="typo-body2-medium whitespace-pre-line text-gray-900">{magazine.body}</p>
        </div>
      </article>
    </main>
  );
}
