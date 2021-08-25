import "./App.css";
import { useState } from "react";

import SignIn from "./components/SignIn";
import HostelAllotment from "./components/HostelAllotment";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  return user ? (
    <HostelAllotment user={user} email={email} />
  ) : (
    <SignIn setUser={setUser} setEmail={setEmail} />
  );
}

export default App;
