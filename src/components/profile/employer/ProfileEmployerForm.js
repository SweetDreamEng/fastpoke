import React from "react";
import { useForm } from "react-hook-form";

const ProfileEmployerForm = ({
  onSubmit,
  title,
  description,
  hireType,
  salary,
  submitButtonText,
  showAddAnotherBtn,
  onAddNewVacancyClick,
}) => {
  const { register, handleSubmit, watch, errors, reset } = useForm({
    defaultValues: {
      jobTitle: title,
      description,
      hireType,
      salary,
    },
  });

  return (
    <form className="po-post" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="fr-66">
          <label>Job Title</label>
          <input
            ref={register}
            name="jobTitle"
            ref={register({
              required: true,
            })}
            type="name"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="fr-33">
          <label>Hire Type</label>
          <select ref={register} name="hireType">
            <option value="Direct Hire">Direct Hire</option>
            <option value="Temp">Temp</option>
            <option value="Temp to Hire">Temp to Hire</option>
          </select>
        </div>
        <div className="fr-33">
          <label>Location</label>
          <input
            ref={register({
              required: true,
            })}
            name="location"
            type="name"
          />
        </div>
        <div className="fr-33">
          <label>Base Pay / Year</label>
          <input
            ref={register}
            ref={register({
              required: true,
            })}
            name="salary"
            type="name"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="fr-100">
          <label>Job Description</label>
          <textarea
            rows="8"
            ref={register}
            ref={register({
              required: true,
            })}
            name="description"
            placeholder="Describe the job, company, culture, and candidate qualities you're looking for..."
          ></textarea>

          {showAddAnotherBtn && (
            <button
              onClick={onAddNewVacancyClick}
              type="button"
              className="btn btn-small btn-outline"
            >
              <i className="fad fa-plus-circle"></i> Add another
            </button>
          )}
          <button type="submit" className="btn btn-small btn-outline">
            <i className="fad fa-plus-circle"></i> {submitButtonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileEmployerForm;
