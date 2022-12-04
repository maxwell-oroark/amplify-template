import { cells } from "./mocks/cells";
import { Tabs, Tag } from "antd";

export default function Cell({ projectId, id }) {
  const cell = cells.find((c) => c.id === id);
  return (
    <main className="px-10 py-5">
      <div className="flex space-x-2">
        <h1 className="my-5 text-2xl">
          Viewing <span className="font-semibold ">{cell.name}</span>
        </h1>
        <Tag className="self-center" color={cell.reviewed ? "blue" : "red"}>
          {cell.reviewed ? "reviewed" : "not reviewed"}
        </Tag>
      </div>
      <Tabs>
        <Tabs.TabPane tab="Summary" key="item-1">
          Summary
        </Tabs.TabPane>
        <Tabs.TabPane tab="Spread" key="item-2">
          Spread
        </Tabs.TabPane>
        <Tabs.TabPane tab="Loci" key="item-3">
          <Tabs>
            <Tabs.TabPane tab="Loci A" key="loci-1">
              <Tabs>
                <Tabs.TabPane tab="Homolog 1" key="homolog-1">
                  Homolog 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Homolog 2" key="homolog-2">
                  Homolog 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Other" key="homolog-3">
                  Other
                </Tabs.TabPane>
              </Tabs>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Loci B" key="loci-2">
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
            <Tabs.TabPane tab="Loci C" key="loci-3">
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
    </main>
  );
}
