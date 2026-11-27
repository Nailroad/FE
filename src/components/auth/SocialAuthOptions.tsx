"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import googleLogo from "@/assets/icons/google-logo.svg";
import kakaoLogo from "@/assets/icons/kakao-logo.svg";

import { type SignupMemberType, SOCIAL_PROVIDERS } from "./options";

type SocialAuthOptionsProps = { mode: "login" } | { mode: "signup"; memberType: SignupMemberType };

export default function SocialAuthOptions(props: SocialAuthOptionsProps) {
  const [loginNotice, setLoginNotice] = useState("");
  const isLogin = props.mode === "login";

  return (
    <div className="gap-xlarge relative flex w-full flex-col items-center">
      <div className="gap-medium2 flex w-full flex-col">
        {SOCIAL_PROVIDERS.map(({ value, label }) => {
          const isKakao = value === "kakao";
          const className = `typo-body1-semibold rounded-medium2 gap-medium flex w-full items-center justify-center px-3 ${
            isKakao
              ? "h-[52px] bg-[#fae100] hover:bg-[#f5dc00]"
              : "h-[54px] border border-gray-300 hover:bg-gray-50"
          }`;
          const content = (
            <>
              <Image
                src={isKakao ? kakaoLogo : googleLogo}
                alt=""
                width={24}
                height={24}
                unoptimized
                className="shrink-0"
              />
              {label}로 {isLogin ? "로그인" : "회원가입"}
            </>
          );

          if (props.mode === "login") {
            return (
              <button
                key={value}
                type="button"
                className={`${className} cursor-pointer`}
                onClick={() => setLoginNotice(`${label} 로그인은 연동 준비 중이에요.`)}
              >
                {content}
              </button>
            );
          }

          return (
            <Link key={value} href={`/signup/${props.memberType}/${value}`} className={className}>
              {content}
            </Link>
          );
        })}
      </div>
      <Link
        href={isLogin ? "/signup" : "/login"}
        className="typo-body2-medium text-gray-600 hover:underline"
      >
        {isLogin ? "회원가입" : "로그인"}
      </Link>
      {isLogin && (
        <p
          role="status"
          className="typo-caption1-medium absolute inset-x-0 top-full mt-2 text-center text-gray-600"
        >
          {loginNotice}
        </p>
      )}
    </div>
  );
}
