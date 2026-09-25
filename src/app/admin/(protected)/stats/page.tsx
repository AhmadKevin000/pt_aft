"use client";

import { List, EditButton, DeleteButton, useTable } from "@refinedev/antd";
import { Table, Space } from "antd";

export default function StatsList() {
  const { tableProps } = useTable({ resource: "stats", syncWithLocation: true });

  return (
    <List title="Statistik Industri">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="order" title="Urutan" width={80} />
        <Table.Column dataIndex="value" title="Nilai" width={120} />
        <Table.Column dataIndex="label" title="Label" width={200} />
        <Table.Column dataIndex="description" title="Deskripsi" ellipsis />
        <Table.Column dataIndex="icon" title="Ikon" width={80} />
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
