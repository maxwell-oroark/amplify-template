import { Route } from "wouter";

import Nav from "./Nav";
import Projects from "./Projects";
import Project from "./Project";
import Sample from "./Sample";
import Cell from "./Cell";

function App({ user, signOut }) {
  return (
    <div className="App">
      <Nav user={user} signOut={signOut} />
      <Route path="/">
        <Projects user={user} signOut={signOut} />
      </Route>
      <Route path="/projects">
        <Projects user={user} signOut={signOut} />
      </Route>
      <Route path="/projects/:projectId">
        {(params) => <Project id={params.projectId} />}
      </Route>
      <Route path="/projects/:projectId/samples">
        {(params) => <Project id={params.projectId} />}
      </Route>
      <Route path="/projects/:projectId/samples/:sampleId">
        {(params) => (
          <Sample projectId={params.projectId} sampleId={params.sampleId} />
        )}
      </Route>
      <Route path="/projects/:projectId/samples/:sampleId/cells/:cellId">
        {(params) => (
          <Cell
            projectId={params.projectId}
            sampleId={params.sampleId}
            id={params.cellId}
          />
        )}
      </Route>
    </div>
  );
}

export default App;
