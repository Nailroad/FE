import { notFound } from "next/navigation";

import TopBar from "@/components/common/TopBar";
import MagazineBackButton from "@/components/magazine/MagazineBackButton";
import MagazineGallery from "@/components/magazine/MagazineGallery";
import { getMockMagazine, getMockMagazineIds } from "@/mocks/magazine";

export function generateStaticParams() {
  return getMockMagazineIds().map((id) => ({ id }));
}

export default async function MagazineDetailPage({ params }: PageProps<"/magazine/[id]">) {
  const { id } = await params;
  const magazine = getMockMagazine(id);

  if (!magazine) notFound();

  const galleryImages = magazine.galleryImages?.length ? magazine.galleryImages : [magazine.image];

  return (
    <main className="bg-gray-0 flex flex-1 flex-col pt-[env(safe-area-inset-top)]">
      <TopBar title="매거진" left={<MagazineBackButton fallbackHref="/magazine" />} />
      <article className="mt-0.5">
        <MagazineGallery key={id} images={galleryImages} title={magazine.title} />
        <div className="flex flex-col gap-2 px-4 pt-4 pb-8">
          <h2 className="typo-heading2-semibold text-gray-900">{magazine.title}</h2>
          <p className="typo-body2-medium whitespace-pre-line text-gray-900">{magazine.body}</p>
        </div>
      </article>
    </main>
  );
}
