import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      entryFileNames: "esm/[name].js",
    },
    {
      dir: "dist/",
      format: "cjs",
      exports: "auto",
      preserveModules: true,
      entryFileNames: "cjs/[name].cjs",
    },
  ],
  plugins: [
    nodeResolve({
      browser: true,
    }),
    typescript({
      declaration: true,
      declarationDir: "dist/types",
      emitDeclarationOnly: true,
    }),
  ],
});
