import * as actions from "../actions/types";

const initialState = {
  recruiters: [],
  industries: [],
  functions: [],
  levels: [],
  keyword: '',
  place_id: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_INDUSTRY: {
      const { data } = payload;
      const array = [...state.industries];
      array.push(data);
      return {
        ...state,
        industries: array,
      };
    }

    case actions.REMOVE_INDUSTRY: {
      const { data } = payload;
      var array = [...state.industries]; // make a separate copy of the array
      array = array.filter((item) => item != data);
      return {
        ...state,
        industries: array,
      };
    }

    case actions.GET_RECRUITERS_SUCCESS: {
      const { data } = payload;
      return {
        ...state,
        recruiters: data,
      };
    }

    default:
      return state;
  }
};
