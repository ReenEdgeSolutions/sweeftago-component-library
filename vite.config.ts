import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-preserve-directives";
import * as packageJson from "./package.json";

const makeExternalPredicate = (externalArr: string[]) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return (id: string) => pattern.test(id);
};

const externals = makeExternalPredicate(Object.keys(packageJson.peerDependencies));

export default defineConfig(() => ({
  assetsInclude: [
    "**/*.woff",
    "**/*.woff2",
    "**/*.ttf",
    "**/*.eot",
    "**/*.svg",
    "**/*.png",
    "**/*.jpg",
    "**/*.gif",
  ],
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src/**/*.{ts,tsx}"],
      rollupTypes: true,
    }),
  ],
  build: {
    sourcemap: false,
    cssCodeSplit: false,
    target: 'es2020',
    reportCompressedSize: false,
    lib: {
      entry: resolve("src", "index.ts"),
      name: "component-library",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: externals,
      plugins: [preserveDirectives()],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css';
          }
          return assetInfo.name ? assetInfo.name : '[name]-[hash][extname]';
        },
        compact: true,
      },
      treeshake: { 
        moduleSideEffects: false,
      },
    },
  },
  optimizeDeps: {
    exclude: [...Object.keys(packageJson.peerDependencies)],
  },
}));