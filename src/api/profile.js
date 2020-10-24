import axios from "axios";

import authHeader from "../utils/authHeader";

const mockedProfileRecruiterDetails = {
  id: 25,
  industries_details: [
    {
      id: 1,
      speciality_name: "Various Industries",
    },
  ],
  functions_details: [
    {
      id: 1,
      speciality_name: "Various Functions",
    },
  ],
  levels_details: [],
  services_details: [],
  first_name: "Adam",
  middle_initial: "M",
  last_name: "Smith",
  email: "abetteremail@fastpoke.com",
  profile_picture: "assets/img/person.jpg",
  google_place_id: "jjasdosdn89jskn",
  about: "Something about me",
  is_published: true,
  is_active: true,
  auth_user: 76,
  levels: [],
  industries: [1],
  functions: [1],
  services: [],
};

const mockedProfileEmployerDetails = {
  about: "",
  auth_user: 60,
  company: "",
  email: "test222@gmail.com",
  first_name: "test",
  google_place_id: "",
  id: 4,
  is_active: true,
  is_published: false,
  last_name: "test",
  middle_initial: "",
  profile_picture: null,
};

const mockedProfileTalentDetails = {
  id: 37,
  first_name: "Taylan",
  middle_initial: "",
  last_name: "Uner",
  email: "KNaeWfJNL@fastpoke.com",
  profile_picture: null,
  google_place_id: "",
  about: "",
  is_published: true,
  is_active: true,
  resume: null,
  auth_user: 77,
  industries: [],
  functions: [],
};

class ProfileApi {
  _baseUrl = "https://fastpoke.com/profile-details/";
  _isMockRequests = true;

  getEmployerProfileDetails = async (id) => {
    if (this._isMockRequests) {
      return Promise.resolve({
        data: mockedProfileEmployerDetails,
      });
    }

    const res = await axios.get(this._baseUrl + "employer/" + id, {
      headers: authHeader(),
    });

    return res;
  };

  getTalentProfileDetails = async (id) => {
    if (this._isMockRequests) {
      return Promise.resolve({
        data: mockedProfileTalentDetails,
      });
    }

    const res = await axios.get(this._baseUrl + "talent/" + id, {
      headers: authHeader(),
    });

    return res;
  };

  getRecruiterProfileDetails = async (id) => {
    if (this._isMockRequests) {
      return Promise.resolve({
        data: mockedProfileRecruiterDetails,
      });
    }

    const res = await axios.get(this._baseUrl + "recruiter/" + id, {
      headers: authHeader(),
    });

    return res;
  };
}

export default ProfileApi;
