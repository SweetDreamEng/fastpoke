import axios from "axios";

import authHeader from "../utils/authHeader";

const mockedClientReferrals = [
  {
    id: 7,
    date_written: "2020-05-11",
    referral_type: "Client",
    writer_email: "stutuncuoglu@fastpoke.com",
    referral_id: 11,
    industry: "Entertainment",
    referral_description: "Amazing recruiter!",
    writer_title: "Some title",
    is_published: false,
    position_filled: "Manager",
    company_size: "Fortune 500",
  },
  {
    id: 5,
    date_written: "2020-08-11",
    referral_type: "Client",
    writer_email: "stutun@fastpoke.com",
    referral_id: 9,
    industry: "Various Industries",
    referral_description: "This recruiter was very good!",
    writer_title: "CEO",
    is_published: false,
    position_filled: "CEO",
    company_size: "Fortune 500",
  },
];

const mockedCandidateReferrals = [
  {
    id: 6,
    date_written: "2020-08-11",
    referral_type: "Candidate",
    writer_email: "sarpertutuncuoglu@gmail.com",
    referral_id: 12,
    industry: "Software",
    referral_description: "Great recruiter!",
    writer_title: "Some title",
    is_published: false,
    writer_first_name: "Sarper",
    writer_last_initial: "T",
    google_place_id: "Some place",
    writer_picture: null,
  },
];

class ReferralApi {
  _baseUrl = "https://fastpoke.com/referral/";
  _isMockRequests = true;

  getClientReferrals = async (id) => {
    if (this._isMockRequests) {
      return Promise.resolve({
        data: mockedClientReferrals,
      });
    }

    const res = await axios.get(this._baseUrl + "details/client/", {
      headers: authHeader(),
    });

    return res;
  };

  getCandidateReferrals = async (id) => {
    if (this._isMockRequests) {
      return Promise.resolve({
        data: mockedCandidateReferrals,
      });
    }

    const res = await axios.get(this._baseUrl + "details/candidate/", {
      headers: authHeader(),
    });

    return res;
  };
}

export default ReferralApi;
