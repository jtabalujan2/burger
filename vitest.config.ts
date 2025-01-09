import loadEnvConfig from "@next/env";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

loadEnvConfig.loadEnvConfig(process.cwd());

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    setupFiles: ["./src/lib/vitest_setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: ["src/components/ui/**/*.{js,jsx,ts,tsx}", "src/**/*.test.{js,jsx,ts,tsx}"],
    },
  },
});
