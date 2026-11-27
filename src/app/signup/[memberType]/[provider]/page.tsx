import { notFound } from "next/navigation";

import { MEMBER_TYPES, SOCIAL_PROVIDERS } from "@/components/auth/options";
import SignupDetailsScreen from "@/components/auth/SignupDetailsScreen";

export function generateStaticParams() {
  return MEMBER_TYPES.flatMap(({ value: memberType }) =>
    SOCIAL_PROVIDERS.map(({ value: provider }) => ({ memberType, provider })),
  );
}

export default async function SignupDetailsPage({
  params,
}: {
  params: Promise<{ memberType: string; provider: string }>;
}) {
  const { memberType, provider } = await params;

  if (
    !MEMBER_TYPES.some(({ value }) => value === memberType) ||
    !SOCIAL_PROVIDERS.some(({ value }) => value === provider)
  ) {
    notFound();
  }

  return <SignupDetailsScreen previousHref={`/signup/${memberType}`} />;
}
