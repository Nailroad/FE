import NailroadLogo from "@/components/icons/nailroadlogo";

import SocialAuthOptions from "./SocialAuthOptions";

export default function LoginScreen() {
  return (
    <main className="bg-gray-0 px-medium flex min-h-dvh flex-col items-center justify-center gap-[clamp(40px,14dvh,112px)] pt-[env(safe-area-inset-top)] pb-[max(30px,env(safe-area-inset-bottom))]">
      <div className="flex flex-col items-center text-center">
        <h1>
          <NailroadLogo width={200} height={72} />
          <span className="sr-only">로그인</span>
        </h1>
        <p className="typo-body1-medium text-gray-600">
          내가 원하는 네일을 찾는
          <br />
          가장 쉬운 방법
        </p>
      </div>
      <SocialAuthOptions mode="login" />
    </main>
  );
}
