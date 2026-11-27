"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

import successIcon from "@/assets/icons/success.svg";
import Button from "@/components/common/Button";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import { SIGNUP_PREVIEW_VERIFICATION_CODE } from "@/mocks/auth";

import SignupBackBar from "./SignupBackBar";
import SignupTerms, { SIGNUP_TERMS, type SignupTermId } from "./SignupTerms";

type PhoneVerification = "idle" | "code-sent" | "verified";

const FIELD_CLASS =
  "rounded-medium typo-body2-medium flex min-h-[46px] w-full items-center gap-3 border px-3 focus-within:border-gray-900";

const ACTION_CLASS = "h-[50px]! bg-[#ed5564]! hover:bg-primary-600!";

function formatPhoneNumber(phone: string) {
  return [phone.slice(0, 3), phone.slice(3, 7), phone.slice(7)].filter(Boolean).join("-");
}

export default function SignupDetailsScreen({ previousHref }: { previousHref: string }) {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [verification, setVerification] = useState<PhoneVerification>("idle");
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [agreed, setAgreed] = useState<SignupTermId[]>([]);
  const [showTermsError, setShowTermsError] = useState(false);
  const [complete, setComplete] = useState(false);

  const verified = verification === "verified";
  const hasRequiredAgreements = SIGNUP_TERMS.every(
    ({ id, required }) => !required || agreed.includes(id),
  );

  function changePhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits === phone) return;

    setPhone(digits);
    setPhoneError("");
    setVerification("idle");
    setCode("");
    setCodeError("");
  }

  function validatePhone() {
    if (!phone) {
      setPhoneError("전화번호를 입력해 주세요.");
      return false;
    }

    if (!/^010\d{8}$/.test(phone)) {
      setPhoneError("올바른 전화번호를 입력해 주세요.");
      return false;
    }

    setPhoneError("");
    return true;
  }

  function requestCode() {
    if (!validatePhone()) return;

    setVerification("code-sent");
    setCode("");
    setCodeError("");
  }

  function verifyCode() {
    if (verification !== "code-sent") return;

    if (code !== SIGNUP_PREVIEW_VERIFICATION_CODE) {
      setCodeError("인증번호가 올바르지 않아요.");
      return;
    }

    setCodeError("");
    setVerification("verified");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validatePhone()) return;

    if (!verified) {
      if (verification === "code-sent") {
        setCodeError("인증번호를 확인해 주세요.");
      } else {
        setPhoneError("전화번호 인증을 완료해 주세요.");
      }
      return;
    }

    if (!hasRequiredAgreements) {
      setShowTermsError(true);
      return;
    }

    setComplete(true);
  }

  if (complete) {
    return (
      <main className="bg-gray-0 flex min-h-dvh flex-col pt-[env(safe-area-inset-top)]">
        <SignupBackBar onBack={() => setComplete(false)} />
        <div className="px-medium flex flex-1 flex-col items-center gap-8 pt-[clamp(64px,19dvh,157px)] pb-[max(34px,env(safe-area-inset-bottom))]">
          <div className="gap-xlarge flex flex-col items-center text-center">
            <Image src={successIcon} alt="" width={72} height={72} unoptimized />
            <div className="gap-medium flex flex-col">
              <h1 className="typo-title1-semibold">
                회원가입이
                <br />
                완료되었습니다!
              </h1>
              <p className="typo-body2-medium text-[#8d8d8d]">
                홈에서 취향에 맞는 네일을 탐색해보세요
              </p>
            </div>
          </div>
          <Link
            href="/home"
            className="rounded-medium2 typo-body1-semibold hover:bg-primary-600 mt-auto flex h-[50px] w-full items-center justify-center bg-[#ed5564] text-white"
          >
            내 취향 네일 찾기 시작하기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-0 flex min-h-dvh flex-col pt-[env(safe-area-inset-top)]">
      <SignupBackBar href={previousHref} />
      <div className="px-medium gap-medium2 flex flex-col text-center">
        <h1 className="typo-title1-semibold">추가정보</h1>
        <p className="typo-body1-medium text-gray-600">
          더 나은 서비스를 위해 추가 정보를
          <br />
          기입해주세요
        </p>
      </div>
      <form
        className="px-medium mt-[64px] flex flex-1 flex-col pb-[max(34px,env(safe-area-inset-bottom))]"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="gap-medium flex flex-col">
          <label htmlFor="signup-phone" className="typo-body2-medium">
            전화번호
          </label>
          <div className={`${FIELD_CLASS} ${phoneError ? "border-red-500" : "border-gray-300"}`}>
            <input
              id="signup-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              value={formatPhoneNumber(phone)}
              onChange={(event) => changePhone(event.target.value)}
              placeholder="010-1234-5678"
              readOnly={verified}
              aria-invalid={Boolean(phoneError)}
              aria-describedby={phoneError ? "signup-phone-error" : undefined}
              className="min-w-0 flex-1 placeholder:text-gray-500 focus:outline-none"
            />
            {verified ? (
              <span role="status" className="shrink-0 text-[#ed5564]">
                <CheckCircleIcon />
                <span className="sr-only">전화번호 인증 완료</span>
              </span>
            ) : phone ? (
              <button type="button" className="shrink-0 cursor-pointer" onClick={requestCode}>
                인증번호 발송
              </button>
            ) : null}
          </div>
          {phoneError && (
            <p
              id="signup-phone-error"
              role="alert"
              className="typo-caption1-medium -mt-1 text-red-500"
            >
              {phoneError}
            </p>
          )}
          {verification === "code-sent" && (
            <div className="gap-small flex flex-col">
              <div className={`${FIELD_CLASS} ${codeError ? "border-red-500" : "border-gray-300"}`}>
                <input
                  aria-label="인증번호"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="인증번호 입력"
                  value={code}
                  onChange={(event) => {
                    setCode(event.target.value.replace(/\D/g, "").slice(0, 6));
                    setCodeError("");
                  }}
                  aria-invalid={Boolean(codeError)}
                  aria-describedby={codeError ? "signup-code-error" : undefined}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      verifyCode();
                    }
                  }}
                  className="min-w-0 flex-1 placeholder:text-gray-500 focus:outline-none"
                />
                <button type="button" className="shrink-0 cursor-pointer" onClick={verifyCode}>
                  확인
                </button>
              </div>
              {codeError && (
                <p
                  id="signup-code-error"
                  role="alert"
                  className="typo-caption1-medium text-red-500"
                >
                  {codeError}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="mt-[64px] mb-8">
          <SignupTerms
            agreed={agreed}
            onChange={(next) => {
              setAgreed(next);
              if (SIGNUP_TERMS.every(({ id, required }) => !required || next.includes(id))) {
                setShowTermsError(false);
              }
            }}
            showError={showTermsError}
          />
        </div>
        <Button type="submit" className={`mt-auto shrink-0 cursor-pointer ${ACTION_CLASS}`}>
          회원가입 완료
        </Button>
      </form>
    </main>
  );
}
