"use client";

import { List, EditButton, DeleteButton, useTable } from "@refinedev/antd";
import { Table, Space } from "antd";

export default function FAQList() {
  const { tableProps } = useTable({ resource: "faqs", syncWithLocation: true });

  return (
    <List title="FAQ">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="order" title="Urutan" width={80} />
        <Table.Column dataIndex="question" title="Pertanyaan" ellipsis />
        <Table.Column dataIndex="answer" title="Jawaban" ellipsis />
        <Table.Column title="Aksi" width={140}
          render={(_, record: { id: string }) => (
            <Space>
              <EditButton hideText recordItemId={record.id} />
              <DeleteButton hideText recordItemId={record.id} />
            </Space>
          )} />
      </Table>
    </List>
  );
}
