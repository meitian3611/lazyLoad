import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
    //'Authorization': 'token <your-token-here> -- Bearer hk-itygio100000847948fa705f83dda7e440b3f64fb97467d2'
  },
});

// 请求的拦截器
api.interceptors.request.use(
  function (config) {
    // 判断请求的类型
    // 如果是post请求就把默认参数拼到data里面
    // 如果是get请求就拼到params里面
    if (config.method === "post") {
      // config.data
    } else if (config.method === "get") {
      config.params = {
        timestamp: Date.now(), // 默认参数
        ...config.params,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
