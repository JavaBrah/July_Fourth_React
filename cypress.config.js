import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://localhost:5173",
    supportFile: false,

  },
  viewportHeight: 1000,
  viewportWidth: 768,
  video: false,
});
