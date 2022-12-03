import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "@aws-amplify/core";
import awsmobile from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";

import "./index.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Authenticator variation="modal" hideSignUp={true}>
      {({ user, signOut }) => <App user={user} signOut={signOut} />}
    </Authenticator>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
