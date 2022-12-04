import { cells } from "./mocks/cells";
import { Table } from "antd";
import { Link } from "wouter";

export default function Project({ id }) {
  return (
    <main className="px-10 py-5">
      <h1 className="my-5">
        Viewing <span className="font-semibold">{id}</span>
      </h1>
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
