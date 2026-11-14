import DesignFilterBar from "@/components/design/DesignFilterBar";
import DesignHeader from "@/components/design/DesignHeader";
import DesignMasonry from "@/components/design/DesignMasonry";
import DesignTotalNumber from "@/components/design/DesignTotalNumber";

export default function DesignPage() {
  return (
    <main className="flex flex-1 flex-col">
      <DesignHeader />
      <DesignFilterBar />
      <DesignTotalNumber />
      <DesignMasonry />
    </main>
  );
}
