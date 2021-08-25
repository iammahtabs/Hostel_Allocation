import React, { useState } from "react";
import BookRoom from "./BookRoom";

const ChooseHostel = (props) => {
  const { user, email, gender } = props;
  const x = gender === "male" ? "B" : "G";
  const values = [1, 2, 3, 4, 5, 6];
  const hostels = values.map((i) => x + i);
  const [hostel, setHostel] = useState("");

  if (hostel) {
    return (
      <BookRoom user={user} email={email} gender={gender} hostel={hostel} />
    );
  }

  return (
    <div className="container">
      <h3>Choose A Hostel</h3>
      <div className="hostels">
        {hostels.map((value) => {
          return (
            <div
              className="hostel"
              key={value}
              onClick={() => {
                if (hostel === "") {
                  setHostel(value);
                }
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseHostel;
