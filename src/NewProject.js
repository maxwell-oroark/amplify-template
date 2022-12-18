import { Form, Input, Button } from "antd";

export default function NewProject({ id }) {
  const [form] = Form.useForm();
  const submitValues = (values) => {
    console.log(values);
  };

  return (
    <main className="px-10 py-5">
      <div className="text-2xl my-5">Configure Project</div>
      <div className="max-w-sm">
        <Form
          labelCol={{ span: 16 }}
          wrapperCol={{ span: 8 }}
          labelAlign="left"
          layout="horizontal"
          form={form}
          onFinish={submitValues}
        >
          <Form.Item name="loci" label="Number of Loci">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="inserts" label="Number of Inserts">
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary bg-blue-400">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}
