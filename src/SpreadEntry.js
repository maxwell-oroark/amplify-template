import React from "react";
import { Button, Form, Input } from "antd";

const SpreadEntry = ({ inserts }) => {
  const [form] = Form.useForm();
  console.log(inserts);
  return (
    <Form
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 8 }}
      labelAlign="left"
      layout="horizontal"
      form={form}
    >
      <Form.Item label="Chromothripsis DAPI only">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item label="Complex">
        <Input type="checkbox" />
      </Form.Item>
      {Array(inserts)
        .fill(true)
        .map((_, i) => {
          return (
            <Form.Item label={`NGTS Score ${String.fromCharCode(65 + i)}`}>
              <Input type="checkbox" />
            </Form.Item>
          );
        })}
      {Array(inserts)
        .fill(true)
        .map((_, i) => {
          return (
            <Form.Item
              label={`Count off target ${String.fromCharCode(65 + i)}`}
            >
              <Input type="checkbox" />
            </Form.Item>
          );
        })}
      <Form.Item>
        <Button type="primary bg-blue-400">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default SpreadEntry;
