import axios from "axios";

const intance = axios.create({
  baseURL: "http://localhost:7000",
});

intance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
  
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default intance;
