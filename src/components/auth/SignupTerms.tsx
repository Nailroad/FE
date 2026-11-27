"use client";

import { useState } from "react";

import NavArrowDownIcon from "@/components/icons/NavArrowDownIcon";

export const SIGNUP_TERMS = [
  { id: "terms", label: "이용 약관 동의", required: true },
  { id: "privacy", label: "개인정보 수집 및 이용동의", required: true },
  { id: "marketing", label: "SMS 광고 수신 동의", required: false },
] as const;

export type SignupTermId = (typeof SIGNUP_TERMS)[number]["id"];

const checkboxStyle =
  "size-5 shrink-0 cursor-pointer appearance-none rounded-full border border-gray-400 checked:bg-gray-400 checked:shadow-[inset_0_0_0_3px_white]";

export default function SignupTerms({
  agreed,
  onChange,
  showError,
}: {
  agreed: SignupTermId[];
  onChange: (agreed: SignupTermId[]) => void;
  showError: boolean;
}) {
  const [expanded, setExpanded] = useState<SignupTermId[]>([]);
  const allAgreed = agreed.length === SIGNUP_TERMS.length;

  return (
    <fieldset className="gap-medium2 flex min-w-0 flex-col">
      <legend className="sr-only">회원가입 약관 동의</legend>
      <label className="gap-medium typo-body2-medium flex cursor-pointer items-center border-b border-gray-300 pb-3">
        <input
          type="checkbox"
          className={checkboxStyle}
          checked={allAgreed}
          onChange={(event) =>
            onChange(event.target.checked ? SIGNUP_TERMS.map(({ id }) => id) : [])
          }
        />
        약관 전체 동의
      </label>
      {SIGNUP_TERMS.map(({ id, label, required }) => {
        const isExpanded = expanded.includes(id);
        const detailsId = `signup-term-${id}`;

        return (
          <div key={id}>
            <div className="flex items-center justify-between gap-2">
              <label className="gap-medium typo-body2-regular flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className={checkboxStyle}
                  checked={agreed.includes(id)}
                  onChange={(event) =>
                    onChange(
                      event.target.checked ? [...agreed, id] : agreed.filter((item) => item !== id),
                    )
                  }
                />
                {label} ({required ? "필수" : "선택"})
              </label>
              <button
                type="button"
                aria-label={`${label} 내용 ${isExpanded ? "접기" : "펼치기"}`}
                aria-controls={detailsId}
                aria-expanded={isExpanded}
                className="flex size-5 shrink-0 cursor-pointer items-center justify-center"
                onClick={() =>
                  setExpanded(
                    isExpanded ? expanded.filter((item) => item !== id) : [...expanded, id],
                  )
                }
              >
                <NavArrowDownIcon size={20} className={isExpanded ? "rotate-180" : undefined} />
              </button>
            </div>
            <p
              id={detailsId}
              hidden={!isExpanded}
              className="rounded-medium typo-caption1-medium mt-2 bg-gray-50 p-3 text-gray-600"
            >
              약관 본문은 준비 중이에요.
            </p>
          </div>
        );
      })}
      {showError && (
        <p role="alert" className="typo-caption1-medium text-red-500">
          필수 약관에 동의해 주세요.
        </p>
      )}
    </fieldset>
  );
}
