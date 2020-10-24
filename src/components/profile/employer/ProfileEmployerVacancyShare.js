import React, { useRef, useState } from "react";
import debounce from "lodash.debounce";

import SearchApi from "../../../api/search";

const searchApi = new SearchApi();

const ProfileEmployerVacancyShare = ({ onSendClick, disabled, error }) => {
  const [value, setValue] = useState("");
  const [recruiters, setRecruiters] = useState([]);
  const [selectedRecruiter, setSelectedRecruiter] = useState({
    id: null,
    fullName: "",
  });

  const delayedGetRecruiters = useRef(
    debounce(async (value) => {
      try {
        const res = await searchApi.searchRecruiters({
          keyword: value,
        });

        setRecruiters(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }, 500)
  ).current;

  const handleChange = (e) => {
    const { value } = e.target;

    setValue(value);

    if (!value) {
      setRecruiters([]);
    } else {
      delayedGetRecruiters(value);
    }
  };

  const handleRecruiterClick = (id, fullName) => {
    setSelectedRecruiter({ id, fullName });
  };

  const handleRecruiterChangeClick = () => {
    setSelectedRecruiter({
      id: null,
      fullName: "",
    });
  };

  const handleSendClick = () => {
    onSendClick(selectedRecruiter.id);

    setSelectedRecruiter({
      id: null,
      fullName: "",
    });
  };

  return (
    <>
      <div className="po-share-error">{error}</div>
      <div className="po-share">
        <div className="po-share-search">
          {!selectedRecruiter.id ? (
            <>
              <input
                value={value}
                onChange={handleChange}
                type="search"
                placeholder="Recruiter name..."
              />

              <div className="po-share-recruiters">
                {recruiters.map((data) => {
                  const fullName = `${data.first_name} ${data.last_name}`;

                  return (
                    <div
                      key={data.id}
                      className="po-share-recruiter"
                      onClick={() => handleRecruiterClick(data.id, fullName)}
                    >
                      <img
                        className="po-share-recruiter-image"
                        src="/static/media/person.19ab2a2b.jpg"
                        alt=""
                      />
                      <span className="po-share-recruiter-name">
                        {fullName}
                      </span>
                      <span className="po-share-recruiter-location">
                        <i className="fad fa-map-marker-alt"></i> Stamford,
                        Connecticut
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="po-share-recruiter-selected">
              <span>{selectedRecruiter.fullName}</span>

              <button
                onClick={handleRecruiterChangeClick}
                className="btn btn-primary"
              >
                Change the recruiter
              </button>
            </div>
          )}
        </div>
        <button
          disabled={disabled || !selectedRecruiter.id}
          onClick={handleSendClick}
          className="btn btn-icon-left btn-primary"
        >
          <i className="fad fa-envelope"></i> Send
        </button>
      </div>
    </>
  );
};

export default ProfileEmployerVacancyShare;
