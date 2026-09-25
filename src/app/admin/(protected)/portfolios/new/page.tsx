"use client";

import { Create } from "@refinedev/antd";
import { useForm } from "@refinedev/antd";
import { Form, Input, DatePicker, Button } from "antd";
import { useNavigation } from "@refinedev/core";

export default function PortfolioCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "portfolios",
    action: "create",
    redirect: "list",
  });
  const { list } = useNavigation();

  return (
    <Create title="Tambah Portofolio" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Judul Proyek" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Nama Klien" name="clientName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Deskripsi (opsional)" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item label="Tanggal Selesai" name="dateBuilt" rules={[{ required: true }]}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="URL Gambar (opsional)" name="imageUrl">
          <Input placeholder="https://..." />
        </Form.Item>
      </Form>
      <Button onClick={() => list("portfolios")}>Kembali</Button>
    </Create>
  );
}
