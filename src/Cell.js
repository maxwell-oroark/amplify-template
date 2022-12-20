import { Tabs, Tag } from "antd";
import { useQuery } from "react-query";
import { fetchProject } from "./mocks/project";

import { cells } from "./mocks/cells";
import CellThumbnailSrc from "./mocks/cell_thumbnail.jpg";
import SpreadEntry from "./SpreadEntry";
import LociEntry from "./LociEntry";
import Loading from "./Loading";

export default function Cell({ id, projectId }) {
  const {
    data: project,
    isLoading,
    error,
  } = useQuery(["project", projectId], () => fetchProject(projectId));
  const cell = cells.find((c) => c.id === id);

  if (isLoading || error) return <Loading />;

  console.table([
    ["inserts", project.inserts],
    ["loci", project.loci],
  ]);
  return (
    <main className="px-10 py-5">
      <div className="flex space-x-2">
        <h1 className="my-5 text-2xl">
          Viewing <span className="font-semibold ">{cell.name}</span>
        </h1>
        <Tag
          className={`self-center ${
            cell.reviewed ? "bg-blue-400" : "bg-red-400"
          }`}
        >
          {cell.reviewed ? "reviewed" : "not reviewed"}
        </Tag>
      </div>
      <div className="flex">
        <Tabs className="w-72">
          <Tabs.TabPane tab="Summary" key="summary">
            {cell.notes}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Spread" key="spread">
            <SpreadEntry inserts={project.inserts} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Loci" key="loci">
            <LociEntry loci={project.loci} inserts={project.inserts} />
          </Tabs.TabPane>
        </Tabs>
        <div className="flex-grow">
          <div>
            <img
              alt="preview of cell"
              className="ml-auto w-96"
              src={CellThumbnailSrc}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
