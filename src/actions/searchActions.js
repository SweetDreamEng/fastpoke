import * as actions from "./types";
import { useSelector } from "react-redux";
import SearchApi from "../api/search";

const searchApi = new SearchApi();


const addIndustry = (data) => ({
  type: actions.ADD_INDUSTRY,
  payload: {
    data,
  }
});

const removeIndustry = (data) => ({
  type: actions.REMOVE_INDUSTRY,
  payload: {
    data,
  }
});

const getRecruitersSuccess = (data) => ({
  type: actions.GET_RECRUITERS_SUCCESS,
  payload: {
    data,
  }
});

export const changeIndustry = (data) => async (dispatch) => {
  if (data.value == true) {
    await dispatch(addIndustry(data.name));
  } else {
    await dispatch(removeIndustry(data.name));
  }
}

export const getRecruiters = (data) => async (dispatch) => {
  try {
    const res = await searchApi.searchRecruiters(data);    
    dispatch(getRecruitersSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
};