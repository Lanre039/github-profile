import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { saveDetails } from "../redux/user";
import Profile from "./Profile";
import Wrapper from "./Profile.styles";
import Spinner from "../assets/Iphone-spinner-2.gif";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const repo = useSelector((state: RootState) => state.user.repo);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = user?.repos_url ?? null;
    if (url) {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch(saveDetails(data));
          setLoading(false);
        });
    }
    // eslint-disable-next-line
  }, [user]);

  if (user && !user.isLoggedIn) {
    return <Navigate replace to="/login" />;
  }

  return (
    <Wrapper>
      {loading ? (
        <div>
          <img src={Spinner} alt="spinner" />
          <p>Login Successful, Fetching Profile</p>
        </div>
      ) : (
        <div className="continer">
          {Object.keys(user as {}).length > 0 && (
            <Profile user={user} repo={repo} />
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default Home;
