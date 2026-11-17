import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // /api/* 요청을 실제 API 서버로 전달 (브라우저 입장에선 같은 주소라 CORS 안 걸림)
  async rewrites() {
    const target = process.env.API_PROXY_TARGET;
    if (!target) {
      throw new Error(
        "API_PROXY_TARGET 환경변수가 없습니다. .env.example을 .env.local로 복사해 값을 넣어주세요.",
      );
    }
    return [{ source: "/api/:path*", destination: `${target}/api/:path*` }];
  },
  images: {
    // 디자인 사진 (S3 서명 URL)
    remotePatterns: [
      { protocol: "https", hostname: "nailroad-images.s3.ap-northeast-2.amazonaws.com" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
