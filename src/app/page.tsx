// ⚠️ 버튼 확인용 임시 코드 — 확인 후 원래대로 되돌리기
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6 px-4 pt-6">
      <section className="flex flex-col gap-2">
        <p className="typo-caption1-medium text-gray-600">1. 기본</p>
        <Button>라벨</Button>
      </section>

      <section className="flex flex-col gap-2">
        <p className="typo-caption1-medium text-gray-600">2. 호버 (색 고정해서 표시)</p>
        <Button className="bg-primary-600">라벨</Button>
      </section>

      <section className="flex flex-col gap-2">
        <p className="typo-caption1-medium text-gray-600">3. 로딩</p>
        <Button loading>라벨</Button>
      </section>

      <section className="flex flex-col gap-2">
        <p className="typo-caption1-medium text-gray-600">4. 비활성</p>
        <Button disabled>라벨</Button>
      </section>
    </main>
  );
}
