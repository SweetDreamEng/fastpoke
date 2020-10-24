import * as actions from "../actions/types";

const initialState = {
  userType: null,
  id: null,
  isLoggedIn: false,
  details: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.LOGIN_SUCCESS: {
      const { data } = payload;

      return {
        ...state,
        isLoggedIn: true,
        userType: data?.profile_type,
        id: data?.auth_user_id,
        details: { ...data },
      };
    }

    default:
      return state;
  }
};
