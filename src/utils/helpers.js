import {
  USER_TYPE_TALENT,
  USER_TYPE_EMPLOYER,
  USER_TYPE_RECRUITER,
} from "../constants";

export const getRouteByUserType = (type) => {
  switch (type) {
    case USER_TYPE_TALENT:
      return "/profile-talent";

    case USER_TYPE_EMPLOYER:
      return "/profile-employer";

    case USER_TYPE_RECRUITER:
      return "/profile-recruiter";

    default:
      return "";
  }
};

export const getCookie = function (name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
};

export const setCookie = (name, data, expires) => {
  let cookie = name + "=" + data;

  if (expires) {
    cookie += " ;max-age=" + expires;
  }

  document.cookie = cookie + ";path=/";
};

export const eraseCookie = (name) => {
  document.cookie = name + "=; Max-Age=0";
};
