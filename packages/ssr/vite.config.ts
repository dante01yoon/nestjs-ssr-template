import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import type { UserConfig } from "vitest/config";

const test: UserConfig["test"] = {
  globals: true,
  environment: 'jsdom',
  setupFiles: ["src/__tests__/setupTests.ts"],
  threads: false,
  watch: false,
}

export default defineConfig({
  plugins: [react, require("glob")],
  build: {
    minify: false,
  },
  root: "",
  test,
})
