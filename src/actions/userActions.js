import * as actions from "./types";
import { push } from "connected-react-router";

import AuthApi from "../api/auth";
import UserApi from "../api/user";
import { CLIENT_ID } from "../config";
import { getRouteByUserType } from "../utils/helpers";
import { setCookie, getCookie, eraseCookie } from "../utils/helpers";

const authApi = new AuthApi();
const userApi = new UserApi();

export const loginSuccess = (data) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const logout = () => (dispatch) => {
  eraseCookie("user");
  dispatch({
    type: actions.LOGOUT,
  });
};

export const login = (values) => async (dispatch) => {
  try {
    const loginRes = await authApi.loginUser({
      ...values,
      clientId: CLIENT_ID,
    });

    const parsedData = JSON.parse(loginRes.data);

    setCookie("user", loginRes.data, parsedData.expires_in);

    const userDetailsRes = await userApi.getUserDetails();

    dispatch(loginSuccess(userDetailsRes.data));

    dispatch(push(getRouteByUserType(userDetailsRes.data.profile_type)));
  } catch (error) {
    console.log(error);
  }
};

export const loginFromCookies = () => async (dispatch) => {
  const user = getCookie("user");

  if (!user) {
    return;
  }

  try {
    const userDetailsRes = await userApi.getUserDetails();
    dispatch(loginSuccess(userDetailsRes.data));
  } catch (error) {
    console.log(error);
  }
};
