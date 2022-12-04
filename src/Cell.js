import { cells } from "./mocks/cells";
export default function Cell({ projectId, id }) {
  const cell = cells.find((c) => c.id === id);
  return (
    <main className="px-10 py-5">
      <h1 className="my-5">
        Viewing <span className="font-semibold ">{cell.name}</span>
      </h1>
    </main>
  );
}
