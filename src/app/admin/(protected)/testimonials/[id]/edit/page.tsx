"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Rate } from "antd";

export default function TestimonialEdit() {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit title="Edit Testimoni" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Nama" name="author" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Perusahaan" name="company" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Testimoni" name="text" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Rating" name="rating" rules={[{ required: true }]}>
          <Rate />
        </Form.Item>
      </Form>
    </Edit>
  );
}
