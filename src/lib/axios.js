import axios from "axios";
import { BASE_URL_BE } from "../constant/url";

const instance = axios.create({
  baseURL: BASE_URL_BE,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
