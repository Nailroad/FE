import { notFound } from "next/navigation";

import DesignDetailContainer from "@/components/design-detail/DesignDetailContainer";

export const instant = false;

type DesignDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function DesignDetailPage({ params }: DesignDetailPageProps) {
  const { id } = await params;
  const designId = Number(id);

  if (!Number.isInteger(designId) || designId <= 0) {
    notFound();
  }

  return <DesignDetailContainer designId={designId} />;
}
