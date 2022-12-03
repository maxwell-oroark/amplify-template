import { useEffect, useState } from "react";

import Amplify from "@aws-amplify/core";
import awsmobile from "./aws-exports";
import "./App.css";
import { Auth } from "aws-amplify";

Amplify.configure(awsmobile);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentUserInfo();
      setUser(user);
    };
    if (!user) {
      fetchUser();
    }
  }, [user]);
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="App-logo h-20 w-20"
          alt="logo"
        />

        {!user ? (
          <div>
            <button
              onClick={() =>
                Auth.signIn({
                  username: "m.d.oroark@gmail.com",
                  password: "helloworld123",
                }).then((user) => {
                  setUser(user);
                })
              }
            >
              Login
            </button>
          </div>
        ) : (
          <button
            className="text-xl underline"
            onClick={() => {
              Auth.signOut().then(() => {
                setUser(null);
              });
            }}
          >
            Sign Out
          </button>
        )}
        {user && <div>Logged in as {user.attributes.email}</div>}
      </header>
    </div>
  );
}

export default App;
