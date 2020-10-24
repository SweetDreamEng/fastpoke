import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Layout from "../Layout";

import AuthApi from "../../api/auth";

const authApi = new AuthApi();

const PasswordResetForm = () => {
  const { register, handleSubmit } = useForm({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { email } = data;

    setLoading(true);

    try {
      const res = await authApi.requestPasswordReset({ email });

      setLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.detail);
    }
  };

  return (
    <Layout>
      <main className="search-page">
        <section className="search content">
          <div className="container">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="account-box">
                <h1>Forgot your password?</h1>
                <div className="form-row">
                  <div className="fr-100">
                    <label>Email</label>
                    <input
                      name="email"
                      placeholder="Enter your email"
                      ref={register({
                        required: true,
                      })}
                      type="email"
                    />
                  </div>
                </div>
                {error && (
                  <div className="form-row">
                    <div className="fr-100">
                      <div className="form-row-error">{error}</div>
                    </div>
                  </div>
                )}
                <div className="form-row">
                  <div className="fr-100">
                    <p className="save-box">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary login-link"
                      >
                        Reset
                      </button>
                    </p>
                  </div>
                </div>
              </form>
            ) : (
              <div className="account-box">
                <h1>Your password was reset. Check your email</h1>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PasswordResetForm;
