import { defineConfig, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";

import { Options, terser } from "rollup-plugin-terser";
import { PluginVisualizerOptions, visualizer } from "rollup-plugin-visualizer";

const path = require("path");

const terserOptions: Options = {
  compress: {
    drop_console: true,
  },
  output: {
    comments: false,
  },
  ecma: 5,
  keep_classnames: false,
  keep_fnames: false,
  ie8: false,
  module: false,
  nameCache: undefined,
  safari10: false,
  toplevel: false,
};

const visualizerOptions: PluginVisualizerOptions = {
  open: true,
  gzipSize: true,
  brotliSize: true,
  template: "treemap",
  filename: "report/build.html",
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const isProduction = command === "build";

  console.log(command, mode);

  terserOptions.compress = { drop_console: isProduction };
  visualizerOptions.open = isProduction;

  const config: UserConfigExport = {
    plugins: [vue(), terser(terserOptions), visualizer(visualizerOptions)],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "./src"),
        },
        {
          find: "~",
          replacement: path.resolve(__dirname, "./src/components"),
        },
      ],
    },
    logLevel: "info",
    build: {
      chunkSizeWarningLimit: 1600,
    },
  };

  if (isProduction) {
    // isProduction
    config.css = {
      postcss: {
        plugins: [
          require("tailwindcss")({}),
          require("autoprefixer")({}),
          //require('postcss-csso')({ comments: false })
          // require('cssnano')({
          //   preset: [
          //     'default',
          //     {
          //       discardComments: {
          //         removeAll: true
          //       }
          //     }
          //   ]
          // })
        ],
      },
    };
  } else {
    // isDevelopment
    config.server = {
      open: "/",
      port: 8080,
      https: false,
      host: true,
    };
  }

  return config;

  // return {
  //   plugins: [vue()],
  //   resolve: {
  //     alias: [{ find: "@", replacement: "/src" }],
  //   },
  // };
});
