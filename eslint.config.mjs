import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // import 정렬 (자동 수정 가능)
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // 사용하지 않는 변수: _로 시작하면 허용
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // console.log는 경고 (warn, error는 허용)
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  // Prettier와 충돌하는 포맷팅 규칙 끄기 (항상 마지막에 둘 것)
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
