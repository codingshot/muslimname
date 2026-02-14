import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/") || id.includes("react-router")) return "vendor-react";
            if (id.includes("framer-motion") || id.includes("lucide-react")) return "vendor-ui";
            if (id.includes("react-markdown") || id.includes("remark-") || id.includes("rehype-")) return "vendor-markdown";
          }
          if (id.includes("legalNameChange")) return "data-legal";
          if (id.includes("blogs.ts")) return "data-blogs";
          if (id.includes("/names.ts") || id.includes("quranicNames") || id.includes("companionsAndProphets")) return "data-names";
          if (id.includes("nameMappingData") || id.includes("nameMapping.ts")) return "data-mapping";
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
