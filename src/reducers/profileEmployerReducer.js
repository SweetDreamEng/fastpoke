import * as actions from "../actions/types";

const initialState = {
  vacancies: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_VACANCIES_SUCCESS: {
      const { data } = payload;

      return {
        ...state,
        vacancies: data,
      };
    }

    case actions.CREATE_VACANCY_SUCCESS: {
      const { data } = payload;

      return {
        ...state,
        vacancies: [...state.vacancies, data],
      };
    }

    case actions.EDIT_VACANCY_SUCCESS: {
      const { data } = payload;

      return {
        ...state,
        vacancies: state.vacancies.map((vacancy) => {
          if (vacancy.id === data.id) {
            return { ...vacancy, ...data };
          }

          return vacancy;
        }),
      };
    }

    default:
      return state;
  }
};
