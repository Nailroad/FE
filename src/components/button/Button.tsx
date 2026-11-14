import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** true면 글자 대신 로딩 점 3개를 보여주고 클릭을 막음 */
  loading?: boolean;
};

/**
 *
 * @example
 * // 기본
 * <Button onClick={handleClick}>라벨</Button>
 *
 * @example
 * // 요청 + 로딩 (성공/실패 후 다시 기본 상태로)
 * const [loading, setLoading] = useState(false);
 *
 * const handleClick = async () => {
 *   setLoading(true);
 *   try {
 *     await reserve();               // 요청
 *     router.push("/reserve/done");  // 성공 처리
 *   } catch {
 *     // 실패 처리 (에러 메시지 등)
 *   } finally {
 *     setLoading(false);             // 성공이든 실패든 로딩 해제
 *   }
 * };
 *
 * <Button loading={loading} onClick={handleClick}>예약하기</Button>
 *
 * @example
 * // 비활성 (조건을 만족하기 전)
 * <Button disabled={!agreed}>다음</Button>
 */

export default function Button({
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const stateStyle = disabled
    ? "bg-gray-200 text-gray-600"
    : loading
      ? "bg-primary-700 text-gray-0"
      : "bg-primary-500 text-gray-0 hover:bg-primary-600";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`typo-body1-semibold rounded-medium2 flex h-[52px] w-full items-center justify-center gap-2.5 p-2.5 transition-colors disabled:cursor-not-allowed ${stateStyle} ${className}`}
      {...props}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  );
}

function LoadingDots() {
  return (
    <span className="flex items-center gap-2" aria-label="로딩 중" role="status">
      {[0, 200, 400].map((delay) => (
        <span
          key={delay}
          className="bg-gray-0 size-1.5 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  );
}
