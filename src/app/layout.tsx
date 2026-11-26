import "./globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import Providers from "./providers";

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
      <body className="bg-gray-200">
        {/* 모바일 웹앱 컨테이너: 480px까지는 화면 폭에 맞춰 늘어나고, 그보다 넓으면 가운데 고정 (바깥은 회색 배경) */}
        <div className="bg-background relative mx-auto flex min-h-dvh w-full max-w-[480px] flex-col">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
