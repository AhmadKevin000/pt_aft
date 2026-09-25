"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export default function FAQEdit() {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit title="Edit FAQ" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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
    </Edit>
  );
}
