import { getCookie } from "./helpers";

export default function authHeader() {
  const user = JSON.parse(getCookie("user"));

  if (user && user.access_token) {
    return { Authorization: user.token_type + " " + user.access_token };
  } else {
    return {};
  }
}
