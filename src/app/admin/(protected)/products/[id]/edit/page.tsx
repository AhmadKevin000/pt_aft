"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function ProductEdit() {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit title="Edit Produk" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Judul" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Deskripsi" name="description" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="URL Gambar (opsional)" name="imageUrl">
          <Input placeholder="https://..." />
        </Form.Item>
      </Form>
    </Edit>
  );
}
