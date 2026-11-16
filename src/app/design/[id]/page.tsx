import { notFound } from "next/navigation";

import DesignDetailScreen from "@/components/design-detail/DesignDetailScreen";
import { MOCK_DESIGN_DETAILS } from "@/mocks/design-detail";
import { MOCK_DESIGNS } from "@/mocks/designs";

export const instant = false;

type DesignDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function DesignDetailPage({ params }: DesignDetailPageProps) {
  const { id } = await params;
  const designId = Number(id);
  const design = MOCK_DESIGNS.find((item) => item.id === designId);
  const detail = MOCK_DESIGN_DETAILS[designId];

  if (!Number.isInteger(designId) || !design || !detail) {
    notFound();
  }

  return <DesignDetailScreen design={design} detail={detail} />;
}
