"use client";

import { COLOR_SWATCHES, FILTER_CODES } from "@/components/design/filter/filterOptions";
import { useDesignDetail } from "@/hooks/useDesignDetail";
import shopProfileImage from "@/mocks/design-detail/shop-profile.png";

import DesignDetailScreen from "./DesignDetailScreen";
import { TAG_LABELS } from "./tagLabels";

const FALLBACK_SHOP_ADDRESS = "서대문구 · 반경 5km";

type DesignDetailContainerProps = {
  designId: number;
};

function getLabel(code: string, filter: keyof typeof FILTER_CODES) {
  return Object.entries(FILTER_CODES[filter]).find(([, value]) => value === code)?.[0] ?? code;
}

export default function DesignDetailContainer({ designId }: DesignDetailContainerProps) {
  const { data, isPending, isError, refetch } = useDesignDetail(designId);

  if (isPending) {
    return <StatusMessage>디자인 정보를 불러오는 중이에요.</StatusMessage>;
  }

  if (isError || !data) {
    return (
      <StatusMessage>
        <p>디자인 정보를 불러오지 못했어요.</p>
        <button type="button" onClick={() => refetch()} className="typo-body2-semibold text-gray-900 underline">
          다시 시도
        </button>
      </StatusMessage>
    );
  }

  const colors = data.colorCodes.map((code) => {
    const name = getLabel(code, "color");

    return { name, hex: COLOR_SWATCHES[name] ?? "#d7d9de" };
  });

  return (
    <DesignDetailScreen
      designImageUrl={data.designImageUrl}
      categories={data.categoryCodes.map((code) => getLabel(code, "category"))}
      shapes={data.shapeCodes.map((code) => getLabel(code, "shape"))}
      colors={colors}
      hashtags={data.tagNames.map((tag) => TAG_LABELS[tag] ?? `#${tag}`)}
      shop={{
        name: data.shopName,
        address: FALLBACK_SHOP_ADDRESS,
        profileImage: shopProfileImage,
      }}
    />
  );
}

function StatusMessage({ children }: { children: React.ReactNode }) {
  return <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-gray-0 px-medium typo-body2-medium text-gray-600">{children}</main>;
}
