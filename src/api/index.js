import axios from "axios";

const api = axios.create({
  baseURL: "/",
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
    //'Authorization': 'token <your-token-here> -- Bearer hk-itygio100000847948fa705f83dda7e440b3f64fb97467d2'
  },
});

export default api;
