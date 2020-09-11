import GoTrue from "gotrue-js";

export const auth = new GoTrue({
  APIUrl: process.env.REACT_APP_GOTRUE_API_URL,
  audience: "",
  setCookie: false,
});
