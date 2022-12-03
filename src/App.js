import { Route } from "wouter";

import Nav from "./Nav";
import Projects from "./Projects";

import "./App.css";

function App({ user, signOut }) {
  return (
    <div className="App">
      <Nav user={user} signOut={signOut} />
      <Route path="/projects/:projectId/cells/:cellId">
        {(params) => <div>{params?.cellId}</div>}
      </Route>
      <Route path="/projects/:projectId">
        {(params) => <div>{params?.projectId}</div>}
      </Route>
      <Route path="/projects">
        <Projects user={user} signOut={signOut} />
      </Route>
    </div>
  );
}

export default App;
