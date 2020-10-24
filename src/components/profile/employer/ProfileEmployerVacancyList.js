import React from "react";
import ProfileEmployerVacancyShare from "./ProfileEmployerVacancyShare";
import ProfileEmployerForm from "./ProfileEmployerForm";

const ProfileEmployerVacancyList = ({
  vacancies,
  onShareVacancyClick,
  onAddNewVacancyClick,
  onVacancyUpdate,
  vacancyShareError,
}) => {
  const sortedVacancies = [...vacancies].sort((a, b) => b.id - a.id);

  return (
    <div>
      {sortedVacancies.map((data) => {
        return (
          <div key={data.id}>
            <ProfileEmployerVacancyShare
              onSendClick={(id) => onShareVacancyClick(id, data.id)}
              disabled={!vacancyShareError.isAllowToShareVacancies}
              error={
                data.id === vacancyShareError.vacancyId
                  ? vacancyShareError.message
                  : ""
              }
            />

            <ProfileEmployerForm
              onSubmit={(formData) => onVacancyUpdate(data.id, formData)}
              title={data?.title}
              description={data?.description}
              hireType={data?.employment_type}
              salary={data?.salary}
              submitButtonText="Save changes"
              showAddAnotherBtn
              onAddNewVacancyClick={onAddNewVacancyClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileEmployerVacancyList;
