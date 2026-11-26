import DesignHeader from "@/components/design/DesignHeader";
import DesignScreen from "@/components/design/DesignScreen";

export default function DesignPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="gap-medium2 flex flex-col">
        {/* 헤더는 필터 칩 줄과 함께 스크롤 시 상단 고정되도록 DesignScreen 안으로 전달 */}
        <DesignScreen header={<DesignHeader />} />
      </div>
    </main>
  );
}
