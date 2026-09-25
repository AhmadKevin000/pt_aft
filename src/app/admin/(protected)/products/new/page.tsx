"use client";

import { Create } from "@refinedev/antd";
import { useForm } from "@refinedev/antd";
import { Form, Input, Button } from "antd";
import { useNavigation } from "@refinedev/core";

export default function ProductCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "products",
    action: "create",
    redirect: "list",
  });
  const { list } = useNavigation();

  return (
    <Create title="Tambah Produk" saveButtonProps={saveButtonProps}>
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
      <Button onClick={() => list("products")}>Kembali</Button>
    </Create>
  );
}
