import GoTrue from "gotrue-js";
import { camelizeKeys } from "humps";

export const auth = new GoTrue({
  APIUrl: process.env.REACT_APP_GOTRUE_API_URL,
  audience: "",
  setCookie: false,
});

export const serializeUser = (data) => {
  const user = camelizeKeys(data);

  return {
    id: user.id,
    token: user.token,
    aud: user.aud,
    role: user.role,
    email: user.email,
    confirmedAt: user.confirmedAt,
    appMetadata: user.appMetadata,
    userMetadata: user.userMetadata,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
