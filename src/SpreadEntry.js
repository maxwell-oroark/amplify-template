import React from "react";
import { Button, Form, Input } from "antd";

const SpreadEntry = () => {
  const [form] = Form.useForm();

  return (
    <Form
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 8 }}
      labelAlign="left"
      layout="horizontal"
      form={form}
    >
      <Form.Item label="No Event">
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item label="NGTS Score Insert A">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="NGTS Score Insert B">
        <Input type="number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary bg-blue-400">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default SpreadEntry;
