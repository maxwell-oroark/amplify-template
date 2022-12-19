import { Table, Tag } from "antd";
import { Link } from "wouter";
import { cells } from "./mocks/cells";

export default function Sample({ projectId, sampleId }) {
  return (
    <main className="px-10 py-5">
      <h1 className="text-2xl my-5">Viewing {sampleId}</h1>
      <div className="grid grid-cols-2 max-w-sm border my-5">
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
                <Link
                  to={`/projects/${projectId}/samples/${sampleId}/cells/${record.id}`}
                >
                  {text}
                </Link>
              );
            },
          },
          {
            dataIndex: "reviewed",
            title: "Reviewed",
            render: (text, record) => {
              return (
                <Tag
                  className="self-center"
                  color={record.reviewed ? "blue" : "red"}
                >
                  {record.reviewed ? "reviewed" : "not reviewed"}
                </Tag>
              );
            },
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
