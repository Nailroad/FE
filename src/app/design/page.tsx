import DesignFilter from "@/components/design/DesignFilter";
import DesignHeader from "@/components/design/DesignHeader";
import DesignMasonry from "@/components/design/DesignMasonry";
import DesignTotalNumber from "@/components/design/DesignTotalNumber";
import { MOCK_DESIGNS } from "@/mocks/designs";

export default function DesignPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="gap-medium2 flex flex-col">
        <DesignHeader />
        <DesignFilter />
        <DesignTotalNumber total={MOCK_DESIGNS.length} />
        <DesignMasonry designs={MOCK_DESIGNS} />
      </div>
    </main>
  );
}
