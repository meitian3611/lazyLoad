import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //启动服务配置
  server: {
    host: "0.0.0.0",
    cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
    open: true, // 服务启动时自动在浏览器中打开应用
    https: false, // 是否启用 http 2
    port: 1013,
    strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    proxy: {
      "/api": {
        target: "http://localhost:3000", //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
