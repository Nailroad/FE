import DesignFilterBar from "@/components/design/DesignFilterBar";
import DesignHeader from "@/components/design/DesignHeader";
import DesignMasonry from "@/components/design/DesignMasonry";
import DesignTotalNumber from "@/components/design/DesignTotalNumber";

export default function DesignPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="gap-medium2 flex flex-col">
        <DesignHeader />
        <DesignFilterBar />
      </div>
      <DesignTotalNumber />
      <DesignMasonry />
    </main>
  );
}
