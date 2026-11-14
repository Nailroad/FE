import "./globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import NavBar from "@/components/common/NavBar";

const suit = localFont({
  src: "../assets/fonts/SUIT-Variable.woff2",
  variable: "--font-suit",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nailroad",
  description: "내가 원하는 네일을 찾는 가장 쉬운 방법",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // 아이폰 노치/홈바 영역(safe-area)까지 사용
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${suit.variable} antialiased`}>
      <body className="bg-gray-100">
        {/* 모바일 웹앱 컨테이너: 데스크톱에서는 가운데 정렬 */}
        <div className="bg-background relative mx-auto flex min-h-dvh w-full max-w-[375px] flex-col">
          {/* 하단 네브바(60px + 아래 34px + 여유 16px)에 내용이 가리지 않도록 아래 여백 확보 */}
          <div className="flex flex-1 flex-col pb-[calc(76px+max(34px,env(safe-area-inset-bottom)))]">
            {children}
          </div>

          <div className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[375px] px-4 pb-[max(34px,env(safe-area-inset-bottom))]">
            <NavBar />
          </div>
        </div>
      </body>
    </html>
  );
}
