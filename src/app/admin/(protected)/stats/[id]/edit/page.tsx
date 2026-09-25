"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";

export default function StatsEdit() {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit title="Edit Statistik" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Nilai" name="value" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Label" name="label" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Deskripsi" name="description" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item label="Ikon" name="icon">
          <Input />
        </Form.Item>
        <Form.Item label="Urutan" name="order">
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
