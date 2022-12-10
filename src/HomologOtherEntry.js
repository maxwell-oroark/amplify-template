import React from "react";
import { Button, Form, Input } from "antd";

const HomologOtherEntry = () => {
  const [form] = Form.useForm();

  return (
    <Form
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 8 }}
      labelAlign="left"
      layout="horizontal"
      form={form}
    >
      <Form.Item label="Gain">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Loss/SCE">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Chromothripsis">
        <Input type="number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary bg-blue-400">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default HomologOtherEntry;
