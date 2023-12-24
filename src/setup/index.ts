import axios from "axios";
import { BASE_URL } from "../basUrl";

const Service = axios.create({
  baseURL: BASE_URL,
});

Service.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params["apikey"] = "62511545d7f3dd6212ffa6ae9df483fd";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  } 
);

export default Service;
