import { Form, InputNumber, Button } from "antd";
import { useQueryClient } from "react-query";

export default function NewProject({ project }) {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const submitValues = (values) => {
    const { loci, inserts } = values;
    localStorage.setItem(
      project.id,
      JSON.stringify({
        ...project,
        loci: parseInt(loci),
        inserts: parseInt(inserts),
      })
    );
    queryClient.invalidateQueries();
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
            <InputNumber min={1} max={3} type="number" />
          </Form.Item>
          <Form.Item name="inserts" label="Number of Inserts">
            <InputNumber min={1} max={2} type="number" />
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
