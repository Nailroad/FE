import { notFound } from "next/navigation";

import { MEMBER_TYPES } from "@/components/auth/options";
import SignupIntro from "@/components/auth/SignupIntro";
import SocialAuthOptions from "@/components/auth/SocialAuthOptions";

export function generateStaticParams() {
  return MEMBER_TYPES.map(({ value }) => ({ memberType: value }));
}

export default async function SignupSocialPage({
  params,
}: {
  params: Promise<{ memberType: string }>;
}) {
  const { memberType } = await params;
  const selectedType = MEMBER_TYPES.find(({ value }) => value === memberType);

  if (!selectedType) notFound();

  return (
    <SignupIntro>
      <SocialAuthOptions mode="signup" memberType={selectedType.value} />
    </SignupIntro>
  );
}
