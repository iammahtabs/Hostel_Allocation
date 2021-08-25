import React from "react";
import ExistingUser from "./ExistingUser";
import NewUser from "./NewUser";

const HostelAllotment = (props) => {
  const { user, email } = props;
  return (
    <div className="allotment">
      {localStorage.getItem(email) ? (
        <ExistingUser user={user} email={email} />
      ) : (
        <NewUser user={user} email={email} />
      )}
    </div>
  );
};

export default HostelAllotment;
