import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages는 https://<user>.github.io/<repo>/ 로 서빙되므로 base가 필요하다.
// 로컬 개발(dev/preview)에서는 "/" 를 쓴다.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/SF-Financial_Services_Cloud/" : "/",
  plugins: [react()],
});
