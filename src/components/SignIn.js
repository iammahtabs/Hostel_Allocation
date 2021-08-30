import React from "react";
import socialMediaAuth from "../service/auth";
import GoogleButton from "react-google-button";
import { googleProvider } from "../config/authMethods";

function SignIn(props) {
  const { setUser, setEmail } = props;
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    try {
      setUser(res.displayName);
      setEmail(res.email);
    } catch (er) {
      return er;
    }
    console.log(res);
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
