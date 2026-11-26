import CustomNailGrid from "@/components/custom-nail/CustomNailGrid";
import { MOCK_CUSTOM_NAIL_DESIGNS } from "@/mocks/custom-nail";

export default function CustomNailRecommendationsPage() {
  return <CustomNailGrid designs={MOCK_CUSTOM_NAIL_DESIGNS} />;
}
