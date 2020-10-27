import axios from "axios";
import queryString from "query-string";

class SearchApi {
  _baseUrl = "https://fastpoke.com/";

  searchRecruiters = async (params) => {
    const queries = queryString.stringify({
      industries: params?.industries,
      functions: params?.functions,
      level: params?.levels,
      keyword: params?.keyword,
      "place-id": params?.placeId,
    });
    const res = '';
    if (!queries)
      res = await axios.get(this._baseUrl + "recruiters/search/");
    else 
      res = await axios.get(this._baseUrl + "recruiters/search/?" + queries);
    return res;
  };
}

export default SearchApi;
