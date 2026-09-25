"use client";

import { Create } from "@refinedev/antd";
import { useForm } from "@refinedev/antd";
import { Form, Input, InputNumber, Button } from "antd";
import { useNavigation } from "@refinedev/core";

export default function FAQCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "faqs",
    action: "create",
    redirect: "list",
  });
  const { list } = useNavigation();

  return (
    <Create title="Tambah FAQ" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={{ order: 0 }}>
        <Form.Item label="Pertanyaan" name="question" rules={[{ required: true }]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Jawaban" name="answer" rules={[{ required: true }]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item label="Urutan" name="order">
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
      <Button onClick={() => list("faqs")}>Kembali</Button>
    </Create>
  );
}
