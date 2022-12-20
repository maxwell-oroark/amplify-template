import React from "react";
import { Button, Form, Input } from "antd";

const HomologEntry = () => {
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
      <Form.Item label="Inverted Insert A">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item label="Non-inverted Insert A">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item>
        <Button type="primary bg-blue-400">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default HomologEntry;
