import React from "react";
import socialMediaAuth from "../service/auth";
import GoogleButton from "react-google-button";
import { googleProvider } from "../config/authMethods";

function SignIn(props) {
  const { setUser, setEmail } = props;
  const handleOnClick = async (provider) => {
    await socialMediaAuth(provider)
      .then((res) => {
        setUser(res.bc.displayName);
        setEmail(res.bc.email);
      })
      .catch((er) => {
        return er;
      });
  };

  return (
    <div className="sign-in">
      <h1>Hostel Allocation</h1>
      <div>Please Sign:In</div>
      <div>
        <GoogleButton onClick={() => handleOnClick(googleProvider)} />
      </div>
    </div>
  );
}

export default SignIn;
