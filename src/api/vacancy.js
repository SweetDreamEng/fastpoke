import axios from "axios";

import authHeader from "../utils/authHeader";

class VacancyApi {
  _baseUrl = "https://fastpoke.com/vacancy/";

  getVacancies = async () => {
    const res = await axios.get(this._baseUrl + "details/", {
      headers: authHeader(),
    });

    return res;
  };

  createVacancy = async ({ googlePlaceId, description, hireType, salary }) => {
    const formData = new FormData();
    formData.append("position", "Manager");
    formData.append("salary_type", "Yearly");
    formData.append("industry", "1");
    formData.append("google_place_id", googlePlaceId);
    formData.append("description", description);
    formData.append("employment_type", hireType);
    formData.append("salary", salary);

    const config = {
      headers: {
        ...authHeader(),
        "content-type": "multipart/form-data",
      },
    };

    const res = await axios.post(this._baseUrl + "create/", formData, config);

    return res;
  };

  shareVacancy = async ({ vacancyId, recruiterProfileId }) => {
    const formData = new FormData();

    formData.append("vacancy", vacancyId);
    formData.append("recruiter_profile", recruiterProfileId);

    const config = {
      headers: {
        ...authHeader(),
        "content-type": "multipart/form-data",
      },
    };

    const res = await axios.post(this._baseUrl + "share/", formData, config);

    return res;
  };

  editVacancy = async (
    id,
    { googlePlaceId, description, hireType, salary }
  ) => {
    const formData = new FormData();
    formData.append("google_place_id", googlePlaceId);
    formData.append("description", description);
    formData.append("employment_type", hireType);
    formData.append("salary", salary);

    const config = {
      headers: {
        ...authHeader(),
        "content-type": "multipart/form-data",
      },
    };

    const res = await axios.patch(
      this._baseUrl + "edit/" + id,
      formData,
      config
    );

    return res;
  };
}

export default VacancyApi;
