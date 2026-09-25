"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function UserEdit() {
  const { formProps, saveButtonProps, query } = useForm();
  const record = query?.data?.data as { email?: string } | undefined;

  return (
    <Edit title="Edit Pengguna" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Nama" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password Baru"
          name="password"
          extra={
            record?.email
              ? `Kosongkan jika tidak ingin mengganti password (${record.email}).`
              : "Kosongkan jika tidak ingin mengganti password."
          }
        >
          <Input.Password placeholder="(tidak diubah)" />
        </Form.Item>
      </Form>
    </Edit>
  );
}
