import { cells } from "./mocks/cells";
import { Table } from "antd";
import { Link } from "wouter";

export default function Project({ id }) {
  return (
    <main className="px-10 py-5">
      <h1 className="text-2xl my-5">
        Viewing <span className="font-semibold">{id}</span>
      </h1>
      <div className="grid grid-cols-2 max-w-sm border my-5">
        <div className="border py-2 px-3">Number of samples:</div>
        <div className="border py-2 px-3 font-bold">1</div>
        <div className="border py-2 px-3">Number of slides:</div>
        <div className="border py-2 px-3 font-bold">2</div>
        <div className="border py-2 px-3">Number of cells:</div>
        <div className="border py-2 px-3 font-bold">3</div>
        <div className="border py-2 px-3">Percentage scored:</div>
        <div className="border py-2 px-3 font-bold">4%</div>
      </div>
      <Table
        dataSource={cells}
        columns={[
          {
            dataIndex: "name",
            title: "Cell Name",
            render: (text, record) => {
              return (
                <Link to={`/projects/${id}/cells/${record.id}`}>{text}</Link>
              );
            },
          },
          {
            dataIndex: "reviewed",
            title: "Reviewed",
          },
          {
            dataIndex: "loss",
            title: "Loss",
          },
          {
            dataIndex: "translocation",
            title: "Translocation",
          },
          {
            dataIndex: "ssc",
            title: "SSC",
          },
          {
            dataIndex: "insertion",
            title: "Insertion",
          },
          {
            dataIndex: "size_diff",
            title: "Size Diff",
          },
        ]}
      />
    </main>
  );
}
