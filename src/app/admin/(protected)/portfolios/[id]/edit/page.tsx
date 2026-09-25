"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";

export default function PortfolioEdit() {
  const { formProps, saveButtonProps } = useForm({ queryOptions: { retry: false } });

  return (
    <Edit title="Edit Portofolio" saveButtonProps={saveButtonProps}>
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
    </Edit>
  );
}
