import terser from "@rollup/plugin-terser"; // 将 JavaScript 代码压缩为更小的文件
import json from "@rollup/plugin-json"; // 将 JSON 格式的模块作为 ES6 模块导入
import rollupTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

import autoExternal from "rollup-plugin-auto-external"; // 自动将所有的依赖包排除在打包之外

const lib = require("./package.json");
const outputFileName = "axios-min";
const name = "axios-min";
const namedInput = "./index.js";

const defaultInput = "./lib/axios-min.js";

const buildConfig = ({
  es5,
  browser = true,
  minifiedVersion = true,
  ...config
}) => {
  return [
    {
      input: namedInput,
      ...config,

      plugins: [
        json(),
        resolve({ browser }),
        commonjs(),
        rollupTypescript({ tsconfig: "./tsconfig.json" }),
        terser(),
        ...(es5
          ? [
              babel({
                babelHelpers: "bundled",
                presets: ["@babel/preset-env"],
              }),
            ]
          : []),
        ...(config.plugins || []),
      ],
    },
  ];
};

export default async () => {
  const year = new Date().getFullYear();
  const banner = `// Axios Min v${lib.version} Copyright (c) ${year} ${lib.author} and contributors`;

  return [
    // browser ESM bundle for CDN
    ...buildConfig({
      input: namedInput,
      output: {
        file: `dist/esm/${outputFileName}.js`,
        format: "esm",
        preferConst: true,
        exports: "named",
        banner,
      },
    }),
    // Browser UMD bundle for CDN
    ...buildConfig({
      input: defaultInput,
      es5: true,
      output: {
        file: `dist/${outputFileName}.js`,
        name,
        format: "umd",
        exports: "default",
        banner,
      },
    }),
    // Browser CJS bundle
    ...buildConfig({
      input: defaultInput,
      es5: false,
      minifiedVersion: false,
      output: {
        file: `dist/browser/${name}.cjs`,
        name,
        format: "cjs",
        exports: "default",
        banner,
      },
    }),
    // Node.js commonjs bundle
    {
      input: defaultInput,
      output: {
        file: `dist/node/${name}.cjs`,
        format: "cjs",
        preferConst: true,
        exports: "default",
        banner,
      },
      plugins: [autoExternal(), resolve(), commonjs()],
    },
  ];
};
