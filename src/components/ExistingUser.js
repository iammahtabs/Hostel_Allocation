import React from "react";
import Container from "@material-ui/core/Container";

const ExistingUser = (props) => {
  const { user, email } = props;
  const info = JSON.parse(localStorage.getItem(email));
  return (
    <Container maxWidth="md">
      <div className="existing-user">
        <h1>Welcome {user}</h1>
        <h3>You have already booked a room</h3>
        <h2>Your room details are as follows</h2>
        <h3>
          Hostel No <span className="details">{info.hostel}</span>
        </h3>
        <h3>
          Room No <span className="details">{info.room}</span>
        </h3>
      </div>
    </Container>
  );
};

export default ExistingUser;
