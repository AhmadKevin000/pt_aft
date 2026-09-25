"use client";

import { Create } from "@refinedev/antd";
import { useForm } from "@refinedev/antd";
import { Form, Input, InputNumber, Button } from "antd";
import { useNavigation } from "@refinedev/core";

export default function StatsCreate() {
  const { formProps, saveButtonProps } = useForm({
    resource: "stats",
    action: "create",
    redirect: "list",
  });
  const { list } = useNavigation();

  return (
    <Create title="Tambah Statistik" saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={{ order: 0, icon: "❄️" }}>
        <Form.Item label="Nilai" name="value" rules={[{ required: true }]}
          extra="Contoh: 200+, 99.8%, 15+">
          <Input />
        </Form.Item>
        <Form.Item label="Label" name="label" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Deskripsi" name="description" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item label="Ikon" name="icon" extra="Emoji, contoh: ❄️ 🏭 ⚡ 🏆">
          <Input />
        </Form.Item>
        <Form.Item label="Urutan" name="order" extra="1-4 menentukan ikon di landing page">
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
      <Button onClick={() => list("stats")}>Kembali</Button>
    </Create>
  );
}
