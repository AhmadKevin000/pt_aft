"use client";

import { List, EditButton, DeleteButton, useTable } from "@refinedev/antd";
import { Table, Space } from "antd";

export default function UserList() {
  const { tableProps } = useTable({ resource: "users", syncWithLocation: true });

  return (
    <List title="Pengguna Admin">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" width={60} />
        <Table.Column dataIndex="name" title="Nama" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column title="Aksi" width={140}
          render={(_, record: { id: number }) => (
            <Space>
              <EditButton hideText recordItemId={record.id} />
              <DeleteButton hideText recordItemId={record.id} />
            </Space>
          )} />
      </Table>
    </List>
  );
}
