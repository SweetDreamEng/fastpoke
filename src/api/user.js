import axios from "axios";

import authHeader from "../utils/authHeader";

const mockedUserDetails = {
  auth_user_id: 60,
  profile_type: "employer",
  profile_id: 4,
};

class UserApi {
  _baseUrl = "https://fastpoke.com/";
  _isMockRequests = true;

  getUserDetails = async () => {
    if (this._isMockRequests) {
      return Promise.resolve({
        data: mockedUserDetails,
      });
    }

    const res = await axios.get(this._baseUrl + "user-details/", {
      headers: authHeader(),
    });

    return res;
  };
}

export default UserApi;
