import React, { useState, useEffect } from "react";
import ProfileRecruiterReferral from "./ProfileRecruiterReferral";

const ALL_REFERRALS = "all";
const CLIENT_REFERRALS = "client";
const CANDIDATE_REFERRALS = "candidate";

const filterReferrals = (referrals, filter) => {
  switch (filter) {
    case ALL_REFERRALS:
      return [...referrals.clientList, ...referrals.candidateList];
    case CLIENT_REFERRALS:
      return [...referrals.clientList];
    case CANDIDATE_REFERRALS:
      return [...referrals.candidateList];

    default:
      return [];
  }
};

const ProfileRecruiterReferralsTab = ({ referrals }) => {
  const [filter, setFilter] = useState(ALL_REFERRALS);
  const [mappableReferrals, setMappableReferrals] = useState([]);

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const filteredData = filterReferrals(referrals, filter);
    const sortedData = filteredData.sort(
      (a, b) => new Date(b.date_written) - new Date(a.date_written)
    );

    setMappableReferrals(sortedData);
  }, [referrals, filter]);

  if (!referrals.clientList.length && !referrals.candidateList.length) {
    return <div className="wm-content">No referrals</div>;
  }

  return (
    <div className="wm-content">
      <select className="filter-sort" onChange={handleSelect}>
        <option value={ALL_REFERRALS}>All Referrals</option>
        <option value={CLIENT_REFERRALS}>Client Referrals</option>
        <option value={CANDIDATE_REFERRALS}>Candidate Referrals</option>
      </select>
      <br />
      <br />
      {mappableReferrals.map((data) => {
        return (
          <ProfileRecruiterReferral
            key={data?.referral_id}
            description={data?.referral_description}
            positionFilled={data?.position_filled}
            companySize={data?.company_size}
            industry={data?.industry}
            firstName={data?.writer_first_name}
            date={data?.date_written}
            googlePlaceId={data?.google_place_id}
            imageUrl={data?.writer_picture}
          />
        );
      })}
      <br />
    </div>
  );
};

export default ProfileRecruiterReferralsTab;
