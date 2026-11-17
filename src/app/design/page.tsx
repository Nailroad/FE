import DesignHeader from "@/components/design/DesignHeader";
import DesignScreen from "@/components/design/DesignScreen";

export default function DesignPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="gap-medium2 flex flex-col">
        <DesignHeader />
        <DesignScreen />
      </div>
    </main>
  );
}
