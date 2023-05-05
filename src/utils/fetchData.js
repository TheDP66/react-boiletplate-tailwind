import Cookies from "js-cookie";
import axios from "../lib/axios";

export const deleteDataAPI = async (url) => {
  const res = await axios.delete(`/api/${url}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });

  return res;
};

export const getDataAPI = async (url, responseType) => {
  const res = await axios.get(`/api/${url}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
    responseType: responseType,
  });

  return res;
};

export const patchDataAPI = async (url, data) => {
  const res = await axios.patch(`/api/${url}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });

  return res;
};

export const postDataAPI = async (url, data) => {
  const res = await axios.post(`/api/${url}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });

  return res;
};

export const putDataAPI = async (url, data) => {
  const res = await axios.put(`/api/${url}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });

  return res;
};
