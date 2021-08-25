import React, { useState } from "react";
import ChooseHostel from "./ChooseHostel";
import { FaFemale, FaMale } from "react-icons/fa";

const NewUser = (props) => {
  const [gender, setGender] = useState("");
  const { user, email } = props;

  if (gender) {
    return <ChooseHostel user={user} email={email} gender={gender} />;
  }

  return (
    <div className="new-user">
      <div
        className="female"
        onClick={() => {
          if (gender === "") setGender("female");
        }}
      >
        <FaFemale />
        {"  "}Girls Hostel
      </div>
      <div
        className="male"
        onClick={() => {
          if (gender === "") setGender("male");
        }}
      >
        <FaMale />
        {"  "}Boys Hostel
      </div>
    </div>
  );
};

export default NewUser;
