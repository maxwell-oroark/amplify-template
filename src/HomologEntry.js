import React from "react";
import { Button, Form, Input } from "antd";

const HomologEntry = ({ inserts }) => {
  const [form] = Form.useForm();

  return (
    <Form
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 8 }}
      labelAlign="left"
      layout="horizontal"
      form={form}
    >
      <Form.Item label="Translocation">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item label="Inversion/SCE">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item label="Truncated">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item label="Large Signal Split">
        <Input type="checkbox" />
      </Form.Item>
      {Array(inserts)
        .fill(true)
        .map((_, i) => {
          return (
            <Form.Item label={`Inverted Insert ${String.fromCharCode(65 + i)}`}>
              <Input type="checkbox" />
            </Form.Item>
          );
        })}
      {Array(inserts)
        .fill(true)
        .map((_, i) => {
          return (
            <Form.Item
              label={`Non-inverted Insert ${String.fromCharCode(65 + i)}`}
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
export default HomologEntry;
