import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "@aws-amplify/core";
import awsmobile from "./aws-exports";
import { Authenticator, useTheme, View } from "@aws-amplify/ui-react";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsmobile);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authenticator
        variation="modal"
        hideSignUp={true}
        components={{
          Header() {
            const { tokens } = useTheme();
            return (
              <View
                backgroundColor={tokens.colors.teal[80]}
                textAlign="center"
                padding={tokens.space.medium}
              >
                <h1 className="text-white text-2xl">Kroma TiD</h1>
                <h2 className="text-white text-xl">dGH Scoring Application</h2>
              </View>
            );
          },
        }}
      >
        {({ user, signOut }) => <App user={user} signOut={signOut} />}
      </Authenticator>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
