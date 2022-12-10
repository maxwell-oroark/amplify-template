import { cells } from "./mocks/cells";
import CellThumbnailSrc from "./mocks/cell_thumbnail.jpg";
import { Tabs, Tag } from "antd";

export default function Cell({ id }) {
  const cell = cells.find((c) => c.id === id);
  return (
    <main className="px-10 py-5">
      <div className="flex space-x-2">
        <h1 className="my-5 text-2xl">
          Viewing <span className="font-semibold ">{cell.name}</span>
        </h1>
        <Tag
          className={`self-center ${
            cell.reviewd ? "bg-blue-400" : "bg-red-400"
          }`}
        >
          {cell.reviewed ? "reviewed" : "not reviewed"}
        </Tag>
      </div>
      <div className="flex">
        <Tabs>
          <Tabs.TabPane tab="Summary" key="summary">
            Summary
          </Tabs.TabPane>
          <Tabs.TabPane tab="Spread" key="spread">
            Spread
          </Tabs.TabPane>
          <Tabs.TabPane tab="Loci" key="loci">
            <Tabs>
              <Tabs.TabPane tab="Loci A" key="loci-a">
                <Tabs>
                  <Tabs.TabPane tab="Homolog 1" key="homolog-1">
                    Homolog 1
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Homolog 2" key="homolog-2">
                    Homolog 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Other" key="homolog-3">
                    Other
                  </Tabs.TabPane>
                </Tabs>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Loci B" key="loci-b">
                <Tabs>
                  <Tabs.TabPane tab="Homolog 1" key="homolog-1">
                    Homolog 1
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Homolog 2" key="homolog-2">
                    Homolog 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Other" key="homolog-3">
                    Other
                  </Tabs.TabPane>
                </Tabs>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Loci C" key="loci-c">
                <Tabs>
                  <Tabs.TabPane tab="Homolog 1" key="homolog-1">
                    Homolog 1
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Homolog 2" key="homolog-2">
                    Homolog 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Other" key="homolog-3">
                    Other
                  </Tabs.TabPane>
                </Tabs>
              </Tabs.TabPane>
            </Tabs>
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
