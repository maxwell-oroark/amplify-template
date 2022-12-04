import { Link } from "wouter";
import { Button } from "antd";

const projects = ["project-123", "project-456", "project-789"];

export default function Projects() {
  return (
    <main className="px-10 py-5">
      <h1 className="my-5 font-semibold text-2xl">dGH Projects</h1>
      <div className="flex flex-col">
        {projects.map((project) => {
          return (
            <div key={project}>
              <Link to={`/projects/${project}`}>
                <Button size="large" type="link">
                  {" "}
                  {project}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
