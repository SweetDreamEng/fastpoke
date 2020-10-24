const {
  REACT_APP_CLIENT_ID,
  REACT_APP_GOOGLE_CLIENT_ID,
  REACT_APP_SERVER_URL,
} = process.env;

export const CLIENT_ID =
  REACT_APP_CLIENT_ID !== undefined ? REACT_APP_CLIENT_ID : "";

export const GOOGLE_CLIENT_ID =
  REACT_APP_GOOGLE_CLIENT_ID !== undefined ? REACT_APP_GOOGLE_CLIENT_ID : "";

export const SERVER_URL =
  REACT_APP_SERVER_URL !== undefined ? REACT_APP_SERVER_URL : "";
