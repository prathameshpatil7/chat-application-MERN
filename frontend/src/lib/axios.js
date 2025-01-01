import axios from "axios";

const getBaseUrl = () => {
  if (import.meta.env.MODE === "development") {
    return window.location.origin.replace(":5173", ":5001");
  }
  return "";  // In production, use relative path
};

export const axiosInstance = axios.create({
  baseURL: `${getBaseUrl()}/api`,
  withCredentials: true,
});
