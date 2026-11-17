"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";

/** 앱 전체에서 TanStack Query를 쓸 수 있게 감싸는 컴포넌트 */
export default function Providers({ children }: { children: ReactNode }) {
  // 컴포넌트마다 새로 만들지 않도록 한 번만 생성
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분 동안은 다시 요청하지 않음
            retry: 1,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
