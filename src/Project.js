import { Button } from "antd";
import { Link } from "wouter";

const samples = ["samples-123", "samples-345", "samples-456"];

export default function Project({ id }) {
  return (
    <main className="px-10 py-5">
      <h1 className="text-2xl my-5">
        Viewing <span className="font-semibold">{id}</span>
      </h1>
      {samples.map((sampleId) => {
        return (
          <div key={sampleId}>
            <Link to={`/projects/${id}/samples/${sampleId}`}>
              <Button size="large" type="link">
                {sampleId}
              </Button>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
