import React, { useState, useEffect } from "react";
import Wrapper from "./Login.styles";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "../redux/auth";
import { AiFillGithub } from "react-icons/ai";
import Spinner from "../assets/Iphone-spinner-2.gif";

const Login = () => {
  const [data, setData] = useState({
    errorMessage: "",
    isLoading: false,
    hasCode: false,
  });
  const user = useSelector((user: RootState) => user.auth.user);
  const dispatch = useDispatch();

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const proxy_url = process.env.REACT_APP_PROXY_URL || "";

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, "", newUrl[0]);
      setData({ ...data, hasCode: true, isLoading: true });

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify({
          code: newUrl[1],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(authenticateUser({ ...data, isLoggedIn: true }));
        })
        .catch(() => {
          setData({
            ...data,
            isLoading: false,
            errorMessage: "Login failed, pls try again",
          });
        });
    }
  }, [user, dispatch, data, proxy_url]);

  if (user?.isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <Wrapper>
      <section className="container">
        <div className="main">
          <h1 className="heading">Github Profile</h1>
          <p>Oauth App</p>
          <span>{data.errorMessage}</span>
          {data.hasCode && <p>Authenticating user</p>}
          <div>
            {data.isLoading ? (
              <div className="loader-container">
                <img src={Spinner} alt="spinner" />
                <div className="loader">Loading....</div>
              </div>
            ) : (
              <div className="login-container">
                <a
                  className="login-link"
                  href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                  onClick={() => {
                    setData({ ...data, errorMessage: "", isLoading: true });
                  }}
                >
                  <AiFillGithub color="#fff" size="20px" /> &nbsp;
                  <span className="cursor">Login with GitHub</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Login;
