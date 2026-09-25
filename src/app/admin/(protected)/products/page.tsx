"use client";

import { List, EditButton, DeleteButton, useTable } from "@refinedev/antd";
import { Table, Space } from "antd";

export default function ProductList() {
  const { tableProps } = useTable({ resource: "products", syncWithLocation: true });

  return (
    <List title="Produk">
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" width={60} />
        <Table.Column dataIndex="title" title="Judul" />
        <Table.Column dataIndex="description" title="Deskripsi" ellipsis />
        <Table.Column dataIndex="imageUrl" title="Gambar" ellipsis
          render={(v: string | null) => (v ? <a href={v} target="_blank" rel="noreferrer">Lihat</a> : "-")} />
        <Table.Column title="Aksi" width={140}
          render={(_, record: { id: number | string }) => (
            <Space>
              <EditButton hideText recordItemId={record.id} />
              <DeleteButton hideText recordItemId={record.id} />
            </Space>
          )} />
      </Table>
    </List>
  );
}
