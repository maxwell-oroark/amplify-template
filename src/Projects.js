import { Link } from "wouter";
import { Button } from "antd";

const projects = ["project-123", "project-456", "project-789"];

export default function Projects() {
  return (
    <main className="p-10">
      <h1>dGH Projects</h1>
      <div className="flex flex-col">
        {projects.map((project) => {
          return (
            <div key={project}>
              <Link to={`/projects/${project}`}>
                <Button type="link"> {project}</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
