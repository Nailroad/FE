import type { ReactNode } from "react";

export default function SignupIntro({ children }: { children: ReactNode }) {
  return (
    <main className="bg-gray-0 px-medium flex min-h-dvh flex-col items-center pt-[calc(56px+env(safe-area-inset-top))] pb-[max(24px,env(safe-area-inset-bottom))]">
      <div className="gap-medium2 flex flex-col text-center">
        <h1 className="typo-title1-semibold">회원가입</h1>
        <p className="typo-body1-medium text-gray-600">네일로드에 어떻게 가입할까요?</p>
      </div>
      <div className="mt-[clamp(48px,14dvh,112px)] w-full">{children}</div>
    </main>
  );
}
