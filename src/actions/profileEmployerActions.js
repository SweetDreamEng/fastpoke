import * as actions from "./types";
import ProfileApi from "../api/profile";
import VacancyApi from "../api/vacancy";

const profileApi = new ProfileApi();
const vacancyApi = new VacancyApi();

const createVacancySuccess = (data) => ({
  type: actions.CREATE_VACANCY_SUCCESS,
  payload: {
    data,
  },
});

const editVacancySuccess = (data) => ({
  type: actions.EDIT_VACANCY_SUCCESS,
  payload: {
    data,
  },
});

const getVacanciesSuccess = (data) => ({
  type: actions.GET_VACANCIES_SUCCESS,
  payload: {
    data,
  },
});

export const createVacancy = (data) => async (dispatch) => {
  const { description, hireType, salary, jobTitle } = data;
  try {
    const res = await vacancyApi.createVacancy({
      description,
      hireType,
      salary,
      jobTitle,
      googlePlaceId: data.google_place_id,
    });

    dispatch(createVacancySuccess(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const getVacancies = () => async (dispatch) => {
  try {
    const res = await vacancyApi.getVacancies();

    dispatch(getVacanciesSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const editVacancy = (id, data) => async (dispatch) => {
  const { description, hireType, salary, jobTitle } = data;
  try {
    const res = await vacancyApi.editVacancy(id, {
      description,
      hireType,
      salary,
      jobTitle,
    });

    dispatch(editVacancySuccess(res.data));
  } catch (error) {
    console.log(error);
  }
};
