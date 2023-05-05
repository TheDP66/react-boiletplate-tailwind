const env = process.env.REACT_APP_ENV || "development";

const url = {
  development: {
    BASE_URL_BE: "https://localhost:8080",
    BASE_URL_FE: "https://localhost:3000",
  },
  trial: {
    BASE_URL_BE: "https://api.trialdwifi.dwp.io",
    BASE_URL_FE: "https://dashboard.trialdwifi.dwp.io",
  },
  production: {
    BASE_URL_BE: "https://api.dwifi.dwp.io",
    BASE_URL_FE: "https://dashboard.dwifi.dwp.io",
  },
};

export const BASE_URL_BE = url[env].BASE_URL_BE;
export const BASE_URL_FE = url[env].BASE_URL_FE;
