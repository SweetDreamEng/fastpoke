import axios from "axios";

class HomeApi {
    _baseUrl = "https://fastpoke.com/api/specialities/";

    getSpecialties = async () => {
        return await axios.get(this._baseUrl + "recruiter-specialities/",);
    };

}

export default HomeApi;
