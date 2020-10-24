import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "react-hook-form";

import Layout from "../components/Layout";

import AuthApi from "../api/auth";

const authApi = new AuthApi();

const ResetPassword = () => {
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit } = useForm({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const parsedQuery = queryString.parse(location.search);
    const { uid, token } = parsedQuery;
    const { password, newPassword } = data;

    setLoading(true);

    try {
      const res = await authApi.resetPassword(
        {
          uid,
          newPassword,
        },
        token
      );

      setLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.detail);
    }
  };

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);

    if (!parsedQuery?.uid || !parsedQuery?.token) {
      history.push("/404");
    }
  }, [location.search, history]);

  return (
    <Layout>
      <div className="container">
        <div className="reset-password">
          {!isSubmitted ? (
            <>
              <h1>Change your password</h1>

              <form
                className="reset-password-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label>New password</label>
                <input
                  name="newPassword"
                  ref={register({
                    required: true,
                  })}
                  type="password"
                />

                {error && <div className="reset-password-error">{error}</div>}

                <button
                  disabled={loading}
                  className="btn btn-primary"
                  type="submit"
                >
                  Change my password
                </button>
              </form>
            </>
          ) : (
            <div>
              <h1>Your password was changed</h1>
              <Link to="/login" className="btn btn-primary">
                Go to login
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
