"use client";

import { Create } from "@refinedev/antd";
import { useForm } from "@refinedev/antd";
import { Form, Input, Rate, Button } from "antd";
import { useNavigation } from "@refinedev/core";

export default function TestimonialCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "testimonials",
    action: "create",
    redirect: "list",
  });
  const { list } = useNavigation();

  return (
    <Create title="Tambah Testimoni" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={{ rating: 5 }}>
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
      <Button onClick={() => list("testimonials")}>Kembali</Button>
    </Create>
  );
}
