import { Route } from "wouter";

import Projects from "./Projects";

import "./App.css";

function App({ user, signOut }) {
  return (
    <div className="App">
      <nav></nav>
      <Route path="/projects">
        <Projects user={user} signOut={signOut} />
      </Route>
    </div>
  );
}

export default App;
