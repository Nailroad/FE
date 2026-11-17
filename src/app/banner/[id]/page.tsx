export const instant = false;

type BannerPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BannerPage({ params }: BannerPageProps) {
  await params;

  return <main className="min-h-dvh bg-gray-0" />;
}
