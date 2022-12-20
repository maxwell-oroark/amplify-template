import { Tabs } from "antd";
import HomologEntry from "./HomologEntry";
import HomologOtherEntry from "./HomologOtherEntry";

export default function LociEntry({ loci, inserts }) {
  return (
    <Tabs>
      {Array(loci)
        .fill(true)
        .map((_, i) => {
          return (
            <Tabs.TabPane
              // simple way to map acending ints 0, 23 to A,B,C
              tab={`Loci ${String.fromCharCode(65 + i)}`}
              key={`loci-${String.fromCharCode(65 + i)}`}
            >
              <Tabs>
                <Tabs.TabPane tab="Homolog 1" key="homolog-1">
                  <HomologEntry inserts={inserts} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Homolog 2" key="homolog-2">
                  <HomologEntry inserts={inserts} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Other" key="homolog-3">
                  <HomologOtherEntry />
                </Tabs.TabPane>
              </Tabs>
            </Tabs.TabPane>
          );
        })}
    </Tabs>
  );
}
