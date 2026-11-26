import Link from "next/link";

export default function CustomNailEmptyState({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 px-4 py-6 text-center ${className}`}
    >
      <div className="flex flex-col gap-0.5">
        <p className="typo-body2-semibold text-gray-900">아직 맞춤형 네일이 없어요</p>
        <p className="typo-caption1-medium text-gray-600">
          다양한 디자인을 둘러보고
          <br />
          취향에 맞는 네일을 발견해 보세요.
        </p>
      </div>
      <Link
        href="/design"
        className="typo-caption1-semibold rounded-medium bg-gray-900 px-2 py-1.5 text-gray-50"
      >
        디자인 둘러보기
      </Link>
    </div>
  );
}
