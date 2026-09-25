"use client";

import { Create } from "@refinedev/antd";
import { useForm } from "@refinedev/antd";
import { Form, Input, Button } from "antd";
import { useNavigation } from "@refinedev/core";

export default function UserCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "users",
    action: "create",
    redirect: "list",
  });
  const { list } = useNavigation();

  return (
    <Create title="Tambah Pengguna" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Nama" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, min: 8 }]}
          extra="Minimal 8 karakter. Akan di-hash otomatis.">
          <Input.Password />
        </Form.Item>
      </Form>
      <Button onClick={() => list("users")}>Kembali</Button>
    </Create>
  );
}
